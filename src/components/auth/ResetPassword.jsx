import { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { AlertMsg } from "../../utils/helper";
import { connect } from "react-redux";
import authActions from "./../../actions/authAction";
import svgs from "../svgs";
import appDefaults, { appConstants } from "./../../constants/appDefaults";
import logo from "./../../assets/images/logo.svg";
import Authentication from "./Authentication";

let {
	app: {
		requestState: { INITIAL, FETCHING, ERRORED, SUCCEEDED },
	},
} = appConstants;
let { resetPassword, validateToken } = authActions;

class ResetPassword extends Component {
	constructor(props) {
		super(props);
		document.title = `Reset Password -  ${appConstants.app.title}`;
		let { token } = this.props.match.params;
		this.token = token;
		this.state = {
			newpassword: "",
			confirmpassword: "",
			passwordChanged: false,
			tokenValidated: false,
			redirect: null,
		};
	}
	componentDidMount() {
		if (this.props.tokenValidation.requestState === INITIAL) {
			this.props.validateToken(this.token);
		}
	}
	componentDidUpdate(prevProps) {
		if (prevProps.tokenValidation.requestState === FETCHING) {
			switch (this.props.tokenValidation.requestState) {
				case ERRORED:
					/* swal({
						title: "An error occurred.",
						text: this.props.tokenValidation.data.message,
						icon: "error",
						buttons: "Back to login",
					}).then((backToLogin) => {
						if (backToLogin) {
							this.setState({
								redirect: "/login",
							});
						}
					}); */
					break;
				case SUCCEEDED:
					this.setState({
						tokenValidated: true,
					});
					break;
				default:
					this.setState({
						tokenValidated: false,
					});
					break;
			}
		}
		if (prevProps.passwordUpdate.requestState === FETCHING) {
			switch (this.props.passwordUpdate.requestState) {
				case ERRORED:
					/* swal({
						title: "An error occurred.",
						text: this.props.passwordUpdate.data.message,
						icon: "error",
						buttons: "Back to login",
					}).then((backToLogin) => {
						if (backToLogin) {
							this.setState({
								redirect: "/login",
							});
						}
					}); */
					break;
				case SUCCEEDED:
					this.setState({
						passwordChanged: true,
					});
					break;
				default:
					this.setState({
						passwordChanged: false,
					});
					break;
			}
		}
	}
	handleChanges = (e) => {
		this.setState({ [e.target.name]: e.target.value });
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
		this.props.savePassword({
			password: this.state.newpassword,
			token: this.token,
		});
	};
	Form = () => {
		return (
			<form onSubmit={this.handleSubmit} autoComplete="off">
				<div className="we_input_wrapper we_input_icon">
					<input
						type="password"
						className="we_input"
						placeholder="Choose Your New Password"
						name="newpassword"
						value={this.state.newpassword}
						onChange={this.handleChanges}
						autoComplete="new-password"
						disabled={this.props.requestState === FETCHING}
					/>
					<span className="we_icon">{svgs.app.passwordIcon}</span>
				</div>

				<div className="we_input_wrapper we_input_icon">
					<input
						type="password"
						className="we_input"
						placeholder="Confirm Your New Password"
						name="confirmpassword"
						value={this.state.confirmpassword}
						onChange={this.handleChanges}
						autoComplete="new-password"
						disabled={this.props.requestState === FETCHING}
					/>
					<span className="we_icon">{svgs.app.passwordIcon}</span>
				</div>
				<button type="submit" className="we_btn" disabled={this.props.requestState === FETCHING}>
					Save
				</button>
			</form>
		);
	};
	render() {
		if (this.state.redirect) {
			return <Redirect to={this.state.redirect} />;
		}
		if (!this.state.tokenValidated) {
			return null;
		}
		return (
			<Authentication>
				<div className="we_auth_logo">
					<img src={logo} alt="Wedios Logo" />
				</div>
				<h1>{this.state.passwordChanged ? "Password Updated Successfully!" : "Reset Password"}</h1>
				<p>{this.state.passwordChanged ? `You can now login with your new password.` : "Choose a new password for your account below"}</p>
				{!this.state.passwordChanged ? (
					<this.Form />
				) : (
					<div className="we_remember_forgot">
						<span>
							<Link className="wed_anchor" to="/login">
								Login Now
							</Link>
						</span>
					</div>
				)}
			</Authentication>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		...state.auth.resetPassword,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		savePassword: (user) => dispatch(resetPassword(user)),
		validateToken: (token) => dispatch(validateToken(token)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);
