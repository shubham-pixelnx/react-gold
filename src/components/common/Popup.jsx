import { Component } from "react";
import { appConstants } from "../../constants/appDefaults";
import { Fcc, Fade, GradientStop } from "./../common/Styled";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";
class Popup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			opened: this.props.open,
		};
	}
	componentDidMount() {
		document.addEventListener("keyup", this.handleKeyup);
	}
	componentWillUnmount() {
		document.removeEventListener("keyup", this.handleKeyup);
	}
	componentDidUpdate(prevProps) {
		if (!prevProps.open && this.props.open) {
			this.setState({
				opened: this.props.open,
			});
		}
	}
	closePopup = () => {
		this.setState({
			opened: false,
		});
	};
	handleKeyup = (e) => {
		if ([this.props.closeOnESC, this.props.open].includes(false)) return;
		if (e.which === 27) {
			this.closePopup();
		}
	};
	render() {
		if (!this.props.open) return null;
		return (
			<PopupWrapper>
				<Background onClick={this.closePopup}></Background>
				<CSSTransition
					in={this.state.opened}
					timeout={200}
					classNames="popup"
					unmountOnExit
					onExited={() => {
						this.props.handleClose();
					}}
				>
					<Inner>
						{/* {this.props.spinner === SHOW ? <div className="we_popup_spinner animated fadeIn">{svgs.app.popupSpinner}</div> : null} */}
						<CornerSvg
							version="1.1"
							xmlns="http://www.w3.org/2000/svg"
							xmlnsXlink="http://www.w3.org/1999/xlink"
							x="0px"
							y="0px"
							width="100px"
							height="100px"
							viewBox="0 0 100 100"
							xmlSpace="preserve"
						>
							<defs>
								<linearGradient id="ppgrad" x1="25%" y1="0%" x2="0%" y2="25%">
									<GradientStop offset="100%" color="rgb(255,255,255)" opacity={1}></GradientStop>
									<GradientStop offset="0%" color="rgb(255,0,0)" opacity={0}></GradientStop>
								</linearGradient>
							</defs>
							<path fill="url(#ppgrad)" d="M77,5.5C77,15.2,84.8,23,94.5,23c1.9,0,3.8-0.3,5.5-0.9V100H0V0h77.9C77.3,1.7,77,3.6,77,5.5z" fillRule="evenodd" clipRule="evenodd"></path>
						</CornerSvg>
						<CloseIcon onClick={this.closePopup}></CloseIcon>
						{this.props.heading ? <Heading>{this.props.heading}</Heading> : null}
						{this.props.children}
					</Inner>
				</CSSTransition>
			</PopupWrapper>
		);
	}
}
const PopupWrapper = styled(Fcc)`
	position: fixed;
	right: 0;
	bottom: 0;
	top: 0;
	left: 0;
	overflow: auto;
	text-align: center;
	padding: 15px;
	background-color: rgba(36, 36, 53, 0.8);
	backdrop-filter: blur(4px);
	animation: ${Fade} 0.2s;
`;
const Background = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
`;

/* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#050000+0,050000+49,050000+67,050000+74,050000+83,ffffff+100 */
const Inner = styled.div`
	position: relative;
	width: 100%;
	max-width: 620px;
	margin: 0 auto;
	display: inline-block;
	padding: 40px;
	border-radius: 10px;
	text-align: left;
	background-color: #ffffff;
	background: linear-gradient(45deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 95%, rgba(255, 255, 255, 0) 95%, rgba(255, 255, 255, 0) 100%);
	transition: 0.2s cubic-bezier(0.65, 0.05, 0.36, 1);
	z-index: 99;

	&.popup-enter-active,
	&.popup-enter-done,
	&.popup-exit {
		opacity: 1;
		transform: scale(1);
	}
	&.popup-exit-active,
	&.popup-exit-done,
	&.popup-enter {
		opacity: 0;
		transform: scale(0);
	}
`;
const CloseIcon = styled.div`
	position: absolute;
	top: -10px;
	right: -10px;
	width: 30px;
	height: 30px;
	border-radius: 30px;
	background-color: ${appConstants.app.themeColor};
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	z-index: 2;

	&::after,
	&::before {
		content: "";
		position: absolute;
		width: 15px;
		height: 2px;
		border-radius: 2px;
		background-color: #ffffff;
		transform: rotate(45deg);
	}
	&::after {
		transform: rotate(-45deg);
	}
`;
const Heading = styled.h1`
	font-size: 24px;
	color: #4d494f;
	text-align: center;
	margin: 0;
	margin-bottom: 25px;
	font-weight: 600;
`;
const CornerSvg = styled.svg`
	position: absolute;
	top: 0;
	right: 0;
	pointer-events: none;
	fill: white;
	z-index: -1;
`;
export default Popup;
