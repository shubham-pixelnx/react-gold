import { Component } from "react";
import { appConstants } from "./../../constants/appDefaults";
import { Btn, Anchor } from "./../common/Styled";
import styled from "styled-components";
class Page404 extends Component {
	render() {
		return (
			<ErrorWrapper>
				<ErrorMessage>Page Not Found</ErrorMessage>
				<Btn as={Anchor} theme="primary" to="/">
					Back to Home
				</Btn>
			</ErrorWrapper>
		);
	}
}
let {
	app: { themeColor },
} = appConstants;
const ErrorWrapper = styled.div`
	position: fixed;
	inset: 0px;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	background-color: rgb(255, 255, 255);
`;
const ErrorMessage = styled.p`
	color: ${themeColor};
	font-size: 50px;
`;
export default Page404;
