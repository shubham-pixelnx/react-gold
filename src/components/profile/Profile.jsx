import { Component, Fragment, createRef } from "react";
import Header from "../common/Header";
import appDefaults, { appConstants } from "./../../constants/appDefaults";

import ProfilePasswordChange from "./ProfilePasswordChange";
import ProfileInputs from "./ProfileInputs";
import { s3Url, AlertMsg, dataURItoBlob, getNameInitials } from "../../utils/helper";
import svgs from "../svgs";
import Cropper from "react-easy-crop";
import getCroppedImg from "./../../utils/cropImage";
import postman from "../../utils/postman";

let {
	app: {
		requestState: { SUCCEEDED },
	},
} = appConstants;
class Profile extends Component {
	constructor(props) {
		super(props);
		document.title = `Profile - ${appConstants.app.title}`;
		this.dpCroppInit = {
			progressText: "Uploading...",
			cropComplete: false,
			croppedImage: null,
			uploadInProgress: false,
			show: false,
			image: null,
			crop: { x: 0, y: 0 },
			zoom: 1,
			aspect: 1 / 1,
			croppedAreaPixels: {},
		};
		this.state = {
			dpCropper: this.dpCroppInit,
		};
		this.tabs = {
			profile: { label: "Profile", open: <ProfileInputs /> },
			password: { label: "Password", open: <ProfilePasswordChange /> },
		};
		this.dpInput = createRef();
		this.mainPopupArea = createRef();
	}
	componentDidMount() {
		document.addEventListener("click", this.handleClickOutside);
	}

	componentWillUnmount() {
		document.removeEventListener("click", this.handleClickOutside);
	}
	removeProfileImage = () => {
		swal({
			title: "Are you sure?",
			text: "Clicking yes will remove your profile image.",
			dangerMode: true,
			buttons: ["No", "Yes"],
		}).then((confirmed) => {
			if (!confirmed) return;
			postman
				.delete(`/me/profile-picture`)
				.then((res) => {
					this.props.getUserInfo();
					AlertMsg("success", "Done!", res.message);
				})
				.catch((e) => {
					AlertMsg("error", "Couldn't Remove", e.message);
				});
		});
	};
	handleClickOutside = (e) => {
		if (this.mainPopupArea.current && !this.mainPopupArea.current.contains(e.target)) {
			this.closeCropper();
		}
	};
	upgradePlan = () => {
		return (
			<div className="wd_profile_upgrade_box">
				<h3>Upgrade Your Plan</h3>
				<p>
					Find The Perfect Plan For You <br />
					More Features, More Templates, More Conversions
				</p>
				<button className="we_btn we_btn_white">Upgrade Plan</button>
			</div>
		);
	};
	loadingOverlay = () => {
		return (
			<div className="we_being_deleted_overlay" style={{ zIndex: "1" }}>
				<div className="we_being_deleted_spinner">{svgs.app.popupSpinner}</div>
			</div>
		);
	};
	closeCropper = () => {
		if (this.state.dpCropper.uploadInProgress) return;
		this.setState({
			dpCropper: this.dpCroppInit,
		});
	};
	handleDpChange = (e) => {
		if (e.currentTarget.files.length === 0) {
			return;
		}
		let file = e.currentTarget.files[0];
		let { formatsAllowed, maxSize } = appDefaults.editor.background.image.upload;
		if (!formatsAllowed.includes(file.type)) {
			AlertMsg("error", "Invalid selection", "Only PNG/JPG images are allowed!");
			e.currentTarget.value = "";
			return;
		}
		let fileSize = file.size;
		if (fileSize === 0) {
			AlertMsg("error", "No content", "Selected file has no content in it (Zero size).");
			e.currentTarget.value = "";
			return;
		} else if (fileSize > maxSize) {
			AlertMsg("error", "Image size exceeds the allowable limit", `You can only choose image up to ${parseInt(maxSize / 1e6)}MB`);
			e.currentTarget.value = "";
			return;
		}
		let fr = new FileReader();
		fr.onloadend = async (event) => {
			this.dpInput.current.value = "";
			let url = URL.createObjectURL(dataURItoBlob(event.target.result));
			this.setState({
				dpCropper: {
					...this.state.dpCropper,
					show: true,
					image: url,
				},
			});
		};
		fr.readAsDataURL(file);
	};
	MainContent = () => {
		let tabs = [];
		for (let tab in this.tabs) {
			tabs.push({
				key: tab,
				name: this.tabs[tab].label,
			});
		}
		let profilePicture = null;
		let uc = this.props.header.userInfo.data.usercontent;
		if (uc) {
			uc = JSON.parse(uc);
			if (uc.profiles) {
				let latest = uc.profiles[0];
				profilePicture = latest.url;
			}
		}
		return (
			<div className="wd_profile_tab">
				<div className="wd_row col2">
					<div className="wd_col">
						<div className="wd_profile_page">
							<div className="wd_profile_image animated zoomIn">
								<span
									className="wd_profile_initials"
									style={{
										opacity: profilePicture ? 0 : 1,
									}}
								>
									{getNameInitials(this.props.header.userInfo.data.name)}
								</span>
								{profilePicture ? (
									<span className="we_profile_picture we_bg_placeholder_img">
										<img src={s3Url(profilePicture)} alt="Profile Icon" />
									</span>
								) : null}
								<div className="wd_profile_image_overlay">
									<input ref={this.dpInput} type="file" accept="image/*" onChange={this.handleDpChange} />
									{profilePicture ? <span className="wd_remove_profile" onClick={this.removeProfileImage} title="Remove Profile Image"></span> : null}
								</div>
							</div>
							<div className="wd_profile_detail">
								<h3 className="animated fadeInUp" style={{ animationDelay: "0.3s" }}>
									{this.props.header.userInfo.data.name}
								</h3>
								<p className="animated fadeInUp" style={{ animationDelay: "0.4s" }}>
									<span>Email:</span>
									{this.props.header.userInfo.data.email}
								</p>
								<p className="animated fadeInUp" style={{ animationDelay: "0.5s" }}>
									<span>Account:</span> Frontend
								</p>
							</div>
						</div>
						{/* <this.upgradePlan /> */}
					</div>
					<div className="wd_col animated fadeInLeft" style={{ animationDelay: "0.6s" }}>
						<div className="wd_profile_form_wrapper wd_profile_form">
							<div className="we_sc_tab_wrapper tab2 mb-4">
								<ul className="mb-0">
									{tabs.map((t) => {
										return (
											<li
												className={"profile_tablinks".concat(this.props.profile.activeTab === t.key ? " active" : "")}
												key={t.key}
												onClick={() => {
													this.props.setProfileData({
														activeTab: t.key,
													});
												}}
											>
												{t.name}
											</li>
										);
									})}
								</ul>
							</div>
							{this.tabs[this.props.profile.activeTab].open}
						</div>
					</div>
				</div>
			</div>
		);
	};
	onCropChange = (crop) => {
		this.setState({
			dpCropper: {
				...this.state.dpCropper,
				crop,
			},
		});
	};

	onCropComplete = (croppedArea, croppedAreaPixels) => {
		this.setState({
			dpCropper: {
				...this.state.dpCropper,
				croppedAreaPixels,
			},
		});
	};

	onZoomChange = (zoom) => {
		this.setState({
			dpCropper: {
				...this.state.dpCropper,
				zoom,
			},
		});
	};
	uploadDisplayPicture = async () => {
		let croppedImage = await getCroppedImg(this.state.dpCropper.image, this.state.dpCropper.croppedAreaPixels);
		this.setState({
			dpCropper: {
				...this.state.dpCropper,
				cropComplete: true,
				croppedImage: URL.createObjectURL(croppedImage),
				uploadInProgress: true,
			},
		});

		const setProgress = (p) => {
			let completeRate = (98 * p) / 100;
			this.setState({
				dpCropper: {
					...this.state.dpCropper,
					progressText: `Uploading (${completeRate}%)`,
				},
			});
		};
		let handleUpload = {
			onStart: () => {
				setProgress(0);
			},
			onProgress: (loaded, total) => {
				let p = (loaded / total) * 100;
				setProgress(parseInt(p));
			},
			onEnd: () => {
				setProgress(100);
			},
		};
		const _finally = () => {
			this.setState({
				dpCropper: {
					...this.state.dpCropper,
					uploadInProgress: false,
				},
			});
			this.closeCropper();
			this.props.getUserInfo();
		};
		let n = "newdp";
		let fd = new FormData();
		let thumbFileObject = new File([croppedImage], "newdp.jpg");
		fd.append(n, thumbFileObject, "newdp.jpg");
		fd.append(
			"dir",
			JSON.stringify({
				newdp: "profile",
			})
		);

		let uploadReq = postman.upload("/upload/asset", fd, handleUpload.onStart, handleUpload.onProgress, handleUpload.onEnd);
		uploadReq.then(async (xhr) => {
			if (!xhr.responseText.startsWith("{")) {
				AlertMsg("error", "Network error", "Please try again.");
				_finally();
				return;
			}
			let res = JSON.parse(xhr.responseText);
			if (!res.success) {
				AlertMsg("error", res.message);
				_finally();
				return;
			}
			if (!res.data["newdp"].uploaded) {
				AlertMsg("error", res.data["newdp"].error);
				_finally();
				return;
			}
			let cloudSrc = res.data["newdp"].url;
			postman
				.post(
					"/usercontent",
					{
						body: JSON.stringify({
							key: "profiles",
							data: {
								url: cloudSrc,
							},
						}),
					},
					{ loader: false }
				)
				.catch((e) => {
					AlertMsg("error", "Something went wrong!", JSON.stringify(e));
				})
				.finally(_finally);
		});
	};

	CropperPopup = () => {
		return (
			<div className="we_fullscreen_popup_overlay animated fadeIn">
				<div className="we_fullscreen_popup" ref={this.mainPopupArea}>
					<div className="we_popup_close_icon" title="Close"></div>
					{this.state.dpCropper.cropComplete ? (
						<div className="we_cropped_preview">
							<img src={this.state.dpCropper.croppedImage} alt="Cropped Preview" />
							<h3>{this.state.dpCropper.progressText}</h3>
						</div>
					) : (
						<Fragment>
							<h3 className="we_modal_heading">Fit your picture into this circle and click "Save" to Upload</h3>
							<div className="we_cropper_parent" style={{ height: "450px" }}>
								<Cropper
									image={this.state.dpCropper.image}
									crop={this.state.dpCropper.crop}
									zoom={this.state.dpCropper.zoom}
									showGrid={false}
									maxZoom={3}
									cropShape="round"
									aspect={this.state.dpCropper.aspect}
									onCropChange={this.onCropChange}
									onCropComplete={this.onCropComplete}
									onZoomChange={this.onZoomChange}
								/>
							</div>
							<div className="we_fsp_action_btns">
								<button className="we_btn we_btn_gray mr-3" onClick={this.closeCropper}>
									Cancel
								</button>
								<button className="we_btn" onClick={this.uploadDisplayPicture}>
									Save
								</button>
							</div>
						</Fragment>
					)}
				</div>
			</div>
		);
	};
	render() {
		return (
			<Fragment>
				<Header />
				<div className="wd_container">
					{this.props.header.userInfo.stage === SUCCEEDED ? (
						<this.MainContent />
					) : (
						<div className="we_being_deleted">
							<this.loadingOverlay />
						</div>
					)}
				</div>
				{this.state.dpCropper.show ? <this.CropperPopup /> : null}
			</Fragment>
		);
	}
}

export default Profile;
