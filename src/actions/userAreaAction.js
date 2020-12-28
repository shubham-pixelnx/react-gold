import types from "./../constants/actionTypes";
import { appConstants } from "../constants/appDefaults";
import postman from "../utils/postman";
import { weDecompress } from "../utils/helper";
let {
	app: {
		requestState: { FETCHING, ERRORED, SUCCEEDED },
		errorTypes,
	},
} = appConstants;

export const actions = {};
