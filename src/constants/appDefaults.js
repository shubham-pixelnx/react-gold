// Currently we are experiencing high demand on rendering, so your project might take a bit longer than usual. Anyway You will get an email notification, once your export is finished. Thank you.
const _ = {}; // config
const __ = {}; // constants

// App Contants
__.app = {
	title: "WeStory",
	themeColor: "#3e82f7",
	themeText: "#ffffff",
	btnThemes: {
		primary: {
			bg: "#3e82f7",
			text: "#ffffff",
		},
		secondary: {
			bg: "#ffffff",
			text: "#3e82f7",
		},
	},
	apiBase: "https://api.story.wedios.co",
	s3Endpoint: "https://story-wedios.s3.amazonaws.com/",
	requestState: {
		INITIAL: "INITIAL",
		FETCHING: "FETCHING",
		SUCCEEDED: "SUCCEEDED",
		ERRORED: "ERRORED",
	},
	popupState: {
		OPEN: "OPEN",
		CLOSE: "CLOSE",
	},
	mediaState: {
		INITIAL: "INITIAL",
		LOADED: "LOADED",
		LOADING: "LOADING",
		FAILED: "FAILED",
	},
	visibleState: {
		SHOW: "SHOW",
		HIDE: "HIDE",
	},
	errorTypes: {
		UNKNOWN: "UNKNOWN",
		ACCESS_DENIED: "ACCESS_DENIED",
		NETWORK_FAILURE: "NETWORK_FAILURE",
		NOT_FOUND: "NOT_FOUND",
	},
	listTypes: {
		DEFAULT_LIST: "DEFAULT_LIST",
		SEARCH_LIST: "SEARCH_LIST",
	},
	sustainNotyUpto: 3000, //ms
};
const primaryLogo = `static/logo-primary.svg`;
const whiteLogo = `static/logo-white.svg`;

let commonReqKeyPairs = {
	stage: __.app.requestState.INITIAL,
	errorType: "",
	errorTitle: "",
	errorText: "",
};

// App Configs
_.app = {
	headerData: {
		navigation: {
			user: [
				{
					label: "My Stories",
					href: "/dashboard",
				},
				{
					label: "Templates",
					href: "/templates",
				},
				{
					label: "How It Works",
					href: "/how-it-works",
				},
			],
		},
		logo: {
			primary: primaryLogo,
			white: whiteLogo,
		},
		initialState: {
			loggingOut: false,
			navigation: {
				platform: null,
				links: [],
			},
			logo: "",
			userInfo: {
				...commonReqKeyPairs,
			},
		},
	},
	initialState: {
		noties: [],
	},
};

// Editor Constants
__.editor = {
	contentState: {
		INITIAL: "INITIAL",
		FETCHING: "FETCHING",
		ERRORED: "ERRORED",
		NOT_FOUND: "NOT_FOUND",
		READY: "READY",
	},
};

_.auth = {
	initialState: {
		login: {
			...commonReqKeyPairs,
			data: [],
		},
		register: {
			...commonReqKeyPairs,
			data: [],
		},
		forgotPassword: {
			...commonReqKeyPairs,
			data: [],
		},
		resetPassword: {
			tokenValidation: {
				...commonReqKeyPairs,
				data: [],
			},
			passwordUpdate: {
				...commonReqKeyPairs,
				data: [],
			},
		},
	},
};

// Editor Configs
_.editor = {
	initialState: {
		layerData: {
			...commonReqKeyPairs,
			data: {},
		},
		general: {
			save: {
				...commonReqKeyPairs,
			},
		},
		videoId: null,
		title: null,
		template: null,
		totalDuration: null,
		playing: false,
		currentTime: 0,
		currentFrame: 0,
	},
};

_.common = {
	initialState: {
		templates: {},
	},
};

_.profile = {
	initialState: {
		activeTab: "profile",
		updateProfile: {
			...commonReqKeyPairs,
			data: [],
		},
	},
};
_.userArea = {
	initialState: {
		dashboard: {
			...commonReqKeyPairs,
			data: [],
		},
		templates: {
			...commonReqKeyPairs,
			data: [],
		},
	},
};
_.render = {
	initialState: {
		videoData: {
			...commonReqKeyPairs,
			data: [],
		},
		renderRequest: {
			...commonReqKeyPairs,
			data: [],
		},
	},
};

export default _;
export let appConstants = __;
