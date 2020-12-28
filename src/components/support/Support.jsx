import { Component, Fragment } from "react";
import Header from "../common/Header";
import appDefaults from "./../../constants/appDefaults";

class Support extends Component {
	constructor(props) {
		super(props);
		document.title = `Support - ${appConstants.app.title}`;
	}
	render() {
		return (
			<Fragment>
				<Header />
				<Hero>
					<h3 className="hero-heading">How can we help?</h3>
				</Hero>
				<h1 className="we_tac">
					I'm not ready yet{" "}
					<span role="img" aria-label="Page is not yet ready to see">
						🙈
					</span>
				</h1>
			</Fragment>
		);
	}
}

export default Support;
