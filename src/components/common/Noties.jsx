import React, { Component, Fragment } from "react";
import { appConstants } from "./../../constants/appDefaults";
import { connect } from "react-redux";
import { default as uA } from "./../../actions/universalAction";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styled from "styled-components";

class Noties extends Component {
	constructor(props) {
		super(props);
		this.toBeDismissed = [];
	}
	componentDidUpdate(prevProps) {
		// Setting the timeout for dismissing Notification Boxes
		let newlyAddedNoties = this.props.noties.filter((x) => !prevProps.noties.includes(x));
		newlyAddedNoties.forEach((noty) => {
			setTimeout(() => {
				if (this.toBeDismissed.includes(noty.key)) {
					return;
				}
				this.toBeDismissed.push(noty.key);
				this.props.dismissNoty({ key: noty.key });
			}, sustainNotyUpto);
		});
	}
	render() {
		return (
			<NotyWrapper>
				{this.props.noties.map((noty) => {
					return (
						<CSSTransition in={true} key={noty.key} timeout={300} classNames="noty">
							<Noty
								onClick={() => {
									this.props.dismissNoty({ key: noty.key });
								}}
							>
								{noty.text}
							</Noty>
						</CSSTransition>
					);
				})}
			</NotyWrapper>
		);
	}
}

const NotyWrapper = styled(TransitionGroup)`
	position: absolute;
	bottom: 0;
	right: 0;
	padding: 1em;
	overflow: hidden;
	width: 22vw;
	z-index: 100;

	@media only screen and (max-width: 600px) {
		width: 100vw;
	}
`;
const Noty = styled.span`
	display: block;
	background: rgba(0, 0, 10, 0.7);
	padding: 10px 12px;
	margin-bottom: 10px;
	color: white;
	border-radius: 6px;
	cursor: pointer;

	&.noty-enter {
		opacity: 0;
		transform: translateX(100%);
	}

	&.noty-enter-active {
		opacity: 1;
		transform: translateX(0%);
		transition: all 300ms ease-out;
	}

	&.noty-exit {
		opacity: 1;
		transform: translateX(0%);
	}
	&.noty-exit-active {
		opacity: 0;
		transform: translateX(100%);
		transition: all 300ms ease-in;
	}
`;

const {
	app: { sustainNotyUpto },
} = appConstants;

const mapStateToProps = (state) => {
	return {
		...state.universal,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		notify: (data) => dispatch(uA.notify(data)),
		dismissNoty: (key) => dispatch(uA.dismissNoty(key)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Noties);
