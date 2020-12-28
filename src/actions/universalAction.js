import types from "./../constants/actionTypes";
import { appConstants } from "../constants/appDefaults";
import postman from "../utils/postman";
import { randomString } from "../utils/helper";
let actions = {};
export default actions = {};
actions.notify = (data) => {
	return { type: types.NEW_NOTY, payload: { key: randomString(), ...data } };
};
actions.dismissNoty = (data) => {
	return { type: types.DISMISS_NOTY, payload: data };
};
