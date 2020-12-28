import { Component, Fragment } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Cookies from "universal-cookie";

import Page404 from "./components/common/Page404";
import Footer from "./components/common/Footer";

import { appConstants } from "./constants/appDefaults";
import UserHOC from "./components/HOC/UserHOC";
import Authentication from "./components/auth/Authentication";

let {
	app: {},
} = appConstants;
const cookies = new Cookies();

const PrivateRoute = ({ component: Component, ...rest }) => {
	let accesstoken = sessionStorage.getItem("temporarylogin") === "YES" ? cookies.get("tempaccess") : cookies.get("accesstoken");
	return <Route {...rest} render={(props) => (accesstoken ? <Component {...props} {...rest} /> : <Redirect to={`/login?goto=${props.location.pathname}`} />)} />;
};

const UserRoute = ({ component: Component, ...rest }) => {
	return <PrivateRoute siteTitle={appConstants.app.title} component={UserHOC(Component)} {...rest} />;
};

const AuthRoute = ({ component: Component, ...rest }) => {
	let accesstoken = sessionStorage.getItem("temporarylogin") === "YES" ? cookies.get("tempaccess") : cookies.get("accesstoken");
	return <Route {...rest} render={(props) => (accesstoken === undefined ? <Component siteTitle={appConstants.app.title} {...props} {...rest} /> : <Redirect to="/dashboard" />)} />;
};

class App extends Component {
	constructor() {
		super();
		this.state = {};
	}
	render() {
		return (
			<Fragment>
				<div className="str_main_wrapper">
					<Switch>
						<Route
							exact
							path="/"
							render={(props) => {
								let url = `/login`;
								if (props.location.pathname !== "/") {
									url += `?goto=${props.location.pathname}`;
								}
								return <Redirect to={url} />;
							}}
						></Route>

						<AuthRoute exact path="/login" component={Authentication} />

						<Route exact component={Page404} />
					</Switch>
				</div>
				<Footer />
			</Fragment>
		);
	}
}
export default App;
