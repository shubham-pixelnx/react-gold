import { Component } from "react";
import { connect } from "react-redux";
import svgs from "../svgs";
import profileAction from "./../../actions/profileAction";
import { AlertMsg } from "../../utils/helper";
import { appConstants } from "./../../constants/appDefaults";
let {
	app: {
		requestState: { FETCHING, SUCCEEDED },
	},
} = appConstants;
let { updateUserData } = profileAction;
class ProfilePasswordChange extends Component {
	constructor(props) {
		super(props);
		this.initialState = {
			newpassword: "",
			confirmpassword: "",
		};
		this.state = this.initialState;
	}
	handleChange = (e) => {
		this.setState({
			[e.currentTarget.name]: e.currentTarget.value,
		});
	};
	validateForm() {
		const emptyPassword = this.state.newpassword === "";
		if (emptyPassword) {
			AlertMsg("error", "Oops!", "Field can not be empty!");
			return false;
		} else if (this.state.newpassword !== this.state.confirmpassword) {
			AlertMsg("error", "Oops!", "Password didn't match.");
			return false;
		}
		return true;
	}
	handleSubmit = (e) => {
		e.preventDefault();
		if (!this.validateForm()) return;
		this.props.updateUserData({
			password: this.state.newpassword,
		});
	};

	componentDidUpdate(prevProps) {
		if (prevProps.profile.updateProfile.stage === FETCHING && this.props.profile.updateProfile.stage === SUCCEEDED) {
			this.setState(this.initialState);
		}
	}
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<div className="we_input_wrapper we_input_icon">
					<input
						type="password"
						className="we_input"
						placeholder="Choose a new password"
						name="newpassword"
						autoComplete="new-password"
						value={this.state.newpassword}
						onChange={this.handleChange}
					/>
					<span className="we_icon">{svgs.app.passwordIcon}</span>
				</div>
				<div className="we_input_wrapper we_input_icon">
					<input
						type="password"
						className="we_input"
						placeholder="Confirm Password"
						name="confirmpassword"
						autoComplete="new-password"
						value={this.state.confirmpassword}
						onChange={this.handleChange}
					/>
					<span className="we_icon">{svgs.app.passwordIcon}</span>
				</div>
				<button className="we_btn" disabled={this.props.profile.updateProfile.stage === FETCHING}>
					{this.props.profile.updateProfile.stage === FETCHING ? "Updating..." : "Change Password"}
				</button>
			</form>
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
		updateUserData: (data) => dispatch(updateUserData(data)),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(ProfilePasswordChange);
