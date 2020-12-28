import styled, { keyframes } from "styled-components";
import { appConstants } from "./../../constants/appDefaults";
import { Link } from "react-router-dom";
let {
	app: { btnThemes },
} = appConstants;
// QuickStyles
export const Fcc = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

// Common Snippets
export const GradientStop = styled.stop`
	stop-color: ${(props) => props.color || "white"};
	stop-opacity: ${(props) => props.opacity || 0};
`;
// Animations
export const Fade = keyframes`
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
`;

export const Btn = styled.button`
	background: ${(props) => btnThemes[props.theme].bg};
	color: ${(props) => btnThemes[props.theme].text};
	border: none;
	padding: 6px 12px;
	border-radius: 8px;
`;
export const Anchor = styled(Link)`
	background: ${(props) => btnThemes[props.theme].bg};
	color: ${(props) => btnThemes[props.theme].text};
	text-decoration: none;
`;
