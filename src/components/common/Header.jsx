import { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
import { Redirect } from "react-router-dom";
import { AlertMsg, getFirstName, getNameInitials, s3Url } from "../../utils/helper";
import { connect } from "react-redux";
import authAction from "./../../actions/authAction";
import headerAction from "./../../actions/headerAction";
import editorAction from "./../../actions/editorAction";
import NavBar from "../common/NavBar";
import svgs from "../svgs";
import { appConstants } from "./../../constants/appDefaults";

import pageNames from "../../constants/pageNames";
import { createRef } from "react";
let {
	app: {
		requestState: { INITIAL, FETCHING, ERRORED, SUCCEEDED },
		editorTypes: { ADMIN_TEMPLATE_EDITOR },
		visibleState,
	},
} = appConstants;
let { PAGE_VIDEO_EDITOR, PAGE_TEMPLATE_EDITOR, PAGE_RENDER_USER_VIDEO } = pageNames;
let { logout } = authAction;
let { getUserInfo } = headerAction;
let { saveLayerData, updateSaveStage, updateThumbTime } = editorAction;
const cookies = new Cookies();
class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			redirect: null,
			proceedForRendering: !true,
			popupOnSave: !true,
			loggingOut: !true,

			dropDownOpen: false,
		};
		this.switchLabel = this.props?.specialRouteData?.switchLabel || visibleState.SHOW;
		this.pageName = this.props?.specialRouteData?.pageName || null;
		this.dropDownWrapper = createRef();
		this.dropDownTrigger = createRef();
	}
	handleLogout = () => {
		this.props.logout();
		this.setState({
			loggingOut: true,
		});
	};
	handleClickOutside = (e) => {
		if (this.state.dropDownOpen === false) return;
		if (!e.target) return;
		if (this.dropDownWrapper.current && !this.dropDownWrapper.current.contains(e.target)) {
			if (!this.dropDownTrigger.current.contains(e.target)) {
				// clicked element is not the dropDownTrigger
				this.setState({
					dropDownOpen: false,
				});
			}
		}
	};
	componentDidMount() {
		if ([INITIAL, ERRORED].includes(this.props.header.userInfo.stage)) {
			this.props.getUserInfo();
		}
		if ([PAGE_TEMPLATE_EDITOR, PAGE_VIDEO_EDITOR].includes(this.pageName)) {
			document.addEventListener("keydown", this.applyEditorShortCuts);
		}
		document.addEventListener("click", this.handleClickOutside);
	}
	applyEditorShortCuts = (e) => {
		if (e.code === "KeyS" && e.ctrlKey) {
			e.preventDefault();
			if (e.repeat) {
				return;
			}
			this.saveVideo({ popupOnSave: !e.shiftKey });
		} else if (e.code === "KeyR" && e.altKey) {
			e.preventDefault();
			this.handleRenderBtnClick();
		}
	};
	ToggleSidebarMobile = () => {
		if (document.body.classList.contains("open_sidebar_mobile")) {
			document.body.classList.remove("open_sidebar_mobile");
		} else {
			document.body.classList.add("open_sidebar_mobile");
		}
	};
	componentDidUpdate = (prevProps) => {
		if (this.state.loggingOut) {
			let tempLogin = sessionStorage.getItem("temporarylogin") === "YES";
			let key = tempLogin ? "tempaccess" : "accesstoken";
			cookies.remove(key, { path: "/" });
			if (tempLogin) {
				window.close();
			}
			this.setState({ redirect: "/login" });
		}
		if (prevProps.editor.general.save.stage !== SUCCEEDED && this.props.editor.general.save.stage === SUCCEEDED) {
			if (this.state.proceedForRendering) {
				this.setState({
					redirect: this.props.editor.editorType === ADMIN_TEMPLATE_EDITOR ? `/render/template/${this.props.editor.videoId}` : `/render/${this.props.editor.videoId}`,
				});
			}
			if (this.state.popupOnSave) {
				swal({
					title: "Changes Saved Successfully!",
					text: "The changes have been saved.",
					icon: "success",
					buttons: ["Keep Editing", "Back To List"],
				}).then((backToList) => {
					this.props.updateSaveStage(INITIAL);
					if (backToList) {
						this.setState({
							redirect: this.props.editor.editorType === ADMIN_TEMPLATE_EDITOR ? "/admin/templates" : "/dashboard",
						});
					}
				});
			} else {
				this.props.updateSaveStage(INITIAL);
			}
		} else if (this.props.editor.general.save.stage === ERRORED) {
			swal({
				title: this.props.editor.general.save.errorTitle,
				text: this.props.editor.general.save.errorText,
				icon: "error",
				buttons: ["Keep Editing", "Retry"],
			}).then((retry) => {
				this.props.updateSaveStage(INITIAL);
				if (retry) {
					this.handleSaveBtnClick();
				}
			});
		}
	};
	componentWillUnmount() {
		document.body.classList.remove("open_sidebar_mobile");
		document.addEventListener("click", this.handleClickOutside);
		if ([PAGE_TEMPLATE_EDITOR, PAGE_VIDEO_EDITOR].includes(this.pageName)) {
			document.removeEventListener("keydown", this.applyEditorShortCuts);
		}
	}
	SwitchUserLabel = () => {
		if (this.props.header.userInfo.stage !== SUCCEEDED) {
			return null;
		}
		let { privileges } = this.props.header.userInfo.data;
		if (!(privileges.includes("admin") || privileges.includes("maintainer"))) {
			return null;
		}
		if (this.switchLabel === visibleState.HIDE) return null;

		let gotoText = "";
		if (this.props.header.navigation.platform === "admin") {
			gotoText = "Main App";
		} else if (this.props.header.navigation.platform === "maintainer") {
			gotoText = "Main App";
		} else if (this.props.header.navigation.platform === "user") {
			gotoText = privileges.includes("admin") ? "Admin Area" : "Management Dash";
		}
		return (
			<Link className="we_switch_user wed_anchor" to={["admin", "maintainer"].includes(this.props.header.navigation.platform) ? "/dashboard" : "/admin"}>
				<img src={s3Url("static/icons/switchuser.svg")} alt="Switch User" />
				<span className="we_switch_user_text">Switch To {gotoText}</span>
			</Link>
		);
	};
	handleRenderBtnClick = () => {
		this.saveVideo({ popupOnSave: false, proceedForRendering: true });
	};
	handleSaveBtnClick = () => {
		this.saveVideo({ popupOnSave: true });
	};
	saveVideo = (options = {}) => {
		if (this.props.editor.general.save.stage === FETCHING) return;
		this.setState({
			...options,
		});
		this.props.saveLayerData({
			videoId: this.props.editor.videoId,
			editorType: this.props.editor.editorType,
			layerData: this.props.editor.template,
			duration: this.props.editor.totalDuration,
		});
	};
	render() {
		if (this.state.redirect) {
			return <Redirect to={this.state.redirect} />;
		}
		let videoTitle = "";
		if ([PAGE_VIDEO_EDITOR, PAGE_TEMPLATE_EDITOR].includes(this.pageName)) {
			videoTitle = this.props.editor.title;
		} else if (this.pageName === PAGE_RENDER_USER_VIDEO) {
			videoTitle = this.props.render.videoData.data.title;
		}
		let profilePicture = null;
		let uc = this.props.header?.userInfo?.data?.usercontent;
		if (uc) {
			uc = JSON.parse(uc);
			if (uc.profiles) {
				let latest = uc.profiles[0];
				profilePicture = latest.url;
			}
		}
		return (
			<Fragment>
				<div className="we_header_wrapper">
					<div className="we_header_inner">
						<div className="we_logo">
							<Link to={this.props.header.navigation.platform === "admin" ? "/admin" : "/dashboard"}>
								<img src={s3Url(this.props.header.logo)} draggable={false} alt="Logo" />
							</Link>
						</div>
						<NavBar />
						<div className="wd_title">{videoTitle}</div>
						<div className="we_header_right">
							{this.props.editor.template !== null ? (
								<div className="wd_video_action">
									{this.pageName === PAGE_TEMPLATE_EDITOR ? (
										<button
											className="we_btn"
											id="we_counter_btn"
											onClick={() => {
												this.props.updateThumbTime(this.props.editor.currentTime);
												AlertMsg("success", `Thumbnail time updated to ${this.props.editor.currentTime.toFixed(1)}s`, "Changes will affect after a render.");
											}}
											style={{ marginRight: 20 }}
											title="Click to set current frame as thumbnail"
										>
											Thumb @ <span>{parseInt(this.props.editor.template.metaData.thumbtime || 0)}s</span>
										</button>
									) : null}
									<button
										className="we_btn we_btn_with_loader"
										style={{ marginRight: 20 }}
										onClick={() => {
											this.handleSaveBtnClick();
										}}
										disabled={this.props.editor.general.save.stage !== INITIAL}
									>
										{this.props.editor.general.save.stage === FETCHING ? svgs.app.threeDotLoader : this.pageName === PAGE_TEMPLATE_EDITOR ? "Save as Template" : "Save"}
									</button>
									<button
										className="we_btn we_btn_white"
										onClick={() => {
											this.handleRenderBtnClick();
										}}
									>
										Render
									</button>
								</div>
							) : null}

							<div className={"we_profile we_dropdown".concat(this.state.dropDownOpen ? " open" : "")}>
								<div
									className="we_profile_icon"
									ref={this.dropDownTrigger}
									onClick={() => {
										this.setState((p) => ({
											dropDownOpen: !p.dropDownOpen,
										}));
									}}
								>
									<span className={"we_pi_name".concat(this.props.header.userInfo.stage === FETCHING ? " wed_shimmer" : "")}>
										{this.props.header.userInfo.stage === SUCCEEDED
											? `Namaste, ${getFirstName(this.props.header.userInfo.data.name)}!`
											: this.props.header.userInfo.stage === ERRORED
											? "Failed to Load Profile"
											: "Loading profile..."}
									</span>

									<span className="we_pi_img_initials">
										{profilePicture ? (
											<img src={s3Url(profilePicture)} draggable={false} alt="DP" />
										) : (
											<span className={this.props.header.userInfo.stage === FETCHING ? "wed_shimmer" : ""}>
												{this.props.header.userInfo.stage === SUCCEEDED ? getNameInitials(this.props.header.userInfo.data.name) : ":("}
											</span>
										)}
									</span>
								</div>
								<div className="we_dropdown_wrapper we_dropdown_right" ref={this.dropDownWrapper}>
									<div className="we_dropdown_inner">
										<ul>
											<li>
												<Link to="/profile">Profile</Link>
											</li>
											<li className="we_logout">
												<span onClick={this.handleLogout}>Logout</span>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="we_sidebar_toggle" onClick={this.ToggleSidebarMobile}>
								<span></span>
								<span></span>
								<span></span>
							</div>

							<this.SwitchUserLabel />
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		...state,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		getUserInfo: () => dispatch(getUserInfo()),
		logout: () => dispatch(logout()),
		saveLayerData: (p) => dispatch(saveLayerData(p)),
		updateSaveStage: (n) => dispatch(updateSaveStage(n)),
		updateThumbTime: (t) => dispatch(updateThumbTime(t)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
