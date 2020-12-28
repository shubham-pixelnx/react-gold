import { Component } from "react";
import { Redirect } from "react-router-dom";

import { s3Url } from "../utils/helper";
import postman from "../utils/postman";
class Watch extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		const { user, video } = this.props.match.params;
		this.userId = parseInt(user);
		this.videoId = parseInt(video);
		this.state = {
			fetched: false,
			videoData: {},
			redirect: null,
		};
	}
	componentDidMount() {
		postman
			.get(`/no-auth/shared-video/${this.userId}/${this.videoId}`)
			.then((res) => {
				this.setState({
					fetched: true,
					videoData: res.data,
				});
			})
			.catch((e) => {
				console.log(e);
				swal({
					title: "We Don't Have Any Content Here.",
					text: e.message || e.toString(),
					icon: "error",
					buttons: "Okay",
				}).then(() => {
					this.setState({
						redirect: "/",
					});
				});
			});
	}
	componentWillUnmount() {}
	componentDidUpdate(_, prevState) {
		if (prevState.videoData?.title !== this.state.videoData?.title && this.state.videoData?.title) {
			document.title = `${this.state.videoData.title} - WeDios`;
		}
	}
	render() {
		if (this.state.redirect) {
			return <Redirect to={this.state.redirect} />;
		}
		if (!this.state.fetched) {
			return null;
		}
		return (
			<div
				className="we_shared_video_wrapper"
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					width: "100%",
					height: "100%",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					backgroundSize: "cover",
				}}
			>
				<video
					style={{
						maxWidth: "1280px",
						maxHeight: "720px",
					}}
					src={s3Url(this.state.videoData.preview)}
					controls={true}
				></video>
			</div>
		);
	}
}
export default Watch;
