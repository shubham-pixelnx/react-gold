import React, { Component, createRef } from "react";
import Noties from "./Noties";
import styled from "styled-components";
import AlertBox from "./AlertBox";
class Footer extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {}
	render() {
		return (
			<FooterWrapper>
				<Noties />
				<div className="alert-box-wrapper"></div>
			</FooterWrapper>
		);
	}
}

let FooterWrapper = styled.div`
	display: inline;
`;

export default Footer;
