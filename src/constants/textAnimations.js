import twemoji from "twemoji";
let constants = {
	defaultText: "Text Here",
};
let textAnimation = [
	{
		name: "we_text_fade",
		html: `<div class="animationObject we_text_fade">
            <div class="textLayer">
                <div class="we_text">Fade</div>
            </div>
        </div>`,
		animeTimeline: [
			{
				targets: ".textLayer",
				opacity: [0, 1],
				easing: "linear",
				duration: 2000,
			},
		],
	},
	{
		name: "we_text_effect13",
		html: `<div class="animationObject we_text_effect13">
                <div class="textLayer">
                    <div class="we_text">Slide Down</div>
                </div>
            </div>`,
		animeTimeline: [
			{
				targets: ".we_text_effect13 .we_text",
				translateY: {
					value: [-60, 0],
				},
				duration: 1500,
				easing: "easeOutExpo",
				opacity: [0, 1],
			},
		],
	},
	{
		name: "we_text_effect14",
		html: `<div class="animationObject we_text_effect14">
                <div class="textLayer">
                    <div class="we_text">Slide Up</div>
                </div>
            </div>`,
		animeTimeline: [
			{
				targets: ".we_text_effect14 .we_text",
				translateY: {
					value: [60, 0],
				},
				loop: false,
				opacity: [0, 1],
				duration: 1500,
				easing: "easeOutExpo",
			},
		],
	},
	{
		name: "we_text_effect15",
		html: `<div class="animationObject we_text_effect15">
                <div class="textLayer">
                    <div class="we_text">Slide Left</div>
                </div>
            </div>`,
		animeTimeline: [
			{
				targets: ".we_text_effect15 .we_text",
				translateX: {
					value: [100, 0],
				},
				loop: false,
				opacity: [0, 1],
				duration: 1500,
				easing: "easeOutExpo",
			},
		],
	},
	{
		name: "we_text_effect16",
		html: `<div class="animationObject we_text_effect16">
                <div class="textLayer">
                    <div class="we_text">Slide Right</div>
                </div>
            </div>`,
		animeTimeline: [
			{
				targets: ".we_text_effect16 .we_text",
				translateX: {
					value: [-100, 0],
				},
				loop: false,
				opacity: [0, 1],
				duration: 1500,
				easing: "easeOutExpo",
			},
		],
	},
	{
		name: "we_text_effect17",
		html: `<div class="animationObject we_text_effect17">
            <div class="textLayer">
                <div class="we_text">Zoom In</div>
            </div>
        </div>`,
		animeTimeline: [
			{
				targets: ".we_text_effect17 .we_text",
				scale: [0, 1],
				opacity: [0, 1],
				duration: 1500,
				easing: "easeOutExpo",
			},
		],
	},
	{
		name: "we_text_effect18",
		html: `<div class="animationObject we_text_effect18">
            <div class="textLayer">
                <div class="we_text">Zoom Out</div>
            </div>
        </div>`,
		animeTimeline: [
			{
				targets: ".we_text_effect18 .we_text",
				scale: [1.5, 1],
				opacity: [0, 1],
				duration: 1500,
				easing: "easeOutExpo",
			},
		],
	},
	{
		name: "we_text_effect19",
		html: `<div class="animationObject we_text_effect19">
            <div class="textLayer">
                <div class="we_text">Word Spacing</div>
            </div>
        </div>`,
		animeTimeline: [
			{
				targets: ".we_text_effect19 .we_text",
				wordSpacing: [20, 0],
				opacity: [0, 1],
				duration: 1500,
				easing: "easeOutExpo",
			},
		],
	},
	{
		name: "we_text_effect20",
		html: `<div class="animationObject we_text_effect20">
            <div class="textLayer">
                <div class="we_text">Shift text right</div>
            </div>
        </div>`,
		animeTimeline: [
			{
				targets: ".we_text_effect20 .we_text",
				letterSpacing: [-12, 2],
				opacity: [0, 1],
				loop: false,
				duration: 1500,
				easing: "easeOutExpo",
			},
		],
	},
	{
		name: "we_text_effect29",
		html: `<div class="animationObject we_text_effect29">
            <div class="textLayer">
                <div class="we_text">Text bounce</div>
            </div>
        </div>`,
		animeTimeline: [
			{
				targets: ".we_text_effect29 .we_text",
				translateY: [-50, 0],
				opacity: [0, 1],
				loop: false,
				duration: 1500,
				easing: "easeOutBounce",
			},
		],
	},
	{
		name: "we_text_effect31",
		html: `<div class="animationObject we_text_effect31">
            <div class="textLayer">
                <div class="we_text">Pulled text</div>
            </div>
        </div>`,
		animeTimeline: [
			{
				targets: ".we_text_effect31 .we_text",
				scaleX: [2, 1],
				loop: false,
				duration: 1500,
				easing: "easeOutElastic",
			},
		],
	},
	{
		name: "we_text_effect32",
		html: `<div class="animationObject we_text_effect32">
            <div class="textLayer">
                <div class="we_text">Rotate text</div>
            </div>
        </div>`,
		animeTimeline: [
			{
				targets: ".we_text_effect32 .we_text",
				rotateY: [150, 0],
				duration: 2000,
				easing: "easeOutElastic",
			},
			{
				targets: ".we_text_effect32 .we_text",
				duration: 2000,
				easing: "easeOutElastic",
				transform: ["none", "none"],
			},
		],
		removeTransformFrom: [".we_text"],
	},
	{
		name: "we_text_effect1",
		html: `<div class="animationObject we_text_effect1">
            <div class="layer1"></div>
            <div class="layer2"></div>
            <div class="textLayer">
                <div class="we_text">${constants.defaultText}</div>
            </div>
        </div>`,
		animeTimeline: [
			{
				targets: ".we_text_effect1 .layer1",
				scaleX: [0, 1],
				easing: "easeOutExpo",
				duration: 2000,
			},
			{
				targets: ".we_text_effect1 .layer2",
				scaleX: {
					value: [0, 1],
					duration: 2000,
				},
				easing: "easeOutExpo",
				duration: 1500,
				timeOffset: "-=2000",
			},
			{
				targets: ".we_text_effect1 .we_text",
				translateY: {
					value: [20, 0],
				},
				opacity: [0, 1],
				duration: 1500,
				easing: "easeOutExpo",
				delay: 200,
				timeOffset: "-=2000",
			},
		],
		coloredBgs: [
			{
				name: "main",
				selector: ".layer1, .layer2",
				background: "#03a9f4",
			},
		],
	},
	{
		name: "we_text_effect2",
		html: `<div class="animationObject we_text_effect2">
            <div class="layer1"></div>
            <div class="layer2"></div>
            <div class="textLayer">
                <div class="we_text we_text_white">${constants.defaultText}</div>
            </div>
        </div>`,
		animeTimeline: [
			{
				targets: ".we_text_effect2 .layer1,.we_text_effect2 .layer2",
				scaleY: [0, 1],
				easing: "easeOutExpo",
				duration: 1500,
			},
			{
				targets: ".we_text_effect2 .we_text",
				translateY: [-20, 0],
				opacity: [0, 1],
				duration: 1000,
				easing: "easeOutExpo",
				delay: 300,
				timeOffset: "-=1000",
			},
		],
		coloredBgs: [
			{
				name: "main",
				selector: ".layer1, .layer2",
				background: "#673ab7",
			},
		],
	},
	{
		name: "we_text_effect3",
		html: `<div class="animationObject we_text_effect3">
                <div class="layer1"></div>
                <div class="textLayer">
                    <div class="we_text we_text_white">${constants.defaultText}</div>
                </div>
            </div>`,
		animeTimeline: [
			{
				targets: ".we_text_effect3 .layer1",
				duration: 500,
				scaleY: [0, 0.1],
				easing: "easeInSine",
			},
			{
				targets: ".we_text_effect3 .layer1",
				duration: 1500,
				scaleY: [0.1, 1],
				easing: "easeOutExpo",
			},
			{
				targets: ".we_text_effect3 .we_text",
				translateY: {
					value: [60, 0],
				},
				opacity: [0, 1],
				duration: 1000,
				easing: "easeOutExpo",
				delay: 650,
				timeOffset: "-=1500",
			},
		],
		coloredBgs: [
			{
				name: "main",
				selector: ".layer1",
				background: "#28a745",
			},
		],
	},
	{
		name: "we_text_effect5",
		html: `<div class="animationObject we_text_effect5">
            <div class="layer1"></div>
            <div class="textLayer">
                <div class="we_text we_text_white">${constants.defaultText}</div>
            </div>
        </div>`,
		animeTimeline: [
			{
				targets: ".we_text_effect5 .layer1",
				scale: [0.7, 1],
				opacity: [0, 1],
				easing: "easeOutBounce",
				duration: 1000,
			},
			{
				targets: ".we_text_effect5 .we_text",
				scale: [0.7, 1],
				opacity: [0, 1],
				easing: "easeOutBounce",
				duration: 1000,
				delay: 500,
				timeOffset: "-=1500",
			},
		],
		coloredBgs: [
			{
				name: "main",
				selector: ".layer1",
				background: "#03a9f4",
			},
		],
	},
	{
		name: "we_text_effect6",
		html: `<div class="animationObject we_text_effect6">
            <div class="layer1"></div>
            <div class="textLayer">
                <div class="we_text we_text_white">${constants.defaultText}</div>
            </div>
        </div>`,
		animeTimeline: [
			{
				targets: ".we_text_effect6 .layer1",
				right: ["-100%", 0],
				easing: "easeOutExpo",
				duration: 1500,
			},
			{
				targets: ".we_text_effect6 .we_text",
				translateX: {
					value: [150, 0],
					duration: 1500,
				},
				opacity: [0, 1],
				duration: 1500,
				easing: "easeOutExpo",
				delay: 400,
				timeOffset: "-=1500",
			},
		],
		coloredBgs: [
			{
				name: "main",
				selector: ".layer1",
				background: "#f44336",
			},
		],
	},
	{
		name: "we_text_effect7",
		html: `<div class="animationObject we_text_effect7">
            <div class="layer1"></div>
            <div class="layer2"></div>
            <div class="textLayer">
                <div class="we_text we_text_white">${constants.defaultText}</div>
            </div>
        </div>`,
		animeTimeline: [
			{
				targets: ".we_text_effect7 .layer1",
				scaleX: {
					value: [0, 1],
					duration: 2000,
				},
				easing: "easeOutExpo",
				duration: 1500,
				autoplay: true,
				loop: false,
			},
			{
				targets: ".we_text_effect7 .layer2",
				scaleX: {
					value: [0, 1],
					duration: 2000,
				},
				easing: "easeOutExpo",
				duration: 1500,
				autoplay: true,
				loop: false,
				timeOffset: "-=2000",
			},
			{
				targets: ".we_text_effect7 .we_text",
				translateX: {
					value: [60, 0],
					duration: 1500,
				},
				loop: false,
				opacity: [0, 1],
				duration: 1500,
				easing: "easeOutExpo",
				delay: 400,
				timeOffset: "-=2000",
			},
		],
		coloredBgs: [
			{
				name: "main",
				selector: ".layer1, .layer2",
				background: "#4e5aff",
			},
		],
	},
	{
		name: "we_text_effect8",
		html: `<div class="animationObject we_text_effect8">
            <div class="layer1"></div>
            <div class="layer2"></div>
            <div class="textLayer">
                <div class="we_text we_text_white">${constants.defaultText}</div>
            </div>
        </div>`,
		animeTimeline: [
			{
				targets: ".we_text_effect8 .layer1",
				scaleX: {
					value: [0, 1],
					duration: 2000,
				},
				easing: "easeOutExpo",
				duration: 1500,
				autoplay: true,
				loop: false,
			},
			{
				targets: ".we_text_effect8 .layer2",
				scaleX: {
					value: [0, 1],
					duration: 2000,
				},
				easing: "easeOutExpo",
				duration: 1500,
				autoplay: true,
				loop: false,
				timeOffset: "-=2000",
			},
			{
				targets: ".we_text_effect8 .we_text",
				translateY: {
					value: [-60, 0],
					duration: 1500,
				},
				loop: false,
				opacity: [0, 1],
				duration: 1500,
				easing: "easeOutExpo",
				delay: 400,
				timeOffset: "-=1500",
			},
		],
		coloredBgs: [
			{
				name: "main",
				selector: ".layer1, .layer2",
				background: "#23e5d2",
			},
		],
	},
	{
		name: "we_text_effect11",
		html: `<div class="animationObject we_text_effect11">
            <div class="layer1"></div>
            <div class="layer2"></div>
            <div class="textLayer">
                <div class="we_text we_text_white">${constants.defaultText}</div>
            </div>
        </div>`,
		animeTimeline: [
			{
				targets: ".we_text_effect11 .layer2",
				duration: 800,
				scaleY: [0, 0.3],
				scaleX: [0.5, 0.8],
				easing: "easeInSine",
			},
			{
				targets: ".we_text_effect11 .layer2",
				duration: 1500,
				scaleY: [0.3, 1],
				scaleX: [0.8, 1],
				easing: "easeOutExpo",
			},
			{
				targets: ".we_text_effect11 .layer1",
				duration: 600,
				delay: 800,
				scaleY: [0, 1],
				scaleX: [0.5, 1],
				easing: "easeInSine",
				timeOffset: "-=2300",
			},
			{
				targets: ".we_text_effect11 .we_text",
				translateY: {
					value: [60, 0],
				},
				opacity: [0, 1],
				duration: 1500,
				easing: "easeOutExpo",
				timeOffset: "-=1000",
			},
		],
		coloredBgs: [
			{
				name: "layer1",
				selector: ".layer1",
				background: "#353535",
			},
			{
				name: "layer2",
				selector: ".layer2",
				background: "#ff5722",
			},
		],
	},
	{
		name: "we_text_effect23",
		html: `<div class="animationObject we_text_effect23">
            <div class="layer1"></div>
            <div class="textLayer">
                <div class="we_text">${constants.defaultText}</div>
            </div>
        </div>`,
		animeTimeline: [
			{
				targets: ".we_text_effect23 .layer1",
				scaleX: [1, 0],
				duration: 2000,
				easing: "easeOutExpo",
			},
			{
				targets: ".we_text_effect23 .we_text",
				translateX: [200, 0],
				loop: false,
				opacity: [0, 1],
				duration: 2000,
				easing: "easeOutExpo",
				timeOffset: "-=2000",
			},
		],
		coloredBgs: [
			{
				name: "main",
				selector: ".layer1",
				background: "#03a9f4",
			},
		],
	},
	{
		name: "we_text_effect24",
		html: `<div class="animationObject we_text_effect24">
            <div class="layer1"></div>
            <div class="textLayer">
                <div class="we_text">${constants.defaultText}</div>
            </div>
        </div>`,
		animeTimeline: [
			{
				targets: ".we_text_effect24 .layer1",
				scaleX: [1, 0],
				loop: false,
				duration: 2000,
				easing: "easeOutExpo",
			},
			{
				targets: ".we_text_effect24 .we_text",
				translateX: [-200, 0],
				loop: false,
				opacity: [0, 1],
				duration: 2000,
				easing: "easeOutExpo",
				timeOffset: "-=2000",
			},
		],
		coloredBgs: [
			{
				name: "main",
				selector: ".layer1",
				background: "#03a9f4",
			},
		],
	},
	{
		name: "we_text_effect157",
		html: `<div class="animationObject we_text_effect157">
            <div class="layer1"></div>
            <div class="layer2"></div>
            <div class="textLayer">
                <div class="we_text">${constants.defaultText}</div>
            </div>
        </div>`,
		animeTimeline: [
			{
				targets: ".we_text_effect157 .layer1",
				loop: false,
				easing: "easeOutExpo",
				left: ["-100%", 0],
				duration: 1500,
			},
			{
				targets: ".we_text_effect157 .layer1",
				loop: false,
				easing: "easeOutExpo",
				left: [0, "100%"],
				duration: 1500,
				timeOffset: "-=1500",
			},
			{
				targets: ".we_text_effect157 .layer2",
				loop: false,
				easing: "easeOutExpo",
				right: ["-100%", 0],
				duration: 1500,
				timeOffset: "-=1500",
			},
			{
				targets: ".we_text_effect157 .layer2",
				loop: false,
				easing: "easeOutExpo",
				right: [0, "100%"],
				duration: 1500,
				timeOffset: "-=1500",
			},
			{
				targets: ".we_text_effect157 .we_text",
				translateX: [-200, 0],
				loop: false,
				opacity: [0, 1],
				duration: 1500,
				easing: "easeOutExpo",
				timeOffset: "-=1500",
			},
		],
		coloredBgs: [
			{
				name: "main",
				selector: ".layer1, .layer2",
				background: "#2196f3",
			},
		],
	},
	{
		name: "we_text_effect45",
		html: `<div class="animationObject we_text_effect45">
                <div class="we_text_effect45_inner">
                    <div class="layer1"></div>
                    <div class="layer2"></div>
                    <div class="textLayer">
                        <div class="we_text">${constants.defaultText}</div>
                    </div>
                </div>
        </div>`,
		animeTimeline: [
			{
				targets: ".we_text_effect45 .layer1",
				scaleX: [0, 1],
				loop: false,
				duration: 2000,
				easing: "easeOutExpo",
			},
			{
				targets: ".we_text_effect45 .layer2",
				scaleX: [0, 1],
				loop: false,
				duration: 2000,
				delay: 100,
				easing: "easeOutExpo",
				timeOffset: "-=2000",
			},
			{
				targets: ".we_text_effect45 .we_text",
				translateX: [200, 0],
				loop: false,
				opacity: [0, 1],
				duration: 2000,
				delay: 500,
				easing: "easeOutExpo",
				timeOffset: "-=2000",
			},
		],
		coloredBgs: [
			{
				name: "layer1",
				selector: ".layer1",
				background: "#ff5722",
			},
			{
				name: "layer2",
				selector: ".layer2",
				background: "#353535",
			},
		],
	},
	{
		name: "we_text_effect70",
		html: `<div class="animationObject we_text_effect70">
            <div class="Layer"></div>
            <div class="textLayer">
                <div class="we_text">${constants.defaultText}</div>
            </div>
        </div>`,
		animeTimeline: [
			{
				targets: ".we_text_effect70 .Layer",
				scaleX: {
					value: [0, 1],
					duration: 1000,
				},
				easing: "easeOutExpo",
				duration: 1.8,
				autoplay: true,
				loop: false,
			},
			{
				targets: ".we_text_effect70 .we_text",
				translateX: {
					value: [-500, 1],
					duration: 1000,
				},
				loop: false,
				opacity: [0, 1],
				duration: 1000,
				easing: "easeOutExpo",
				timeOffset: "-=1000",
			},
		],
		coloredBgs: [
			{
				name: "layer1",
				selector: ".Layer",
				background: "#f8783a",
			},
		],
	},
	{
		name: "we_text_effect78",
		html: `<div class="animationObject we_text_effect78">
            <div class="Layer"></div>
            <div class="textLayer">
                <div class="we_text">${constants.defaultText}</div>
            </div>
        </div>`,
		animeTimeline: [
			{
				targets: ".we_text_effect78 .Layer",
				scaleX: {
					value: [0, 1],
					duration: 1000,
				},
				easing: "easeOutExpo",
				duration: 1.8,
				autoplay: true,
				loop: false,
			},
			{
				targets: ".we_text_effect78 .we_text",
				translateX: {
					value: [-500, 1],
					duration: 1000,
				},
				loop: false,
				opacity: [0, 1],
				duration: 1000,
				easing: "easeOutExpo",
				timeOffset: "-=1000",
			},
		],
		coloredBgs: [
			{
				name: "layer1",
				selector: ".Layer",
				background: "#f8783a",
			},
		],
	},
	{
		name: "we_text_effect86",
		html: `<div class="animationObject we_text_effect86">
            <div class="Layer Layer1"></div>
            <div class="textLayer">
                <div class="we_text">${constants.defaultText}</div>
            </div>
        </div>`,
		animeTimeline: [
			{
				targets: ".we_text_effect86 .Layer1",
				scaleY: {
					value: [0, 1],
					duration: 500,
				},
				easing: "linear",
				duration: 1.8,
				autoplay: true,
				loop: false,
			},
			{
				targets: ".we_text_effect86 .we_text",
				translateX: {
					value: [-150, 1],
				},
				loop: false,
				opacity: [0, 1],
				duration: 500,
				easing: "linear",
				delay: 500,
				timeOffset: "-=500",
			},
		],
		coloredBgs: [
			{
				name: "layer1",
				selector: ".Layer1",
				background: "#f8783a",
			},
		],
	},
	{
		name: "we_text_effect88",
		html: `<div class="animationObject we_text_effect88">
            <div class="Layer Layer1"></div>
            <div class="textLayer">
                <div class="we_text">${constants.defaultText}</div>
            </div>
        </div>`,
		animeTimeline: [
			{
				targets: ".we_text_effect88 .Layer1",
				scaleY: {
					value: [0, 1],
					duration: 500,
				},
				easing: "linear",
				duration: 1.8,
				autoplay: true,
				loop: false,
			},
			{
				targets: ".we_text_effect88 .we_text",
				translateX: {
					value: [150, 1],
				},
				loop: false,
				opacity: [0, 1],
				duration: 500,
				easing: "linear",
				delay: 500,
				timeOffset: "-=500",
			},
		],
		coloredBgs: [
			{
				name: "layer1",
				selector: ".Layer1",
				background: "#f8783a",
			},
		],
	},
	{
		name: "we_text_effect101",
		html: `<div class="animationObject we_text_effect101">
            <div class="Layer Layer1"></div>
            <div class="Layer Layer2"></div>
            <div class="Layer Layer3"></div>
            <div class="Layer Layer4 "></div>
            <div class="textLayer">
                <div class="we_text">${constants.defaultText}</div>
            </div>
        </div>`,
		animeTimeline: [
			{
				targets: ".we_text_effect101 .Layer2",
				scaleY: {
					value: [0, 1],
					duration: 200,
				},
				easing: "linear",
				duration: 1.8,
				autoplay: true,
				loop: false,
			},
			{
				targets: ".we_text_effect101 .Layer3",
				scaleX: {
					value: [0, 1],
					duration: 200,
				},
				easing: "linear",
				duration: 1.8,
				autoplay: true,
				loop: false,
				delay: 200,
				timeOffset: "-=200",
			},
			{
				targets: ".we_text_effect101 .Layer4",
				scaleY: {
					value: [0, 1],
					duration: 200,
				},
				easing: "linear",
				duration: 1.8,
				autoplay: true,
				loop: false,
				delay: 200,
				timeOffset: "-=200",
			},
			{
				targets: ".we_text_effect101 .Layer1",
				scaleX: {
					value: [0, 1],
					duration: 200,
				},
				easing: "linear",
				duration: 1.8,
				autoplay: true,
				loop: false,
				delay: 200,
				timeOffset: "-=200",
			},
			{
				targets: ".we_text_effect101 .we_text",
				left: ["100%", 0],
				loop: false,
				opacity: [0, 1],
				duration: 1000,
				easing: "easeOutExpo",
				delay: 200,
				timeOffset: "-=200",
			},
		],
		coloredBgs: [
			{
				name: "layer1",
				selector: ".Layer1, .Layer2, .Layer3, .Layer4",
				background: "#f8783a",
			},
		],
	},
	{
		name: "we_text_effect102",
		html: `<div class="animationObject we_text_effect102">
            <div class="Layer Layer1"></div>
            <div class="Layer Layer2"></div>
            <div class="Layer Layer3"></div>
            <div class="Layer Layer4 "></div>
            <div class="textLayer">
                <div class="we_text">${constants.defaultText}</div>
            </div>
        </div>`,
		animeTimeline: [
			{
				targets: ".we_text_effect102 .Layer2",
				scaleY: {
					value: [0, 1],
					duration: 200,
				},
				easing: "linear",
				duration: 1.8,
				autoplay: true,
				loop: false,
			},
			{
				targets: ".we_text_effect102 .Layer3",
				scaleX: {
					value: [0, 1],
					duration: 200,
				},
				easing: "linear",
				duration: 1.8,
				autoplay: true,
				loop: false,
				delay: 200,
				timeOffset: "-=200",
			},
			{
				targets: ".we_text_effect102 .Layer4",
				scaleY: {
					value: [0, 1],
					duration: 200,
				},
				easing: "linear",
				duration: 1.8,
				autoplay: true,
				loop: false,
				delay: 200,
				timeOffset: "-=200",
			},
			{
				targets: ".we_text_effect102 .Layer1",
				scaleX: {
					value: [0, 1],
					duration: 200,
				},
				easing: "linear",
				duration: 1.8,
				autoplay: true,
				loop: false,
				delay: 200,
				timeOffset: "-=200",
			},
			{
				targets: ".we_text_effect102 .we_text",
				left: ["-100%", 0],
				loop: false,
				opacity: [0, 1],
				duration: 1000,
				easing: "easeOutExpo",
				delay: 200,
				timeOffset: "-=200",
			},
		],
		coloredBgs: [
			{
				name: "layer1",
				selector: ".Layer1, .Layer2, .Layer3, .Layer4",
				background: "#f8783a",
			},
		],
	},
	{
		name: "we_text_effect103",
		html: `<div class="animationObject we_text_effect103">
            <div class="Layer Layer1"></div>
            <div class="Layer Layer2"></div>
            <div class="Layer Layer3"></div>
            <div class="Layer Layer4 "></div>
            <div class="textLayer">
                <div class="we_text">${constants.defaultText}</div>
            </div>
        </div>`,
		animeTimeline: [
			{
				targets: ".we_text_effect103 .Layer2",
				scaleY: {
					value: [0, 1],
					duration: 200,
				},
				easing: "linear",
				duration: 1.8,
				autoplay: true,
				loop: false,
			},
			{
				targets: ".we_text_effect103 .Layer3",
				scaleX: {
					value: [0, 1],
					duration: 200,
				},
				easing: "linear",
				duration: 1.8,
				autoplay: true,
				loop: false,
				delay: 200,
				timeOffset: "-=200",
			},
			{
				targets: ".we_text_effect103 .Layer4",
				scaleY: {
					value: [0, 1],
					duration: 200,
				},
				easing: "linear",
				duration: 1.8,
				autoplay: true,
				loop: false,
				delay: 200,
				timeOffset: "-=200",
			},
			{
				targets: ".we_text_effect103 .Layer1",
				scaleX: {
					value: [0, 1],
					duration: 200,
				},
				easing: "linear",
				duration: 1.8,
				autoplay: true,
				loop: false,
				delay: 200,
				timeOffset: "-=200",
			},
			{
				targets: ".we_text_effect103 .we_text",
				translateY: [-100, 0],
				loop: false,
				opacity: [0, 1],
				duration: 1000,
				easing: "easeOutBounce",
				delay: 200,
				timeOffset: "-=200",
			},
		],
		coloredBgs: [
			{
				name: "layer1",
				selector: ".Layer1, .Layer2, .Layer3, .Layer4",
				background: "#f8783a",
			},
		],
	},
	{
		name: "we_text_effect44",
		html: `<div class="animationObject we_text_effect44">
                <div class="we_text_effect44_inner">
                    <div class="layer1"></div>
                    <div class="layer2"></div>
                    <div class="textLayer">
                        <div class="we_text">${constants.defaultText}</div>
                    </div>
                </div>
        </div>`,
		animeTimeline: [
			{
				targets: ".we_text_effect44 .layer1",
				scaleX: [0, 1],
				loop: false,
				duration: 2000,
				easing: "easeOutExpo",
			},
			{
				targets: ".we_text_effect44 .layer2",
				scaleX: [0, 1],
				loop: false,
				duration: 2000,
				delay: 100,
				easing: "easeOutExpo",
				timeOffset: "-=2000",
			},
			{
				targets: ".we_text_effect44 .we_text",
				translateX: [-200, 0],
				loop: false,
				opacity: [0, 1],
				duration: 2000,
				delay: 500,
				easing: "easeOutExpo",
				timeOffset: "-=2000",
			},
		],
		coloredBgs: [
			{
				name: "layer1",
				selector: ".layer1",
				background: "#ff5722",
			},
			{
				name: "layer2",
				selector: ".layer2",
				background: "#353535",
			},
		],
	},
	{
		name: "we_text_effect183",
		html: `<div class="animationObject we_text_effect183">
                <div class="layer1"></div>
                <div class="textLayer">
                    <div class="we_text">${constants.defaultText}</div>
                </div>
        </div>`,
		animeTimeline: [
			{
				targets: ".we_text_effect183 .layer1",
				loop: false,
				top: ["-95%", "-95%"],
				scaleX: [0, 1],
				duration: 500,
				easing: "linear",
			},
			{
				targets: ".we_text_effect183 .layer1",
				loop: false,
				top: ["-95%", "0"],
				duration: 500,
				easing: "linear",
			},
			{
				targets: ".we_text_effect183 .layer1",
				loop: false,
				top: ["0", "100%"],
				duration: 500,
				easing: "linear",
			},
			{
				targets: ".we_text_effect183 .we_text",
				translateY: [-100, 0],
				opacity: [0, 1],
				loop: false,
				delay: 800,
				duration: 700,
				timeOffset: "-=1500",
				easing: "linear",
			},
		],
		coloredBgs: [
			{
				name: "layer1",
				selector: ".layer1",
				background: "#03a9f4",
			},
		],
	},
	{
		name: "we_text_effect37",
		html: `<div class="animationObject we_text_effect37">
                <div class="we_text_effect37_inner">
                    <div class="layer1"></div>
                    <div class="layer2"></div>
                    <div class="textLayer">
                        <div class="we_text">${constants.defaultText}</div>
                    </div>
                </div>
        </div>`,
		animeTimeline: [
			{
				targets: ".we_text_effect37 .layer1",
				scaleX: [0, 1],
				loop: false,
				duration: 2000,
				easing: "easeOutExpo",
			},
			{
				targets: ".we_text_effect37 .layer2",
				scaleX: [0, 1],
				loop: false,
				duration: 2000,
				delay: 100,
				easing: "easeOutExpo",
				timeOffset: "-=2000",
			},
			{
				targets: ".we_text_effect37 .we_text",
				translateX: [200, 0],
				loop: false,
				opacity: [0, 1],
				duration: 2000,
				delay: 500,
				easing: "easeOutExpo",
				timeOffset: "-=2000",
			},
		],
		coloredBgs: [
			{
				name: "layer1",
				selector: ".layer1",
				background: "#ff5722",
			},
			{
				name: "layer2",
				selector: ".layer2",
				background: "#353535",
			},
		],
	},
	{
		name: "we_text_effect9",
		html: `<div class="animationObject we_text_effect9">
                <div class="layer1"></div>
                <div class="textLayer">
                    <div class="we_text">${constants.defaultText}</div>
                </div>
        </div>`,
		animeTimeline: [
			{
				targets: ".we_text_effect9 .layer1",
				scale: {
					value: [0, 1],
				},
				width: ["0%", "100%"],
				easing: "easeOutExpo",
				duration: 1500,
				autoplay: true,
				loop: false,
			},
			{
				targets: ".we_text_effect9 .we_text",
				translateY: {
					value: [-60, 0],
					duration: 1500,
				},
				loop: false,
				opacity: [0, 1],
				duration: 1500,
				timeOffset: "-=1500",
				easing: "easeOutExpo",
				delay: 400,
			},
		],
		coloredBgs: [
			{
				name: "layer1",
				selector: ".layer1",
				background: "#f44336",
			},
		],
	},
	{
		name: "we_text_effect151",
		html: `<div class="animationObject we_text_effect151">
                <div class="we_text_effect151_inner">
                    <div class="layer1"></div>
                    <div class="textLayer">
                        <div class="we_text">Your text here</div>
                    </div>
                </div>
        </div>`,
		animeTimeline: [
			{
				targets: ".layer1",
				translateX: [400, 0],
				opacity: [0, 1],
				duration: 1000,
				easing: "easeOutExpo",
			},
			{
				targets: ".we_text",
				translateX: [-200, 0],
				opacity: [0, 1],
				duration: 1000,
				easing: "easeOutExpo",
				timeOffset: "-=800",
			},
		],
		coloredBgs: [
			{
				name: "layer1",
				selector: ".layer1",
				background: "#ff9800",
			},
		],
	},
	{
		name: "we_text_effect153",
		html: `<div class="animationObject we_text_effect153">
                <div class="we_text_effect153_inner">
                    <div class="layer1"></div>
                    <div class="textLayer">
                        <div class="we_text">Your text here</div>
                    </div>
                </div>
        </div>`,
		animeTimeline: [
			{
				targets: ".we_text_effect153 .layer1",
				translateX: [400, 0],
				opacity: [0, 1],
				loop: false,
				duration: 1000,
				easing: "easeOutExpo",
			},
			{
				targets: ".we_text_effect153 .we_text",
				translateX: [-200, 0],
				loop: false,
				opacity: [0, 1],
				duration: 1000,
				easing: "easeOutExpo",
				timeOffset: "-=800",
			},
		],
		coloredBgs: [
			{
				name: "layer1",
				selector: ".layer1",
				background: "#ff9800",
			},
		],
	},
	{
		name: "we_text_effect155",
		html: `<div class="animationObject we_text_effect155">
                <div class="we_text_effect155_inner">
                    <div class="layer1"></div>
                    <div class="textLayer">
                        <div class="we_text">Your text here</div>
                    </div>
                </div>
        </div>`,
		animeTimeline: [
			{
				targets: ".we_text_effect155 .layer1",
				translateX: [-400, 0],
				opacity: [0, 1],
				loop: false,
				duration: 1000,
				easing: "easeOutExpo",
			},
			{
				targets: ".we_text_effect155 .we_text",
				translateX: [200, 0],
				loop: false,
				opacity: [0, 1],
				duration: 1000,
				easing: "easeOutExpo",
				timeOffset: "-=800",
			},
		],
		coloredBgs: [
			{
				name: "layer1",
				selector: ".layer1",
				background: "#ff9800",
			},
		],
	},
	{
		name: "we_text_effect156",
		html: `<div class="animationObject we_text_effect156">
                <div class="we_text_effect156_inner">
                    <div class="layer1"></div>
                    <div class="textLayer">
                        <div class="we_text">Your text here</div>
                    </div>
                </div>
        </div>`,
		animeTimeline: [
			{
				targets: ".we_text_effect156 .layer1",
				translateX: [400, 0],
				opacity: [0, 1],
				loop: false,
				duration: 1000,
				easing: "easeOutExpo",
			},
			{
				targets: ".we_text_effect156 .we_text",
				translateX: [-200, 0],
				loop: false,
				opacity: [0, 1],
				duration: 1000,
				easing: "easeOutExpo",
				timeOffset: "-=800",
			},
		],
		coloredBgs: [
			{
				name: "layer1",
				selector: ".layer1",
				background: "#ff9800",
			},
		],
	},
	{
		name: "we_text_effect41",
		html: `<div class="animationObject we_text_effect41">
                <div class="we_text_effect41_inner">
                    <div class="layer1"></div>
                    <div class="layer2"></div>
                    <div class="textLayer">
                        <div class="we_text">${constants.defaultText}</div>
                    </div>
                </div>
        </div>`,
		animeTimeline: [
			{
				targets: ".we_text_effect41 .layer1",
				scaleX: [0, 1],
				loop: false,
				duration: 2000,
				easing: "easeOutExpo",
			},
			{
				targets: ".we_text_effect41 .layer2",
				scaleX: [0, 1],
				loop: false,
				duration: 2000,
				delay: 100,
				easing: "easeOutExpo",
				timeOffset: "-=2000",
			},
			{
				targets: ".we_text_effect41 .we_text",
				translateY: [100, 0],
				loop: false,
				opacity: [0, 1],
				duration: 2000,
				delay: 500,
				easing: "easeOutExpo",
				timeOffset: "-=2000",
			},
		],
		coloredBgs: [
			{
				name: "layer1",
				selector: ".layer1",
				background: "#ff5722",
			},
			{
				name: "layer2",
				selector: ".layer2",
				background: "#353535",
			},
		],
	},
	{
		name: "we_text_effect36",
		html: `<div class="animationObject we_text_effect36">
                <div class="we_text_effect36_inner">
                    <div class="layer1"></div>
                    <div class="layer2"></div>
                    <div class="textLayer">
                        <div class="we_text">${constants.defaultText}</div>
                    </div>
                </div>
        </div>`,
		animeTimeline: [
			{
				targets: ".we_text_effect36 .layer1",
				scaleX: [0, 1],
				loop: false,
				duration: 2000,
				easing: "easeOutExpo",
			},
			{
				targets: ".we_text_effect36 .layer2",
				scaleX: [0, 1],
				loop: false,
				duration: 2000,
				delay: 100,
				easing: "easeOutExpo",
				timeOffset: "-=2000",
			},
			{
				targets: ".we_text_effect36 .we_text",
				translateX: [-200, 0],
				loop: false,
				opacity: [0, 1],
				duration: 2000,
				delay: 500,
				easing: "easeOutExpo",
				timeOffset: "-=2000",
			},
		],
		coloredBgs: [
			{
				name: "layer1",
				selector: ".layer1",
				background: "#ff5722",
			},
			{
				name: "layer2",
				selector: ".layer2",
				background: "#353535",
			},
		],
	},
	{
		name: "we_text_effect192",
		html: `<div class="animationObject we_text_effect192">
                <div class="layer1"></div>
                <div class="textLayer">
                    <div class="we_text">${constants.defaultText}</div>
                </div>
        </div>`,
		animeTimeline: [
			{
				targets: ".layer1",
				width: ["15%", "15%"],
				rotate: [-180, 0],
				scale: [0, 1],
				duration: 500,
			},
			{
				targets: ".layer1",
				width: ["15%", "100%"],
				duration: 500,
			},
			{
				targets: ".we_text",
				scaleX: [0, 1],
				opacity: [0, 1],
				duration: 500,
				timeOffset: "-=500",
			},
		],
		coloredBgs: [
			{
				name: "layer1",
				selector: ".layer1",
				background: "#e92a52",
			},
		],
	},
	{
		name: "we_text_effect48",
		html: `<div class="animationObject we_text_effect48">
                <div class="we_text_effect48_inner">
                    <div class="layer1"></div>
                    <div class="layer2"></div>
                    <div class="textLayer">
                        <div class="we_text">${constants.defaultText}</div>
                    </div>
                </div>
        </div>`,
		animeTimeline: [
			{
				targets: ".we_text_effect48 .layer1",
				scaleX: [0, 1],
				loop: false,
				duration: 2000,
				easing: "easeOutExpo",
			},
			{
				targets: ".we_text_effect48 .layer2",
				scaleX: [0, 1],
				loop: false,
				duration: 2000,
				delay: 100,
				easing: "easeOutExpo",
				timeOffset: "-=2000",
			},
			{
				targets: ".we_text_effect48 .we_text",
				translateY: [100, 0],
				loop: false,
				opacity: [0, 1],
				duration: 2000,
				delay: 500,
				easing: "easeOutExpo",
				timeOffset: "-=2000",
			},
		],
		coloredBgs: [
			{
				name: "layer1",
				selector: ".layer1",
				background: "#ff5722",
			},
			{
				name: "layer2",
				selector: ".layer2",
				background: "#353535",
			},
		],
	},
	{
		name: "we_text_effect193",
		html: `<div class="animationObject we_text_effect193">
                <div class="layer1"></div>
                <div class="textLayer">
                    <div class="we_text">${constants.defaultText}</div>
                </div>
        </div>`,
		animeTimeline: [
			{
				targets: ".layer1",
				rotateX: [60, 60],
				translateY: [200, 0],
				duration: 500,
				easing: "linear",
			},
			{
				targets: ".layer1",
				top: ["18px", 0],
				rotateX: [60, 0],
				duration: 500,
				easing: "linear",
			},
			{
				targets: ".we_text",
				translateY: [-50, 0],
				opacity: [0, 1],
				duration: 500,
				easing: "linear",
				timeOffset: "-=500",
			},
		],
		coloredBgs: [
			{
				name: "layer1",
				selector: ".layer1",
				background: "#E92A52",
			},
		],
	},
	{
		name: "we_text_effect160",
		html: `<div class="animationObject we_text_effect160">
                <div class="layer1"></div>
                <div class="textLayer">
                    <div class="we_text">${constants.defaultText}</div>
                </div>
        </div>`,
		animeTimeline: [
			{
				targets: ".layer1",
				scaleX: [0.2, 0.8],
				rotateX: [0, 20],
				duration: 500,
				opacity: [0.6, 0.6],
			},
			{
				targets: ".layer1",
				scaleX: [0.8, 1],
				rotateX: [20, 180],
				duration: 700,
				opacity: [0.6, 1],
			},
			{
				targets: ".we_text",
				translateY: [50, 0],
				opacity: [0, 1],
				duration: 1000,
				easing: "easeOutExpo",
			},
		],
		coloredBgs: [
			{
				name: "layer1",
				selector: ".layer1",
				background: "#009688",
			},
		],
	},
];

textAnimation.map((val, index) => {
	val.id = index + 1;

	const applyProperties = function (data) {
		if (!data) return;
		let elem = this;
		let textElem = elem.querySelector(".we_text");

		textElem.innerText = data.text;
		textElem.style.color = data.color;
		textElem.style.textAlign = `${data.alignment}`;
		textElem.style.fontWeight = `${data.bold === "true" || data.bold === true ? "bold" : "normal"}`;
		textElem.style.fontStyle = `${data.italic === "true" || data.italic === true ? "italic" : "normal"}`;
		if (data.zIndex) {
			elem.style.zIndex = data.zIndex;
		}
		textElem.style.fontFamily = `${data.font}`;
		textElem.style.textDecoration = `${data.line ? data.line : "none"}`;
		for (let coloredBg of data.coloredBgs) {
			let bgLayers = elem.querySelectorAll(coloredBg.selector);
			bgLayers.forEach((e) => (e.style.background = coloredBg.background));
		}

		twemoji.parse(textElem, {
			folder: "svg",
			ext: ".svg",
		});

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
export default textAnimation;
