import { Component } from "react";
import { Link } from "react-router-dom";
import { AlertMsg, isValidEmail } from "../../utils/helper";
import { connect } from "react-redux";
import authActions from "./../../actions/authAction";
import svgs from "../svgs";
import appDefaults, { appConstants } from "./../../constants/appDefaults";
import logo from "./../../assets/images/logo.svg";
import Authentication from "./Authentication";
let {
	app: {
		requestState: { FETCHING, SUCCEEDED },
	},
} = appConstants;
let { forgotPassword } = authActions;

class ForgotPassword extends Component {
	constructor(props) {
		super(props);
		document.title = `Forgot Password -  ${appConstants.app.title}`;
		this.state = {
			email: "",
			linkSent: false,
		};

		this.handleChanges = this.handleChanges.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	componentDidMount() {}

	handleChanges(e) {
		this.setState({ [e.target.name]: e.target.value });
	}
	validateForm() {
		const emptyemail = this.state.email.trim() === "";
		const isemail = isValidEmail(this.state.email);

		if (emptyemail) {
			AlertMsg("error", "Oops!", "Field can not be empty!");
			return false;
		}
		if (!isemail) {
			AlertMsg("error", "Oops!", "Email Is not valid!");
			return false;
		}
		return true;
	}
	handleSubmit(e) {
		e.preventDefault();
		if (!this.validateForm()) return;
		this.props.sendResetLink({
			email: this.state.email,
		});
	}
	Form = () => {
		return (
			<form onSubmit={this.handleSubmit}>
				<div className="we_input_wrapper we_input_icon">
					<input
						type="text"
						className="we_input"
						placeholder="Enter Your Email"
						name="email"
						value={this.state.email}
						onChange={this.handleChanges}
						disabled={this.props.requestState === FETCHING}
					/>
					<span className="we_icon">{svgs.app.emailIcon}</span>
				</div>
				<div className="we_remember_forgot">
					<span>
						Back To{" "}
						<Link className="wed_anchor" to="/login">
							Login
						</Link>
					</span>
					<Link to="/create-an-account">Create a new account</Link>
				</div>
				<button type="submit" className="we_btn" disabled={this.props.requestState === FETCHING}>
					Send Email
				</button>
			</form>
		);
	};
	componentDidUpdate(prevProps) {
		if (prevProps.requestState === FETCHING && this.props.requestState === SUCCEEDED) {
			this.setState({
				linkSent: true,
			});
		}
	}
	render() {
		return (
			<Authentication>
				<div className="we_auth_logo">
					<img src={logo} alt="Wedios Logo" />
				</div>
				<h1>{this.state.linkSent ? "Check your email!" : "Forgot your password?"}</h1>
				<p>{this.state.linkSent ? `We've sent the password reset link on ${this.state.email}` : "Enter your email address below and we'll send you password reset instructions."}</p>
				{!this.state.linkSent ? (
					<this.Form />
				) : (
					<div className="we_remember_forgot">
						<span>
							Back To{" "}
							<Link className="wed_anchor" to="/login">
								Login
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
		...state.auth.forgotPassword,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		sendResetLink: (user) => dispatch(forgotPassword(user)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);
