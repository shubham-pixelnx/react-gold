import { s3Url } from "../utils/helper";
let constants = {
	defaultSrc: "",
};
let animationList = [
	{
		label: "None",
		name: "we_image_none",
		html: `<div class="animationObject we_image_none">
            <div class="imageLayer">
                <img src="${constants.defaultSrc}" class="we_image" />
            </div>
        </div>`,
		animeTimeline: [
			{
				targets: ".imageLayer",
				opacity: [1, 1],
				easing: "linear",
				duration: 2000,
			},
		],
	},
	{
		label: "Fade",
		name: "we_image_fade",
		html: `<div class="animationObject we_image_fade">
            <div class="imageLayer">
                <img src="${constants.defaultSrc}" class="we_image" />
            </div>
        </div>`,
		animeTimeline: [
			{
				targets: ".imageLayer",
				opacity: [0, 1],
				easing: "linear",
				duration: 2000,
			},
		],
	},
	{
		label: "Slide Down",
		name: "we_image_slide_down",
		html: `<div class="animationObject we_image_slide_down">
                <div class="imageLayer">
                    <img src="${constants.defaultSrc}" class="we_image" />
                </div>
            </div>`,
		animeTimeline: [
			{
				targets: ".we_image_slide_down .we_image",
				translateY: {
					value: ["-60%", "0%"],
				},
				duration: 1500,
				easing: "easeOutExpo",
				opacity: [0, 1],
			},
		],
	},
	{
		label: "Slide Up",
		name: "we_image_slide_up",
		html: `<div class="animationObject we_image_slide_up">
                <div class="imageLayer">
                    <img src="${constants.defaultSrc}" class="we_image" />
                </div>
            </div>`,
		animeTimeline: [
			{
				targets: ".we_image_slide_up .we_image",
				translateY: {
					value: ["60%", "0%"],
				},
				loop: false,
				opacity: [0, 1],
				duration: 1500,
				easing: "easeOutExpo",
			},
		],
	},
	{
		label: "Slide Left",
		name: "we_image_slide_left",
		html: `<div class="animationObject we_image_slide_left">
                <div class="imageLayer">
                    <img src="${constants.defaultSrc}" class="we_image" />
                </div>
            </div>`,
		animeTimeline: [
			{
				targets: ".we_image_slide_left .we_image",
				translateX: {
					value: ["100%", "0%"],
				},
				loop: false,
				opacity: [0, 1],
				duration: 1500,
				easing: "easeOutExpo",
			},
		],
	},
	{
		label: "Slide Right",
		name: "we_image_slide_right",
		html: `<div class="animationObject we_image_slide_right">
                <div class="imageLayer">
                    <img src="${constants.defaultSrc}" class="we_image" />
                </div>
            </div>`,
		animeTimeline: [
			{
				targets: ".we_image_slide_right .we_image",
				translateX: {
					value: ["-100%", "0%"],
				},
				loop: false,
				opacity: [0, 1],
				duration: 1500,
				easing: "easeOutExpo",
			},
		],
	},
	{
		label: "Zoom In",
		name: "we_image_zoom_in",
		html: `<div class="animationObject we_image_zoom_in">
            <div class="imageLayer">
                <img src="${constants.defaultSrc}" class="we_image" />
            </div>
        </div>`,
		animeTimeline: [
			{
				targets: ".we_image_zoom_in .we_image",
				scale: [0, 1],
				opacity: [0, 1],
				duration: 1500,
				easing: "easeOutExpo",
			},
		],
	},
	{
		label: "Zoom Out",
		name: "we_image_zoom_out",
		html: `<div class="animationObject we_image_zoom_out">
            <div class="imageLayer">
                <img src="${constants.defaultSrc}" class="we_image" />
            </div>
        </div>`,
		animeTimeline: [
			{
				targets: ".we_image_zoom_out .we_image",
				scale: [1.5, 1],
				opacity: [0, 1],
				duration: 1500,
				easing: "easeOutExpo",
			},
		],
	},
	{
		label: "Bounce",
		name: "we_image_bounce",
		html: `<div class="animationObject we_image_bounce">
            <div class="imageLayer">
                <img src="${constants.defaultSrc}" class="we_image" />
            </div>
        </div>`,
		animeTimeline: [
			{
				targets: ".we_image_bounce .we_image",
				translateY: ["-100%", "0%"],
				opacity: [0, 1],
				loop: false,
				duration: 1500,
				easing: "easeOutBounce",
			},
		],
	},
	{
		label: "Pulled",
		name: "we_image_pulled",
		html: `<div class="animationObject we_image_pulled">
            <div class="imageLayer">
                <img src="${constants.defaultSrc}" class="we_image" />
            </div>
        </div>`,
		animeTimeline: [
			{
				targets: ".we_image_pulled .we_image",
				scaleX: [2, 1],
				loop: false,
				duration: 1500,
				easing: "easeOutElastic",
			},
		],
	},
	{
		label: "Rotate",
		name: "we_image_3drotate",
		html: `<div class="animationObject we_image_3drotate">
            <div class="imageLayer">
                <img src="${constants.defaultSrc}" class="we_image" />
            </div>
        </div>`,
		animeTimeline: [
			{
				targets: ".we_image_3drotate .we_image",
				rotateY: [150, 0],
				duration: 2000,
				easing: "easeOutElastic",
			},
			{
				targets: ".we_image_3drotate .we_image",
				duration: 2000,
				easing: "easeOutElastic",
				transform: ["none", "none"],
			},
		],
		removeTransformFrom: [".we_text"],
	},
];

animationList.map((val, index) => {
	val.id = index + 1;

	const applyProperties = function (data) {
		if (!data) return;
		let elem = this;
		let mEl = elem.querySelector("img.we_image, video.we_image");
		if (data?.data?.video) {
			if (mEl.src !== s3Url(data.data.video)) {
				mEl.outerHTML = `<video data-fx-id="${data.id}" src="${s3Url(data.data.video)}" type="video/webm" class="we_image"></video>`;
			}
		} else {
			if (mEl.src !== s3Url(data.src)) {
				mEl.src = s3Url(data.src);
			}
		}
		if (data.zIndex) {
			elem.style.zIndex = data.zIndex;
		}

		elem.style.top = `${data.position.top}%`;
		elem.style.left = `${data.position.left}%`;
		elem.style.opacity = data.opacity / 100;

		elem.style.transform = `scaleX(${data.scale?.x || 1}) scaleY(${data.scale?.y || 1})`;
	};
	val.getMarkup = (data) => {
		let htmlNode = new DOMParser();
		htmlNode = htmlNode.parseFromString(val.html, "text/html");
		htmlNode = htmlNode.body.children[0];

		htmlNode.applyProperties = applyProperties;
		htmlNode.applyProperties(data);

		return htmlNode;
	};
	return val;
});
export default animationList;
