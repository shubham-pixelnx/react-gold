import { Component, Fragment } from "react";
import Header from "../common/Header";
import { AlertMsg, s3Url, handleSmallPreview } from "../../utils/helper";
import svgs from "../svgs";
import placeholderImage from "./../../assets/images/placeholder.jpg";
import appDefaults, { appConstants } from "./../../constants/appDefaults";

import postman from "../../utils/postman";
import { Redirect } from "react-router-dom";
import cloneDeep from "lodash/cloneDeep";
import Popup from "../common/Popup";
let {
	app: {
		requestState: { INITIAL, FETCHING, ERRORED, SUCCEEDED },
		errorTypes,
		popupState: { OPEN, CLOSE },
		visibleState: { SHOW, HIDE },
	},
	editor: {
		layouts: { WIDE, SQUARE, VERTICAL },
	},
} = appConstants;
class Templates extends Component {
	constructor(props) {
		super(props);
		document.title = `Templates - ${appConstants.app.title}`;
		this.props.searchBox({
			placeholder: "Discover Amazing Templates",
			btnText: "Search",
		});
		this.layoutFilters = [
			{
				id: "layout_filter_all",
				value: "",
				label: "All",
			},
			{
				id: "layout_filter_wide",
				value: WIDE,
				label: "Wide",
			},
			{
				id: "layout_filter_square",
				value: SQUARE,
				label: "Square",
			},
			{
				id: "layout_filter_vertical",
				value: VERTICAL,
				label: "Vertical",
			},
		];

		this.state = {
			videoTitle: "",
			previewVideoLink: "",
			layoutFilter: "",
			layout: WIDE,
			templateId: 0,
			popup: {
				state: CLOSE,
			},
			videoCreateRequest: {
				stage: INITIAL,
			},
			videoPreview: {
				src: null,
				id: null,
				title: "",
				popup: {
					state: CLOSE,
				},
			},
			redirect: null,
		};
	}
	componentDidMount() {
		if (this.props.userArea.templates.stage === INITIAL) {
			this.props.fetchAllTemplates();
		}
	}
	togglePopup = (state = null) => {
		if (state === null) {
			state = this.state.popup.state === OPEN ? CLOSE : OPEN;
		}

		if (state === CLOSE) {
			if (this.state.videoCreateRequest.stage === FETCHING) {
				swal({
					title: "Please Wait Untill The Request Finishes!",
					icon: "info",
					timer: 3000,
					button: "Okay",
				});
				return;
			}
			this.setState({
				templateId: 0,
				videoTitle: "",
			});
		}
		this.setState((prev) => {
			return {
				popup: {
					...prev.popup,
					state,
				},
			};
		});
	};
	LoadingGalleryBox = ({ count }) => {
		let boxes = Array.from({ length: count }, (v, i) => i + 1);
		return boxes.map((i) => {
			return (
				<div className="col-lg-3 col-md-6 col-sm-12 gallery_items animated zoomIn" key={i}>
					<div className="we_mygallery_box galleryBoxLoading">
						<div className="we_mg_box_img wed_shimmer">
							<img src={placeholderImage} draggable={false} alt="" />
						</div>
						<div className="we_mg_box_detail">
							<div className="we_mg_name">
								<p className="we_mg_box_detail_heading wed_shimmer"></p>
								<p className="we_mg_box_detail_desc wed_shimmer"></p>
							</div>
						</div>
					</div>
				</div>
			);
		});
	};
	ResourceError = ({ type, title, text }) => {
		let errorIcons = {
			[errorTypes.UNKNOWN]: svgs.app.unknownError,
			[errorTypes.NETWORK_FAILURE]: svgs.app.networkError,
			[errorTypes.NOT_FOUND]: svgs.editor.emptybox,
		};
		return (
			<div className="wed_resource_error">
				<span className={"errorIcon".concat(` ICON_${type}`)}>{errorIcons[type] || errorIcons[errorTypes.UNKNOWN]}</span>
				<h1 className="errorTitle">{title}</h1>
				<p className="errorDescription">{text}</p>
			</div>
		);
	};
	handleSelectTemplateClick = (templateId) => {
		let target = this.props.userArea.templates.data.find((e) => e.id === templateId);
		this.togglePopup(OPEN);
		this.setState({
			templateId: templateId,
			videoTitle: target.title,
		});
	};
	createVideoWithTemplate = (e) => {
		e.preventDefault();
		if (this.state.videoCreateRequest.stage === FETCHING) return;
		let { templateId, layout } = this.state;
		this.setState((state) => {
			return {
				videoCreateRequest: {
					...state.videoCreateRequest,
					stage: FETCHING,
				},
			};
		});
		let data = {
			title: this.state.videoTitle || "Untitled",
			template: templateId,
		};
		if (templateId === 0) {
			data.layout = layout;
		}
		postman
			.post(
				`/video`,
				{
					body: JSON.stringify(data),
				},
				{ loader: false }
			)
			.then((res) => {
				AlertMsg("success", "Well Done!", res.message);
				this.props.fetchMyVideos();
				this.setState((state) => {
					return {
						videoCreateRequest: {
							...state.videoCreateRequest,
							stage: SUCCEEDED,
						},
						redirect: `/editor/${res.data.id}`,
					};
				});
			})
			.catch((res) => {
				AlertMsg("error", "Something went wrong.", res.message);
				this.setState((state) => {
					return {
						videoCreateRequest: {
							...state.videoCreateRequest,
							stage: ERRORED,
						},
					};
				});
				this.togglePopup(CLOSE);
			});
	};
	togglePreview = (state = null) => {
		if (state === null) {
			state = this.state.videoPreview.popup.state === OPEN ? CLOSE : OPEN;
		}

		if (state === CLOSE) {
			this.setState((s) => {
				return {
					videoPreview: {
						...s.videoPreview,
						id: null,
						src: null,
						title: "",
					},
				};
			});
		}
		this.setState((prev) => {
			return {
				videoPreview: {
					...prev.videoPreview,
					popup: {
						...prev.videoPreview.popup,
						state,
					},
				},
			};
		});
	};
	handlePopupPreview = (item) => {
		this.setState((s) => {
			return {
				videoPreview: {
					...s.videoPreview,
					id: item.id,
					src: s3Url(item.preview),
					title: item.title,
				},
			};
		});
		this.togglePreview(OPEN);
	};
	VideosBoxes = ({ list }) => {
		return list.map((item, index) => {
			let labelText = "Trending";
			let maxPopularity = Math.max(...list.map((e) => e.popularity));
			let isTrending = false;
			if (item.popularity === maxPopularity) {
				isTrending = true;
			}
			let poster = item.thumb ? s3Url(item.thumb) : placeholderImage;
			let smallPreview = item.smallpreview ? s3Url(item.smallpreview) : s3Url(item.preview);
			return (
				<div key={item.id} className="col-lg-3 col-md-6 col-sm-12 gallery_items">
					<div
						className="we_mygallery_box animated zoomIn"
						style={{
							animationDelay: `${index * 0.03}s`,
						}}
						onContextMenu={(e) => {
							e.preventDefault();
							console.log("Open full screen preview");
						}}
						onMouseEnter={(e) => {
							handleSmallPreview(e, isTrending);
						}}
						onMouseLeave={(e) => {
							handleSmallPreview(e, isTrending);
						}}
					>
						<div className="we_mg_box_img">
							{isTrending ? <span className="we_maintainer_tag we_top_tag">{labelText}</span> : null}
							<img draggable={false} src={poster} alt={item.title.concat(" thumbnail")} />
							<div className="we_mg_box_spinner">{svgs.app.previewLoading}</div>
							<video
								onDoubleClick={() => {
									this.handlePopupPreview(item);
								}}
								controls={false}
								muted={true}
								loop={true}
								src={smallPreview}
								poster={poster}
								onWaiting={(e) => {
									let mgBox = e.currentTarget.closest(".we_mg_box_img");
									if (!mgBox) return;
									mgBox.classList.add("loader_active");
								}}
								onPlaying={(e) => {
									let mgBox = e.currentTarget.closest(".we_mg_box_img");
									if (!mgBox) return;
									mgBox.classList.remove("loader_active");
								}}
								onPause={(e) => {
									let mgBox = e.currentTarget.closest(".we_mg_box_img");
									if (!mgBox) return;
									mgBox.classList.remove("loader_active");
								}}
							></video>
							<div className="we_small_player_controls">
								<button
									className="we_small_player_full_screen"
									title="Enlarge Preview"
									onClick={() => {
										this.handlePopupPreview(item);
									}}
								>
									{svgs.app.fullscreen}
								</button>
							</div>
						</div>
						<div className="we_mg_box_detail">
							<div className="we_mg_name">
								<h6 className="wed_anchor" onClick={(e) => this.handleSelectTemplateClick(item.id)}>
									{item.title}
								</h6>
								<p>{parseInt(item.duration)}s</p>
							</div>
							<div
								onClick={() => {
									this.handleSelectTemplateClick(item.id);
								}}
								className="we_mg_play"
							>
								<div className="we_mg_play_btn animated flipInY delay-half">
									<button className="we_btn wed_animated_btn we_small_use_button">Use</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			);
		});
	};
	videoList = () => {
		if ([FETCHING, INITIAL].includes(this.props.userArea.templates.stage)) {
			return this.LoadingGalleryBox({
				count: 8,
			});
		} else if (this.props.userArea.templates.stage === ERRORED) {
			return this.ResourceError({
				type: this.props.userArea.templates.errorType,
				title: this.props.userArea.templates.errorTitle,
				text: this.props.userArea.templates.errorText,
			});
		} else if (this.props.userArea.templates.stage === SUCCEEDED) {
			return this.VideosBoxes({
				list: this.filteredData(this.props.userArea.templates.data),
			});
		}
	};
	filteredData = (data) => {
		data = cloneDeep(data);
		if (this.state.layoutFilter !== "") {
			data = data.filter((e) => e.layout === this.state.layoutFilter);
		}
		let q = this.props.header.searchBox.query.toLowerCase().trim();
		if (q !== "") {
			data = data.filter((template) => {
				return template.title.toLowerCase().includes(q);
			});
		}
		return data;
	};
	render() {
		if (this.state.redirect) {
			return <Redirect to={this.state.redirect} />;
		}
		return (
			<Fragment>
				<Header />
				<SearchBox />
				<div className="we_template_wrapper">
					<CategorySelector />
					<div className="gallery_list">
						<div className="row we_statictics" style={{ marginBottom: "50px" }}>
							<h4 className="col-lg-5">
								All Templates{" "}
								{this.props.userArea.templates.stage === SUCCEEDED ? <span className="countBadge">{this.filteredData(this.props.userArea.templates.data).length}</span> : ""}
								{this.props.userArea.templates.stage === INITIAL ? null : (
									<span
										className={"we_refresh_cache".concat(this.props.userArea.templates.stage === FETCHING ? " spin" : "")}
										title="Refresh Templates"
										onClick={() => {
											if (this.props.userArea.templates.stage !== FETCHING) {
												this.props.fetchAllTemplates();
											}
										}}
									>
										{svgs.app.repeat}
									</span>
								)}
							</h4>
							<div className="we_tableoptions col-lg-5">
								<fieldset className="we_checkbox_fieldset">
									<legend>Filter: Ratio</legend>
									<div>
										<div
											className="we_radio_group"
											style={{
												marginBottom: 0,
											}}
										>
											{this.layoutFilters.map((option, index) => {
												return (
													<Fragment key={index}>
														<input
															type="radio"
															onChange={(e) => {
																this.setState({
																	layoutFilter: option.value,
																});
																e.currentTarget.blur();
															}}
															value={option.value}
															checked={this.state.layoutFilter === option.value}
															name="layout_filter"
															id={option.id}
														/>
														<label htmlFor={option.id}>{option.label}</label>
													</Fragment>
												);
											})}
										</div>
									</div>
								</fieldset>
							</div>
							<div className="col-lg-2" style={{ textAlign: "right" }}>
								<button
									className="we_btn"
									onClick={(e) => {
										e.preventDefault();
										this.togglePopup(OPEN);
									}}
								>
									Blank Template
								</button>
							</div>
						</div>
						<div className="row">
							<this.videoList />
						</div>
					</div>
				</div>

				<Popup
					open={this.state.popup.state === OPEN}
					heading="Your Video Title"
					spinner={this.state.videoCreateRequest.stage === FETCHING ? SHOW : HIDE}
					handleClose={() => {
						this.togglePopup(CLOSE);
					}}
				>
					<form onSubmit={this.createVideoWithTemplate}>
						<div className="we_input_wrapper">
							<input
								type="text"
								className="we_input"
								name="videoTitle"
								autoComplete="off"
								placeholder="Video Title"
								autoFocus={true}
								onChange={(e) => {
									this.setState({
										[e.currentTarget.name]: e.currentTarget.value,
									});
								}}
								value={this.state.videoTitle}
							/>
						</div>
						{this.state.templateId === 0 ? (
							<VideoSizeSelector
								selected={this.state.layout}
								heading={false}
								handleChange={(value) => {
									this.setState({
										layout: value,
									});
								}}
							/>
						) : null}
						<div className="text-center">
							<button type="submit" className="we_btn">
								Continue
							</button>
						</div>
					</form>
				</Popup>
				<Popup
					open={this.state.videoPreview.popup.state === OPEN}
					heading={this.state.videoPreview.title}
					handleClose={() => {
						this.togglePreview(CLOSE);
					}}
					big={true}
				>
					<video src={this.state.videoPreview.src} controls={true} width="100%"></video>
					<div className="we_popup_action_btn">
						<button
							className="we_btn"
							onClick={() => {
								this.togglePreview(CLOSE);
								this.handleSelectTemplateClick(this.state.videoPreview.id);
							}}
						>
							Edit This Template
						</button>
					</div>
				</Popup>
			</Fragment>
		);
	}
}

export default Templates;
