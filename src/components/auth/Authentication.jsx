import { Component } from "react";
import { connect } from "react-redux";
import { Confirmation } from "../../utils/helper";
import Popup from "../common/Popup";
import { default as uA } from "./../../actions/universalAction";
import { appConstants } from "./../../constants/appDefaults";
// import { qs, s3Url } from "../../utils/helper";
class Authentication extends Component {
	constructor(props) {
		super(props);
		document.title = `Demo - ${this.props.siteTitle}`;
		this.state = {
			sampleText: "Sample Text",
			popup: CLOSE,
		};
	}
	render() {
		return (
			<div style={{ display: "grid", height: "80vh", gap: "10px", justifyContent: "center", textAlign: "center", padding: "10em" }}>
				<form
					onSubmit={(e) => {
						e.preventDefault();
						this.props.notify({
							text: this.state.sampleText,
						});
					}}
				>
					<input
						type="text"
						value={this.state.sampleText}
						onChange={(e) => {
							this.setState({
								sampleText: [e.currentTarget.value],
							});
						}}
					/>
					<button type="submit">Show Toaster</button>
				</form>
				<div>
					<button
						onClick={() => {
							this.setState({
								popup: OPEN,
							});
						}}
						disabled={this.state.popup === OPEN}
					>
						Show Popup
					</button>
				</div>
				<div>
					<button
						onClick={() => {
							Confirmation({
								title: "Want to save this story?",
								text: "This will delete everything.",
								buttons: ["No", "Yes"],
							}).then((input) => {});
						}}
					>
						Show Alert Box
					</button>
				</div>
				<Popup
					open={this.state.popup === OPEN}
					heading="Hello"
					handleClose={() => {
						this.setState({
							popup: CLOSE,
						});
					}}
				>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. In necessitatibus labore vero reprehenderit nobis tempore, cumque ad iste sed fuga, quos rem repellendus voluptatem
						eveniet voluptas ipsa minima magnam pariatur!
					</p>
				</Popup>
			</div>
		);
	}
}
let {
	app: {
		popupState: { OPEN, CLOSE },
	},
} = appConstants;
const mapStateToProps = (state) => {
	return {
		...state,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		notify: (data) => dispatch(uA.notify(data)),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(Authentication);
