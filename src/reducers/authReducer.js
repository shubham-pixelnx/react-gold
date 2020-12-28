import types from "./../constants/actionTypes";
import appDefaults, { appConstants } from "./../constants/appDefaults";
let {
	app: {
		requestState: { SUCCEEDED, FETCHING, ERRORED },
	},
} = appConstants;
const initialState = appDefaults.auth.initialState;

const authReducer = (s = initialState, a) => {
	switch (a.type) {
		case types.LOGIN:
			return {
				...s,
				login: {
					...s.login,
					requestState: SUCCEEDED,
					isLoggedIn: true,
				},
			};
		case types.AUTH_IN_PROCESS:
			return {
				...s,
				login: {
					...s.login,
					requestState: FETCHING,
				},
			};
		case types.AUTH_FAILED:
			return {
				...s,
				login: {
					...s.login,
					requestState: ERRORED,
				},
			};
		case types.REGISTER_STAGE:
			return {
				...s,
				register: {
					...s.register,
					...a.payload,
				},
			};
		case types.FORGOT_PASSWORD:
			return {
				...s,
				forgotPassword: {
					...s.forgotPassword,
					...a.payload,
				},
			};
		case types.TOKEN_VALIDATE:
			return {
				...s,
				resetPassword: {
					...s.resetPassword,
					tokenValidation: {
						...s.resetPassword.tokenValidation,
						...a.payload,
					},
				},
			};
		case types.RESET_PASSWORD:
			return {
				...s,
				resetPassword: {
					...s.resetPassword,
					passwordUpdate: {
						...s.resetPassword.passwordUpdate,
						...a.payload,
					},
				},
			};
		default:
			return s;
	}
};

export default authReducer;
