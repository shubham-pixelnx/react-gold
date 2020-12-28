import { Component } from "react";
import { Redirect } from "react-router-dom";
import Cookies from "universal-cookie";
const cookies = new Cookies();
class LoginAs extends Component {
	componentDidMount() {
		this.token = this.props.match.params.jwt;
		sessionStorage.setItem("temporarylogin", "YES");
		cookies.set("tempaccess", this.token, {
			path: "/",
			maxAge: 86400,
		});
	}
	render() {
		return <Redirect to="/" />;
	}
}
export default LoginAs;
