import types from "../constants/actionTypes";
import appDefaults from "../constants/appDefaults";
const initialState = appDefaults.app.initialState;

const universalReducer = (s = initialState, a) => {
	switch (a.type) {
		case types.NEW_NOTY:
			let existingNoties = s.noties;

			if (existingNoties.length > 10) {
				existingNoties = existingNoties.slice(existingNoties.length - 10, existingNoties.length);
			}
			return {
				...s,
				noties: [a.payload, ...existingNoties],
			};
		case types.DISMISS_NOTY:
			return {
				...s,
				noties: s.noties.filter((e) => e.key !== a.payload.key),
			};
		default:
			return s;
	}
};

export default universalReducer;
