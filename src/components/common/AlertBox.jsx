import React, { Component } from "react";
import Popup from "./Popup";
import styled from "styled-components";
import { Fcc, Btn } from "./Styled";
class AlertBox extends Component {
	constructor(props) {
		super(props);

		this.options = this.props.options || {};
		this.options.title = this.options.title || "Are you sure?";
		this.options.text = this.options.text || "Sample Text here";
		this.options.buttons = this.options.buttons || [];
		if (!this.options.buttons[0]) {
			this.options.buttons[0] = "Cancel";
		}
		if (!this.options.buttons[1]) {
			this.options.buttons[1] = "Okay";
		}
	}
	handleAction = (data) => {
		this.props.handleAction(data);
	};
	render() {
		return (
			<Popup
				handleClose={() => {
					this.props.handleAction(null);
				}}
				heading={this.options.title}
				open={true}
			>
				<AlertText>{this.options.text}</AlertText>
				<ActionButtons>
					<Btn
						theme="secondary"
						onClick={() => {
							this.props.handleAction(false);
						}}
					>
						{this.options.buttons[0]}
					</Btn>
					<Btn
						theme="primary"
						onClick={() => {
							this.props.handleAction(true);
						}}
					>
						{this.options.buttons[1]}
					</Btn>
				</ActionButtons>
			</Popup>
		);
	}
}

const ActionButtons = styled(Fcc)`
	margin-top: 2rem;
	gap: 1.5rem;
`;
const AlertText = styled.p`
	font-size: 1.1rem;
	text-align: center;
`;
export default AlertBox;
