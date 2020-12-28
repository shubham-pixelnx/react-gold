import { Component } from "react";
import { connect } from "react-redux";
// import headerAction from "../../actions/headerAction";
// import editorAction from "../../actions/editorAction";
// import commonActions from "../../actions/commonAction";
// import profileActions from "../../actions/profileAction";
// import userAreaActions from "../../actions/userAreaAction";
// import renderActions from "../../actions/renderAction";
import pageNames from "../../constants/pageNames";
import Cookies from "universal-cookie";
import { Redirect } from "react-router-dom";
import actionTypes from "../../constants/actionTypes";
const cookies = new Cookies();
let { PAGE_TEMPLATE_EDITOR, PAGE_VIDEO_EDITOR } = pageNames;
// let { setNavigation, searchBox, setLogo, getUserInfo } = headerAction;
// let { fetchLayerData, freeChange, setEditorType } = editorAction;
// let { getVideoData, sendRenderRequest } = renderActions;
// let { fetchAllTemplates, fetchMyVideos } = userAreaActions;
// let { setProfileData } = profileActions;
const UserHOC = (Comp) => {
	const Wrapper = () =>
		class extends Component {
			constructor(props) {
				super(props);
				this.state = {
					redirect: false,
				};
				this.props.setNav("user");
				this.props.setLogo();
			}
			componentDidMount() {
				document.addEventListener("keydown", this.logProps);
			}
			componentWillUnmount() {
				document.removeEventListener("keydown", this.logProps);
			}

			componentDidUpdate() {
				if (this.props?.header?.loggingOut) {
					cookies.remove("accesstoken", { path: "/" });
					this.setState({ redirect: "/login" });
				}
			}
			logProps = (e) => {
				if (e.altKey) {
					if (e.code === "KeyA") {
						console.log("All User props", this.props);
					}
				}
			};
			render() {
				if (this.state.redirect) {
					return <Redirect to={this.state.redirect} />;
				}
				return <Comp {...this.props} />;
			}
		};
	const mapStateToProps = (state) => {
		return {
			...state,
		};
	};

	const mapDispatchToProps = (dispatch, ownProps) => {
		let methods = {
			// setNav: (p) => dispatch(setNavigation(p)),
			// searchBox: (o) => dispatch(searchBox(o)),
			// setLogo: (t) => dispatch(setLogo(t)),
			/* fetchLayerData: (id, editorType) => dispatch(fetchLayerData(id, editorType)),
			setEditorState: (updatedObject) => dispatch(freeChange(updatedObject)),
			fetchAllCategories: () => dispatch(fetchAllCategories()),
			setProfileData: (o) => dispatch(setProfileData(o)),
			fetchAllTemplates: () => dispatch(fetchAllTemplates()),
			fetchMyVideos: () => dispatch(fetchMyVideos()),
			getVideoDataForRender: (id, editedWith) => dispatch(getVideoData(id, editedWith)),
			resetRenderProps: () => dispatch({ type: actionTypes.RNDR_RESET_STATE }),
			sendRenderRequest: (id) => dispatch(sendRenderRequest(id)),
			getUserInfo: () => dispatch(getUserInfo()), */
		};
		/* if ([PAGE_TEMPLATE_EDITOR, PAGE_VIDEO_EDITOR].includes(ownProps?.specialRouteData?.pageName)) {
			methods.setEditorType = (t) => dispatch(setEditorType(t));
		} */
		return methods;
	};
	return connect(mapStateToProps, mapDispatchToProps)(Wrapper());
};

export default UserHOC;
