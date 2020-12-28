import ReactDOM from "react-dom";
import AlertBox from "../components/common/AlertBox";
import { appConstants } from "./../constants/appDefaults";
// import postman from "./postman";

export function Confirmation(options = {}) {
	return new Promise((resolve) => {
		ReactDOM.render(
			<AlertBox
				options={options}
				handleAction={(data) => {
					resolve(data);
					ReactDOM.render(null, document.querySelector(".alert-box-wrapper"));
				}}
			/>,
			document.querySelector(".alert-box-wrapper")
		);
	});
}

export let dataURItoBlob = (dataURI) => {
	let byteString = atob(dataURI.split(",")[1]);
	let mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
	let ab = new ArrayBuffer(byteString.length);
	let ia = new Uint8Array(ab);
	for (let i = 0; i < byteString.length; i++) {
		ia[i] = byteString.charCodeAt(i);
	}
	let blob = new Blob([ab], { type: mimeString });
	return blob;
};
export let isValidEmail = (email) => {
	const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	return re.test(String(email).toLowerCase());
};

export let twoDigitStr = (n) => {
	if (n < 10 && n >= 0) {
		n = `0${n}`;
	}
	return n;
};
export let s3Url = (path = "") => {
	if (!path) {
		return null;
	}
	if (path.startsWith("http://") || path.startsWith("https://") || path.startsWith("blob:")) {
		return path;
	}
	let _ = appConstants.app.s3Endpoint.concat(path);
	_ = new URL(_);
	return _.toString();
};

export let qs = (s, parentNode = document) => {
	return parentNode.querySelector(s);
};
export let getFirstName = (fullName = "") => {
	return fullName.split(" ")[0];
};
export let getNameInitials = (fullName = "") => {
	let splittedName = fullName.split(" ");
	if (splittedName.length === 1) {
		return fullName.slice(0, 2);
	} else {
		return `${splittedName[0].charAt(0)}${splittedName[1].charAt(0)}`;
	}
};
export let getDurationString = (duration = 0) => {
	let seconds = Math.floor(duration);
	let durationString = "";
	if (seconds >= 60) {
		let minute = Math.floor(seconds / 60);
		let m_word = minute > 1 ? "Minutes" : "Minute";
		m_word = "m";
		let second = seconds % (minute * 60);
		let s_word = second > 1 ? "Seconds" : "Second";
		s_word = "s";
		if (second === 0) {
			second = s_word = "";
		}
		durationString = `${minute}${m_word} ${second}${s_word}`;
	} else {
		let s_word = seconds > 1 ? "Seconds" : "Second";
		s_word = "s";
		durationString = `${seconds}${s_word}`;
	}
	return durationString;
};
export let weDecompress = ({ keys, data }) => {
	if ((!keys, !data)) {
		return [];
	}
	data = data.map((entry) => {
		let final = {};
		for (let k in keys) {
			let index = keys[k];
			final[k] = entry[index];
		}
		return final;
	});
	return data;
};
export let qsa = (s) => document.querySelectorAll(s);
export let randomString = () => Math.random().toString(36).substr(2);
