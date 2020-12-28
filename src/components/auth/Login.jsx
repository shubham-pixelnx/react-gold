import { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { AlertMsg, isValidEmail } from "../../utils/helper";
import { connect } from "react-redux";
// import authActions from "./../../actions/authAction";
// import svgs from "../svgs";
import appDefaults, { appConstants } from "./../../constants/appDefaults";
// import logo from "./../../assets/images/logo.svg";
import Authentication from "./Authentication";
let {
	app: {
		requestState: { FETCHING },
	},
} = appConstants;

class Login extends Component {
	constructor(props) {
		super(props);
		document.title = `Login - ${appConstants.app.title}`;
		this.state = {
			email: "",
			password: "",
		};
		let searchParams = new URLSearchParams(this.props.location.search);
		this.goto = searchParams.get("goto");

		this.handleChanges = this.handleChanges.bind(this);
		this.LoginSubmit = this.LoginSubmit.bind(this);
	}
	handleChanges(e) {
		this.setState({ [e.target.name]: e.target.value });
	}
	validateForm() {
		const emptyemail = this.state.email.trim() === "";
		const emptypassword = this.state.password === "";
		const isemail = isValidEmail(this.state.email);

		if (emptyemail || emptypassword) {
			AlertMsg("error", "Oops!", "Field can not be empty!");
			return false;
		}
		if (!isemail) {
			AlertMsg("error", "Oops!", "Email Is not valid!");
			return false;
		}
		return true;
	}
	LoginSubmit(e) {
		e.preventDefault();
		if (!this.validateForm()) return;
		this.props.senduserdata({
			email: this.state.email,
			password: this.state.password,
		});
	}
	render() {
		if (this.props.isLoggedIn === true) {
			return <Redirect to={this.goto || "/dashboard"} />;
		}
		return <Authentication>{"hello"}</Authentication>;
	}
}

const mapStateToProps = (state) => {
	return {
		...state.auth.login,
		header: state.header,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		/* senduserdata: (user) => {
			dispatch(login(user));
		}, */
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
