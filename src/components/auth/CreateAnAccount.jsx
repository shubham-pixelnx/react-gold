import { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { AlertMsg, isValidEmail } from "../../utils/helper";
import { connect } from "react-redux";
import authActions from "./../../actions/authAction";
import svgs from "../svgs";
import appDefaults, { appConstants } from "../../constants/appDefaults";
import logo from "./../../assets/images/logo.svg";
import Authentication from "./Authentication";
import actionTypes from "../../constants/actionTypes";
let {
	app: {
		requestState: { FETCHING, SUCCEEDED },
	},
} = appConstants;
let { createNewAccount } = authActions;

class Register extends Component {
	constructor(props) {
		super(props);
		document.title = `Create An Account -  ${appConstants.app.title}`;
		this.state = {
			name: "",
			email: "",
			password: "",
			redirect: null,
		};

		this.handleChanges = this.handleChanges.bind(this);
		this.RegisterSubmit = this.RegisterSubmit.bind(this);
	}
	handleChanges(e) {
		this.setState({ [e.target.name]: e.target.value });
	}
	validateForm() {
		const emptyName = this.state.name.trim() === "";
		const emptyPassword = this.state.password.trim() === "";
		const emptyemail = this.state.email.trim() === "";
		const isemail = isValidEmail(this.state.email);

		if (emptyemail || emptyName || emptyPassword) {
			AlertMsg("error", "Oops!", "Field can not be empty!");
			return false;
		}
		if (!isemail) {
			AlertMsg("error", "Oops!", "Email Is not valid!");
			return false;
		}
		return true;
	}
	RegisterSubmit(e) {
		e.preventDefault();
		if (!this.validateForm()) return;
		this.props.createNewAccount({
			name: this.state.name,
			email: this.state.email,
			password: this.state.password,
		});
	}
	componentDidUpdate() {
		if (this.props.requestState === SUCCEEDED) {
			this.setState({
				redirect: "/login",
			});
		}
	}
	render() {
		if (this.state.redirect) {
			return <Redirect to={this.state.redirect} />;
		}
		return (
			<Authentication>
				<div className="we_auth_logo">
					<img src={logo} alt="" />
				</div>
				<h1>Get Started With WeDios</h1>
				<p>Enter your name and email below to create an account</p>
				<form onSubmit={this.RegisterSubmit} autoComplete="off">
					<input name="email" style={{ display: "none" }} />
					<div className="we_input_wrapper we_input_icon">
						<input type="text" className="we_input" placeholder="Name" name="name" value={this.state.name} onChange={this.handleChanges} disabled={this.props.requestState === FETCHING} />
						<span className="we_icon">{svgs.app.userIcon}</span>
					</div>
					<div className="we_input_wrapper we_input_icon">
						<input
							type="text"
							className="we_input"
							placeholder="Email"
							name="email"
							value={this.state.email}
							onChange={this.handleChanges}
							disabled={this.props.requestState === FETCHING}
						/>
						<span className="we_icon">{svgs.app.emailIcon}</span>
					</div>
					<div className="we_input_wrapper we_input_icon">
						<input
							type="password"
							className="we_input"
							placeholder="Password"
							name="password"
							autoComplete="new-password"
							value={this.state.password}
							onChange={this.handleChanges}
							disabled={this.props.requestState === FETCHING}
						/>
						<span className="we_icon">{svgs.app.passwordIcon}</span>
					</div>
					{this.props.requestState !== FETCHING ? (
						<div className="we_remember_forgot">
							{/* <div className="we_checkbox">
                            <input
                                type="checkbox"
                                id="rememberme"
                                disabled={
                                    this.props.requestState ===
                                    FETCHING
                                }
                            />
                            <label htmlFor="rememberme">Remember me</label>
                        </div> */}
							{/* <Link to="/create-an-account">
                                Create a new account
                            </Link> */}
							<span></span>
							<span>
								Already Have an account?{" "}
								<Link className="wed_anchor" to="/">
									Login
								</Link>
							</span>
						</div>
					) : null}
					<button type="submit" className="we_btn" disabled={this.props.requestState === FETCHING}>
						Sign up
					</button>
				</form>
			</Authentication>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		...state.auth.register,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		registerState: (stage) =>
			dispatch({
				type: actionTypes.REGISTER_STAGE,
				payload: { requestState: stage },
			}),
		createNewAccount: (user) => dispatch(createNewAccount(user)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
