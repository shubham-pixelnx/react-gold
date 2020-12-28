import Cookies from "universal-cookie";
import { appConstants } from "./../constants/appDefaults";
// import { Loading } from "./helper";

const cookies = new Cookies();

let postman = {};
let defaultOptions = {
	loader: true, // show loader while on going request
	includeToken: true, // include access token from cookies in autorization header
	ctJSON: true, // content type of the request data is JSON
};

let sendRequest = (method, endpoint, options = {}, others = {}) => {
	let url = `${appConstants.app.apiBase}${endpoint}`;

	others = {
		...defaultOptions,
		...others,
	};

	let h = new Headers();

	if (others.ctJSON) {
		h.append("Content-Type", "application/json");
	}

	if (others.includeToken) {
		let tempLogin = sessionStorage.getItem("temporarylogin") === "YES";
		let key = tempLogin ? "tempaccess" : "accesstoken";
		h.append("Authorization", cookies.get(key));
	}

	return new Promise((resolve, reject) => {
		// if (others.loader === true) Loading("show");
		fetch(url, {
			method,
			headers: h,
			...options,
		})
			.then((e) => e.json())
			.then((res) => {
				if (!res.success) {
					if (res.message.includes("jwt") || ["invalid signature", "invalid token"].includes(res.message)) {
						let tempLogin = sessionStorage.getItem("temporarylogin") === "YES";
						let key = tempLogin ? "tempaccess" : "accesstoken";
						cookies.remove(key, { path: "/" });
						/* swal({
							title: "Session Expired!",
							text: "Redirecting to login page...",
							icon: "error",
							buttons: false,
							timer: 3000,
							closeOnClickOutside: false,
							closeOnEsc: false,
						}).then((e) => {
							window.location.href = "/";
						}); */
						return;
					}
					reject(res);
					return;
				}
				resolve(res);
			})
			.catch(() => {
				reject({
					ERROR_TYPE: "network_error",
				});
			})
			.finally(() => {
				// if (others.loader === true) Loading("hide");
			});
	});
};

postman.get = (endpoint, options, others) => {
	return sendRequest("GET", endpoint, options, others);
};
postman.post = (endpoint, options, others) => {
	return sendRequest("POST", endpoint, options, others);
};
postman.put = (endpoint, options, others) => {
	return sendRequest("PUT", endpoint, options, others);
};
postman.patch = (endpoint, options, others) => {
	return sendRequest("PATCH", endpoint, options, others);
};
postman.delete = (endpoint, options, others) => {
	return sendRequest("delete", endpoint, options, others);
};

postman.upload = (endpoint, fd = new FormData(), onStart = () => false, onProgress = () => false, onEnd = () => false) => {
	return new Promise((resolve, reject) => {
		let url = appConstants.app.apiBase.concat(endpoint);

		let xhr = new XMLHttpRequest();
		xhr.open("POST", url, true);
		let tempLogin = sessionStorage.getItem("temporarylogin") === "YES";
		let key = tempLogin ? "tempaccess" : "accesstoken";
		xhr.setRequestHeader("Authorization", cookies.get(key));

		xhr.upload.onprogress = function (e) {
			if (e.lengthComputable) {
				onProgress(e.loaded, e.total);
			}
		};
		xhr.upload.onloadstart = function (e) {
			onStart(e);
		};
		xhr.upload.onloadend = function (e) {
			onEnd(e);
		};
		xhr.onreadystatechange = function () {
			if (xhr.readyState === XMLHttpRequest.DONE) {
				resolve(xhr);
			}
		};
		xhr.onerror = (e) => {
			reject(e);
			console.log(e);
		};
		xhr.send(fd);
	});
};

export default postman;
