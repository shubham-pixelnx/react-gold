import { combineReducers } from "redux";
import authReducer from "./authReducer";
import universalReducer from "./universalReducer";
import actionTypes from "../constants/actionTypes";
const { HANDLE_LOGOUT } = actionTypes;
const appReducer = combineReducers({
	auth: authReducer,
	universal: universalReducer,
});
const rootReducer = (state, action) => {
	if (action.type === HANDLE_LOGOUT) {
		// reducers are supposed to return the initial state when they are called with undefined as the first argument, no matter the action
		state = undefined;
	}

	return appReducer(state, action);
};
export default rootReducer;
