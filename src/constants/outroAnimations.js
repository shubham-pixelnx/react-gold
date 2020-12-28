import twemoji from "twemoji";
let outroAnimations = [
	{
		id: 1,
		name: "outro_simple",
		html: `<div class="outro-type outro-simple">
            <div class="outro-screen-cover"></div>
            <div class="outro-content">
                <div class="outro-logo">
                    <img src="" alt="" draggable="false" />
                </div>
                <div class="outro-brand-name">
                    <h1 class="brand-name-heading outro-brand-name-el"></h1>
                </div>
                <div class="outro-tagline">
                    <p class="outro-tagline-el"></p>
                </div>
                <div class="outro-website">
                    <p class="outro-website-el"></p>
                </div>
            </div>
        </div>`,
		animeTimeline: [
			{
				targets: ".outro-screen-cover",
				scaleX: {
					value: [0, 1],
					duration: 600,
				},
				easing: "easeOutQuart",
			},
			{
				targets: ".brand-name-heading",
				scale: {
					value: [0.5, 1],
				},
				opacity: {
					value: [0, 1],
				},
				translateY: {
					value: ["100%", "0%"],
				},
				duration: 800,
				easing: "easeOutElastic",
			},
			{
				targets: ".outro-tagline",
				opacity: {
					value: [0, 1],
				},
				translateY: {
					value: ["100%", "0%"],
				},
				duration: 800,
				easing: "easeOutElastic",
				timeOffset: "-=800",
			},
			{
				targets: ".outro-website",
				translateY: {
					value: ["100%", "0%"],
					duration: 200,
				},
				easing: "easeOutSine",
				timeOffset: "-=700",
			},
		],
	},
	{
		id: 2,
		name: "outro_10",
		html: `<div class="outro-type outro10">
            <div class="outro-screen-cover"></div>
            <div class="outro-content">
                <div class="outro-logo">
                    <img src="" alt="" draggable="false" />
                </div>
                <div class="outro-brand-text">
                    <h1 class="text1 outro-brand-name-el"></h1>
                    <p class="text2 outro-tagline-el"></p>
                    <p class="text3 outro-website-el"></p>
                    <div class="layer layer1"></div>
                    <div class="layer layer2"></div>
                    <div class="layer layer3"></div>
                    <div class="layer layer4"></div>
                    <div class="layer layer5"></div>
                    <div class="layer layer6"></div>
                    <div class="layer layer7"></div>
                    <div class="layer layer8"></div>
                </div>
            </div>
        </div>`,
		animeTimeline: [
			{
				targets: ".outro-screen-cover",
				scale: {
					value: [0, 5],
					duration: 800,
				},
				easing: "easeOutSine",
			},
			{
				targets: ".outro-logo",
				translateX: {
					value: ["100px", "0"],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 500,
				easing: "easeOutSine",
				timeOffset: "-=500",
			},
			{
				targets: ".text1",
				translateX: {
					value: ["-20", 0],
					duration: 400,
				},
				opacity: {
					value: [0, 1],
				},
				easing: "easeOutQuart",
				timeOffset: "-=300",
			},
			{
				targets: ".text2",
				translateX: {
					value: ["-20", 0],
					duration: 400,
				},
				opacity: {
					value: [0, 1],
				},
				easing: "easeOutQuart",
				timeOffset: "-=900",
			},
			{
				targets: ".text3",
				translateX: {
					value: ["-20", 0],
					duration: 400,
				},
				opacity: {
					value: [0, 1],
				},
				easing: "easeOutQuart",
				timeOffset: "-=1000",
			},
			{
				targets: ".layer1",
				left: {
					value: ["80%", "100%"],
					duration: 1000,
				},
				scaleX: {
					value: [1, 0],
					duration: 1000,
				},

				opacity: {
					value: [0, 1],
				},
				easing: "easeOutQuart",
				timeOffset: "-=1200",
			},
			{
				targets: ".layer2",
				left: {
					value: ["80%", "100%"],
					duration: 1000,
				},
				scaleX: {
					value: [1, 0],
					duration: 1000,
				},

				opacity: {
					value: [0, 1],
				},
				easing: "easeOutQuart",
				timeOffset: "-=1000",
			},
			{
				targets: ".layer3",
				left: {
					value: ["50%", "90%"],
					duration: 1000,
				},
				scaleX: {
					value: [1, 0],
					duration: 1000,
				},

				opacity: {
					value: [0, 1],
				},
				easing: "easeOutQuart",
				timeOffset: "-=1200",
			},
			{
				targets: ".layer4",
				left: {
					value: ["0%", "50%"],
					duration: 1000,
				},
				scaleX: {
					value: [1, 0],
					duration: 1000,
				},

				opacity: {
					value: [0, 1],
				},
				easing: "easeOutQuart",
				timeOffset: "-=1200",
			},
			{
				targets: ".layer5",
				left: {
					value: ["50%", "100%"],
					duration: 1000,
				},
				scaleX: {
					value: [1, 0],
					duration: 1000,
				},

				opacity: {
					value: [0, 1],
				},
				easing: "easeOutQuart",
				timeOffset: "-=1200",
			},
			{
				targets: ".layer6",
				right: {
					value: ["0%", "90%"],
					duration: 1000,
				},
				scaleX: {
					value: [1, 0],
					duration: 1000,
				},

				opacity: {
					value: [0, 1],
				},
				easing: "easeOutQuart",
				timeOffset: "-=1200",
			},
			{
				targets: ".layer7",
				right: {
					value: ["20%", "60%"],
					duration: 1000,
				},
				scaleX: {
					value: [1, 0],
					duration: 1000,
				},

				opacity: {
					value: [0, 1],
				},
				easing: "easeOutQuart",
				timeOffset: "-=1200",
			},
			{
				targets: ".layer8",
				right: {
					value: ["80%", "90%"],
					duration: 1000,
				},
				scaleX: {
					value: [1, 0],
					duration: 1000,
				},

				opacity: {
					value: [0, 1],
				},
				easing: "easeOutQuart",
				timeOffset: "-=1200",
			},
		],
	},
	{
		id: 4,
		name: "outro_7",
		html: `<div class="outro-type outro7">
            <div class="outro-screen-cover"></div>
            <div class="outro-content">
                <div class="outro-logo">
                    <img src="" alt="" draggable="false" />
                </div>
                <div class="outro-brand-text">
                    <h1 class="text1 outro-brand-name-el">YOUTUBE.COM/ENVATO</h1>
                    <p class="text2 outro-tagline-el">premiere pro 2019 (13.15) or above</p>
                    <p class="text3 outro-website-el">www.website.com</p>
                </div>
            </div>
        </div>`,
		animeTimeline: [
			{
				targets: ".outro-type.outro7 .outro-screen-cover",
				scale: {
					value: [0, 5],
					duration: 800,
				},
				easing: "easeOutSine",
			},
			{
				targets: ".outro-type.outro7 .outro-logo",
				translateX: {
					value: ["100px", "0"],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 500,
				easing: "easeOutSine",
				timeOffset: "-=200",
			},
			{
				targets: ".outro-type.outro7 .text1",
				translateY: {
					value: ["20", 0],
					duration: 400,
				},
				opacity: {
					value: [0, 1],
				},
				easing: "easeOutSine",
				timeOffset: "-=300",
			},
			{
				targets: ".outro-type.outro7 .text2",
				translateY: {
					value: ["20", 0],
					duration: 400,
				},
				opacity: {
					value: [0, 1],
				},
				easing: "easeOutSine",
				timeOffset: "-=900",
			},
			{
				targets: ".outro-type.outro7 .text3",
				translateY: {
					value: ["20", 0],
					duration: 400,
				},
				opacity: {
					value: [0, 1],
				},
				easing: "easeOutSine",
				timeOffset: "-=900",
			},
		],
	},
	{
		id: 3,
		name: "outro_11",
		html: `<div class="outro-type outro11">
            <div class="outro-screen-cover"></div>
            <div class="outro-content">
                <div class="outro-logo">
                    <img src="" alt="" draggable="false" />
                </div>
                <div class="outro-brand-name">
                    <h1 class="brand-name-heading outro-brand-name-el"></h1>
                </div>
                <div class="outro-brand-text">
                    <p class="text text1 outro-tagline-el">Your</p>
                    <p class="text text2 outro-website-el">Server</p>
                </div>
            </div>
        </div>`,
		animeTimeline: [
			{
				targets: ".outro-logo",
				translateY: {
					value: ["500px", "-200px"],
				},
				rotateY: {
					value: ["90", "0"],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 1000,
				easing: "easeOutQuart",
			},
			{
				targets: ".outro-logo",
				translateY: {
					value: ["-200px", "0"],
				},
				duration: 1000,
				easing: "easeOutBounce",
				timeOffset: "-=100",
			},
			{
				targets: ".outro-logo",
				rotateY: {
					value: ["0", "360"],
				},
				duration: 1000,
				easing: "easeOutBounce",
			},
			{
				targets: ".outro-screen-cover",
				scale: {
					value: [0, 5],
					duration: 2000,
				},
				easing: "easeOutSine",
				timeOffset: "-=500",
			},
			{
				targets: ".brand-name-heading",
				translateY: {
					value: ["25px", "0"],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=2000",
			},
			{
				targets: ".text1",
				translateX: {
					value: ["-5px", "0"],
				},
				opacity: [0, 1],
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=2000",
			},
			{
				targets: ".text2",
				translateX: {
					value: ["-5px", "0"],
				},
				opacity: [0, 1],
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=1800",
			},
		],
	},
	{
		id: 5,
		name: "outro15",
		html: `<div class="outro-type outro15">
            <div class="outro-screen-cover"></div>
            <div class="outro-content">
                <div class="outro-brand-shap">
                    <div class="outro-logo">
                        <img src="1.png" alt="" class="outro-logo-icon">
                    </div>
                </div>
                <div class="outro-brand-name">
                    <h1 class="brand-name-heading outro-brand-name-el">Your Comapny</h1>
                </div>
                <div class="outro-brand-text">
                    <p class="text text1 outro-tagline-el">Your Server Name</p>
                </div>
            </div>
        </div>`,
		animeTimeline: [
			{
				targets: ".outro-brand-shap",
				translateY: {
					value: ["40", "40"],
				},
				scale: {
					value: ["0", "1"],
				},
				duration: 1500,
				easing: "easeOutElastic",
			},
			{
				targets: ".outro-logo",
				scale: {
					value: ["0", "1"],
				},
				duration: 1500,
				easing: "easeOutElastic",
				timeOffset: "-=1000",
			},
			{
				targets: ".outro-brand-shap",
				translateY: {
					value: ["40", "0"],
				},
				rotateY: {
					value: ["00", "360"],
				},
				duration: 500,
				easing: "easeOutSine",
				timeOffset: "-=1000",
			},
			{
				targets: ".outro-screen-cover",
				scale: {
					value: [0, 5],
					duration: 2000,
				},
				easing: "easeOutSine",
				timeOffset: "-=1000",
			},
			{
				targets: ".brand-name-heading",
				translateY: {
					value: ["25px", "0"],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=2000",
			},
			{
				targets: ".text1",
				translateX: {
					value: ["-5px", "0"],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=1500",
			},
		],
	},
	{
		id: 6,
		name: "outro16",
		html: `<div class="outro-type outro16">
                    <div class="outro-screen-cover"></div>
                    <div class="outro-screen-cover1"></div>
                    <div class="outro-content">
                        <div class="outro-brand-shap">
                            <div class="outro-logo">
                                <img src="1.png" alt="" class="outro-logo-icon">
                            </div>
                        </div>
                        <div class="outro-brand-name">
                            <h1 class="brand-name-heading outro-brand-name-el">Your Comapny</h1>
                        </div>
                        <div class="outro-brand-text">
                            <p class="text text1 outro-tagline-el">Your Server Name</p>
                        </div>
                    </div>
                </div>`,
		animeTimeline: [
			{
				targets: ".outro-screen-cover",
				scaleX: {
					value: ["0", "1"],
				},
				duration: 300,
				easing: "linear",
			},
			{
				targets: ".outro-screen-cover1",
				scaleX: {
					value: ["0", "1"],
				},
				duration: 300,
				easing: "linear",
				timeOffset: "-=200",
			},
			{
				targets: ".outro-screen-cover",
				height: {
					value: ["5%", "100%"],
				},
				rotate: {
					value: ["0", "180"],
				},
				duration: 500,
				easing: "linear",
			},
			{
				targets: ".outro-screen-cover1",
				height: {
					value: ["4%", "100%"],
				},
				rotate: {
					value: ["0", "180"],
				},
				duration: 500,
				easing: "linear",
				timeOffset: "-=400",
			},
			{
				targets: ".outro-brand-shap",
				translateY: {
					value: ["40", "40"],
				},
				scale: {
					value: ["0", "1.1"],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=1000",
			},
			{
				targets: ".outro-brand-shap",
				scale: {
					value: ["1.1", "1"],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=400",
			},
			{
				targets: ".outro-brand-shap",
				translateY: {
					value: ["40", "0"],
				},
				duration: 1000,
				easing: "easeOutElastic",
				timeOffset: "-=300",
			},
			{
				targets: ".brand-name-heading",
				translateY: {
					value: ["25px", "0"],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 500,
				easing: "easeOutElastic",
				timeOffset: "-=800",
			},
			{
				targets: ".text1",
				translateX: {
					value: ["-5px", "0"],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=500",
			},
		],
	},
	{
		id: 7,
		name: "outro17",
		html: `<div class="outro-type outro17">
                <div class="outro-content">
                        <div class="outro-logo">
                            <img src="1.png" alt="" class="outro-logo-icon">
                        </div>
                    <div class="outro-brand-name">
                        <h1 class="brand-name-heading outro-brand-name-el">Motion Array</h1>
                    </div>
                    <div class="outro-brand-text">
                        <p class="text text1 outro-tagline-el">WWW.motionarrary.com</p>
                    </div>
                </div>
            </div>`,
		animeTimeline: [
			{
				targets: ".outro-logo",
				opacity: {
					value: [0, 1],
				},
				translateY: {
					value: ["-5px", "0"],
				},
				scale: {
					value: ["0", "1"],
				},
				duration: 1500,
				easing: "easeOutElastic",
			},
			{
				targets: ".brand-name-heading",
				translateY: {
					value: ["5px", "0"],
				},
				scale: {
					value: ["0", "1"],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 1500,
				easing: "easeOutElastic",
				timeOffset: "-=1500",
			},
			{
				targets: ".text1",
				translateY: {
					value: ["5px", "0"],
				},
				scale: {
					value: ["0", "1"],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 1500,
				easing: "easeOutElastic",
				timeOffset: "-=1500",
			},
		],
	},
	{
		id: 8,
		name: "outro18",
		html: `<div class="outro-type outro18">
                <div class="outro-screen-cover"></div>
                <div class="outro-content">
                    <div class="outro-shap"></div>
                    <div class="outro-shap2"></div>
                    <div class="outro-circle_wrap">
                        <div class="outro-circle1 circle"></div>
                        <div class="outro-circle2 circle"></div>
                        <div class="outro-circle3 circle"></div>
                    </div>
                    <div class="outro-brand-text">
                        <div class="outro-logo outro-brand-logo">
                            <img src="1.png" alt=""/>
                        </div>
                        <h1 class="text1 outro-brand-name-el">Sound FX included</h1>
                        <h5 class="text2 outro-tagline-el">Another text here</h5>
                    </div>
                </div>
            </div>`,
		animeTimeline: [
			{
				targets: ".outro-shap",
				translateX: {
					value: [0, "300"],
				},
				duration: 500,
				easing: "easeOutSine",
			},
			{
				targets: ".outro-shap2",
				translateX: {
					value: [0, "-300"],
				},
				duration: 500,
				easing: "easeOutSine",
				timeOffset: "-=500",
			},
			{
				targets: ".outro-shap",
				translateX: {
					value: ["300", 0],
				},
				duration: 200,
				easing: "easeOutSine",
			},
			{
				targets: ".outro-shap2",
				translateX: {
					value: ["-300", 0],
				},
				duration: 200,
				easing: "easeOutSine",
				timeOffset: "-=200",
			},
			{
				targets: ".outro-screen-cover",
				scale: {
					value: [0, 5],
					duration: 2000,
				},
				easing: "easeOutSine",
			},
			{
				targets: ".outro-circle1",
				scale: {
					value: [0, 1],
				},
				duration: 500,
				easing: "linear",
				timeOffset: "-=2000",
			},
			{
				targets: ".outro-circle3",
				scale: {
					value: [0, 1],
				},
				duration: 800,
				easing: "easeOutBack",
				timeOffset: "-=1900",
			},
			{
				targets: ".outro-circle2",
				scale: {
					value: [0, 1],
				},
				duration: 500,
				easing: "easeOutSine",
				timeOffset: "-=1800",
			},
			{
				targets: ".outro-circle3",
				scale: {
					value: [1, 0],
				},
				duration: 200,
				easing: "easeOutSine",
				timeOffset: "-=1100",
			},
			{
				targets: ".outro-brand-logo",
				scale: {
					value: [0, 1],
				},
				translateY: {
					value: ["10px", "0px"],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 2000,
				easing: "easeOutElastic",
				timeOffset: "-=1000",
			},
			{
				targets: ".text1",
				translateY: {
					value: ["10px", "0px"],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 800,
				easing: "easeOutElastic",
				timeOffset: "-=1300",
			},
			{
				targets: ".text2",
				translateY: {
					value: ["10px", "0px"],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 800,
				easing: "easeOutElastic",
				timeOffset: "-=1000",
			},
		],
	},
	{
		id: 9,
		name: "outro19",
		html: `<div class="outro-type outro19">
                <div class="outro-content">
                    <div class="outro-shap-left">
                        <div class="outro-shap shap1"></div>
                        <div class="outro-shap shap2"></div>
                        <div class="outro-shap shap3"></div>
                    </div>
                    <div class="outro-shap-right">
                        <div class="outro-shap shap3"></div>
                        <div class="outro-shap shap2"></div>
                        <div class="outro-shap shap1"></div>
                    </div>
                    <div class="outro-brand-shap">
                        <div class="outro-logo">
                            <img src="1.png" alt="" class="outro-logo-icon">
                        </div>
                    </div>
                    <div class="outro-brand-name">
                        <h1 class="brand-name-heading outro-brand-name-el">MOTHIONARRAY.COM</h1>
                    </div>
                    <div class="outro-brand-text">
                        <p class="text text1 outro-tagline-el">TWITTER.COM/MOTHIONARRAY.COM</p>
                    </div>
                </div>
            </div>`,
		animeTimeline: [
			{
				targets: ".shap3",
				translateY: {
					value: ["-20px", "0"],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 300,
				easing: "linear",
			},
			{
				targets: ".shap3",
				translateY: {
					value: ["-40px", "0"],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 300,
				easing: "linear",
				timeOffset: "-=300",
			},
			{
				targets: ".shap2",
				translateY: {
					value: ["-30px", "0"],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 300,
				easing: "linear",
				timeOffset: "-=250",
			},
			{
				targets: ".outro-shap-right .shap2",
				translateY: {
					value: ["-30px", "0"],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 300,
				easing: "linear",
				timeOffset: "-=250",
			},
			{
				targets: ".shap1",
				translateY: {
					value: ["-40px", "0"],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 300,
				easing: "linear",
				timeOffset: "-=250",
			},
			{
				targets: ".outro-shap-right .shap1",
				translateY: {
					value: ["-20px", "0"],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 300,
				easing: "linear",
				timeOffset: "-=250",
			},
			{
				targets: ".outro-shap-left",
				left: {
					value: ["0", "50%"],
				},
				duration: 500,
				easing: "easeOutQuart",
			},
			{
				targets: ".outro-shap-right",
				right: {
					value: ["0", "50%"],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=500",
			},
			{
				targets: ".outro-brand-shap",
				scale: {
					value: ["0", "1"],
				},
				duration: 1500,
				easing: "easeOutElastic",
				timeOffset: "-=400",
			},
			{
				targets: ".outro-logo",
				scale: {
					value: ["0", "1"],
				},
				duration: 1500,
				easing: "easeOutElastic",
				timeOffset: "-=1000",
			},
			{
				targets: ".outro-screen-cover",
				scale: {
					value: [0, 5],
					duration: 2000,
				},
				easing: "easeOutSine",
				timeOffset: "-=1000",
			},
			{
				targets: ".brand-name-heading",
				translateY: {
					value: ["-20px", "0"],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=1500",
			},
			{
				targets: ".text1",
				translateY: {
					value: ["20px", "0"],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=1500",
			},
		],
	},
	{
		id: 10,
		name: "outro20",
		html: `<div class="outro-type outro20">
                <div class="outro-content">
                    <div class="outro-shap-left">
                        <div class="outro-shap shap1"></div>
                        <div class="outro-shap shap2"></div>
                        <div class="outro-shap shap3"></div>
                    </div>
                    <div class="outro-shap-right">
                        <div class="outro-shap shap3"></div>
                        <div class="outro-shap shap2"></div>
                        <div class="outro-shap shap1"></div>
                    </div>
                    <div class="outro-logo">
                            <img src="1.png" alt="" class="outro-logo-icon">
                        </div>
                    <div class="outro-brand-name">
                        <h1 class="brand-name-heading outro-brand-name-el">MOTHIONARRAY.COM</h1>
                    </div>
                    <div class="outro-brand-text">
                        <p class="text text1 outro-tagline-el">TWITTER.COM/MOTHIONARRAY.COM</p>
                    </div>
                </div>
            </div>`,
		animeTimeline: [
			{
				targets: ".shap3",
				translateY: {
					value: ["-20px", "0"],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 300,
				easing: "linear",
			},
			{
				targets: ".shap3",
				translateY: {
					value: ["-40px", "0"],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 300,
				easing: "linear",
				timeOffset: "-=300",
			},
			{
				targets: ".shap2",
				translateY: {
					value: ["-30px", "0"],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 300,
				easing: "linear",
				timeOffset: "-=250",
			},
			{
				targets: ".outro-shap-right .shap2",
				translateY: {
					value: ["-30px", "0"],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 300,
				easing: "linear",
				timeOffset: "-=250",
			},
			{
				targets: ".shap1",
				translateY: {
					value: ["-40px", "0"],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 300,
				easing: "linear",
				timeOffset: "-=250",
			},
			{
				targets: ".outro-shap-right .shap1",
				translateY: {
					value: ["-20px", "0"],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 300,
				easing: "linear",
				timeOffset: "-=250",
			},
			{
				targets: ".outro-shap-left",
				left: {
					value: ["0", "50%"],
				},
				opacity: {
					value: [1, 0],
				},
				duration: 500,
				easing: "easeOutQuart",
			},
			{
				targets: ".outro-shap-right",
				right: {
					value: ["0", "50%"],
				},
				opacity: {
					value: [1, 0],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=500",
			},
			{
				targets: ".outro-logo",
				scale: {
					value: ["0", "1"],
				},
				duration: 1500,
				easing: "easeOutElastic",
				timeOffset: "-=500",
			},
			{
				targets: ".brand-name-heading",
				translateY: {
					value: ["-20px", "0"],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=1200",
			},
			{
				targets: ".text1",
				translateY: {
					value: ["20px", "0"],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=1200",
			},
		],
	},
	{
		id: 11,
		name: "outro21",
		html: `<div class="outro-type outro21">
                <div class="outro-content">
                    <div class="outro-shap-left">
                        <div class="outro-shap shap1"></div>
                        <div class="outro-shap shap2"></div>
                        <div class="outro-shap shap3"></div>
                    </div>
                    <div class="outro-shap-right">
                        <div class="outro-shap shap3"></div>
                        <div class="outro-shap shap2"></div>
                        <div class="outro-shap shap1"></div>
                    </div>
                    <div class="outro-brand-shap">
                        <div class="outro-logo">
                            <img src="1.png" alt="" class="outro-logo-icon">
                        </div>
                    </div>
                    <div class="outro-brand-name ">
                        <h1 class="brand-name-heading outro-brand-name-el">MOTHIONARRAY.COM</h1>
                    </div>
                    <div class="outro-brand-text">
                        <p class="text text1 outro-tagline-el">TWITTER.COM/MOTHIONARRAY.COM</p>
                    </div>
                </div>
            </div>`,
		animeTimeline: [
			{
				targets: ".shap3",
				translateY: {
					value: ["-20px", "0"],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 300,
				easing: "linear",
			},
			{
				targets: ".shap3",
				translateY: {
					value: ["-40px", "0"],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 300,
				easing: "linear",
				timeOffset: "-=300",
			},
			{
				targets: ".shap2",
				translateY: {
					value: ["-30px", "0"],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 300,
				easing: "linear",
				timeOffset: "-=250",
			},
			{
				targets: ".outro-shap-right .shap2",
				translateY: {
					value: ["-30px", "0"],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 300,
				easing: "linear",
				timeOffset: "-=250",
			},
			{
				targets: ".shap1",
				translateY: {
					value: ["-40px", "0"],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 300,
				easing: "linear",
				timeOffset: "-=250",
			},
			{
				targets: ".outro-shap-right .shap1",
				translateY: {
					value: ["-20px", "0"],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 300,
				easing: "linear",
				timeOffset: "-=250",
			},
			{
				targets: ".outro-shap-left",
				left: {
					value: ["0", "50%"],
				},
				opacity: {
					value: [1, 0],
				},
				duration: 500,
				easing: "easeOutQuart",
			},
			{
				targets: ".outro-shap-right",
				right: {
					value: ["0", "50%"],
				},
				opacity: {
					value: [1, 0],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=500",
			},
			{
				targets: ".outro-brand-shap",
				rotate: {
					value: ["45", "45"],
				},
				scale: {
					value: ["0", "1"],
				},
				duration: 1500,
				easing: "easeOutElastic",
				timeOffset: "-=400",
			},
			{
				targets: ".outro-logo",
				rotate: {
					value: "-45",
				},
				scale: {
					value: ["0", "1"],
				},
				duration: 1500,
				easing: "easeOutElastic",
				timeOffset: "-=1500",
			},
			{
				targets: ".outro-screen-cover",
				scale: {
					value: [0, 5],
					duration: 2000,
				},
				easing: "easeOutSine",
				timeOffset: "-=1000",
			},
			{
				targets: ".brand-name-heading",
				translateY: {
					value: ["-20px", "0"],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=1500",
			},
			{
				targets: ".text1",
				translateY: {
					value: ["20px", "0"],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=1500",
			},
		],
	},
	{
		id: 12,
		name: "outro22",
		html: `<div class="outro-type outro22">
                <div class="outro-screen-cover"></div>
                <div class="outro-content">
                    <div class="outro-logo">
                        <img src="1.png" alt=""/>
                        <div class="outro-logo-shap"></div>
                    </div>
                <div class="outro-brand-text">
                    <h1 class="text1 outro-brand-name-el">MOTION ARRAY</h1>
                    <p class="text2 outro-tagline-el">www.motionarray.com</p>
                    <div class="layer layer1"></div>
                    <div class="layer layer2"></div>
                    <div class="layer layer3"></div>
                    <div class="layer layer4"></div>
                    <div class="layer layer5"></div>
                    <div class="layer layer6"></div>
                    <div class="layer layer7"></div>
                    <div class="layer layer8"></div>
                </div>
                </div>
            </div>`,
		animeTimeline: [
			{
				targets: ".outro-screen-cover",
				scale: {
					value: [0, 5],
					duration: 800,
				},
				easing: "easeOutSine",
			},
			{
				targets: ".outro-logo",
				translateX: {
					value: ["200px", "200px"],
				},
				scale: {
					value: [0, 1],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 400,
				easing: "easeOutSine",
				timeOffset: "-=800",
			},
			{
				targets: ".outro-logo-shap",
				translateY: {
					value: ["200px", "0"],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 300,
				easing: "easeOutSine",
				timeOffset: "-=400",
			},
			{
				targets: ".outro-logo",
				translateX: {
					value: ["200px", "0"],
				},
				duration: 500,
				easing: "easeOutSine",
				timeOffset: "+=500",
			},
			{
				targets: ".text1",
				translateX: {
					value: ["-20", 0],
					duration: 400,
				},
				opacity: {
					value: [0, 1],
				},
				easing: "easeOutQuart",
				timeOffset: "-=200",
			},
			{
				targets: ".text2",
				translateX: {
					value: ["-20", 0],
					duration: 400,
				},
				opacity: {
					value: [0, 1],
				},
				easing: "easeOutQuart",
				timeOffset: "-=1000",
			},
			{
				targets: ".layer1",
				left: {
					value: ["80%", "100%"],
					duration: 1000,
				},
				scaleX: {
					value: [1, 0],
					duration: 1000,
				},

				opacity: {
					value: [0, 1],
				},
				easing: "easeOutQuart",
				timeOffset: "-=1200",
			},
			{
				targets: ".layer2",
				left: {
					value: ["80%", "100%"],
					duration: 1000,
				},
				scaleX: {
					value: [1, 0],
					duration: 1000,
				},

				opacity: {
					value: [0, 1],
				},
				easing: "easeOutQuart",
				timeOffset: "-=1000",
			},
			{
				targets: ".layer3",
				left: {
					value: ["50%", "90%"],
					duration: 1000,
				},
				scaleX: {
					value: [1, 0],
					duration: 1000,
				},

				opacity: {
					value: [0, 1],
				},
				easing: "easeOutQuart",
				timeOffset: "-=1200",
			},
			{
				targets: ".layer4",
				left: {
					value: ["0%", "50%"],
					duration: 1000,
				},
				scaleX: {
					value: [1, 0],
					duration: 1000,
				},
				opacity: {
					value: [0, 1],
				},
				easing: "easeOutQuart",
				timeOffset: "-=1200",
			},
			{
				targets: ".layer5",
				left: {
					value: ["50%", "100%"],
					duration: 1000,
				},
				scaleX: {
					value: [1, 0],
					duration: 1000,
				},

				opacity: {
					value: [0, 1],
				},
				easing: "easeOutQuart",
				timeOffset: "-=1200",
			},
			{
				targets: ".layer6",
				right: {
					value: ["0%", "90%"],
					duration: 1000,
				},
				scaleX: {
					value: [1, 0],
					duration: 1000,
				},

				opacity: {
					value: [0, 1],
				},
				easing: "easeOutQuart",
				timeOffset: "-=1200",
			},
			{
				targets: ".layer7",
				right: {
					value: ["20%", "60%"],
					duration: 1000,
				},
				scaleX: {
					value: [1, 0],
					duration: 1000,
				},

				opacity: {
					value: [0, 1],
				},
				easing: "easeOutQuart",
				timeOffset: "-=1200",
			},
			{
				targets: ".layer8",
				right: {
					value: ["80%", "90%"],
					duration: 1000,
				},
				scaleX: {
					value: [1, 0],
					duration: 1000,
				},

				opacity: {
					value: [0, 1],
				},
				easing: "easeOutQuart",
				timeOffset: "-=1200",
			},
		],
	},
	{
		id: 13,
		name: "outro23",
		html: `<div class="outro-type outro23">
                <div class="outro-content">
                    <div class="outro-brand-wrap">
                        <div class="outro-brand-shap">
                            <div class="outro-logo">
                                <img src="1.png" alt="">
                            </div>
                        </div>
                        <div class="outro-shap shap1"></div>
                        <div class="outro-shap shap2"></div>
                        <div class="outro-shap shap3"></div>
                        <div class="outro-shap shap4"></div>
                    </div>
                    <div class="outro-brand-name">
                        <h1 class="brand-name-heading outro-brand-name-el">MOTHIONARRAY.COM</h1>
                    </div>
                    <div class="outro-brand-text">
                        <p class="text text1 outro-tagline-el">TWITTER.COM/MOTHIONARRAY.COM</p>
                    </div>
                </div>
            </div>`,
		animeTimeline: [
			{
				targets: ".shap1",
				translateY: {
					value: ["-130px", "-130px"],
				},
				scale: {
					value: ["0", "1"],
				},
				duration: 1000,
				easing: "easeOutElastic",
			},
			{
				targets: ".shap2",
				translateY: {
					value: ["130px", "130px"],
				},
				scale: {
					value: ["0", "1"],
				},
				duration: 1000,
				easing: "easeOutElastic",
				timeOffset: "-=800",
			},
			{
				targets: ".shap3",
				translateX: {
					value: ["-130px", "-130px"],
				},
				scale: {
					value: ["0", "1"],
				},
				duration: 1000,
				easing: "easeOutElastic",
				timeOffset: "-=800",
			},
			{
				targets: ".shap4",
				translateX: {
					value: ["130px", "130px"],
				},
				scale: {
					value: ["0", "1"],
				},
				duration: 1000,
				easing: "easeOutElastic",
				timeOffset: "-=800",
			},
			{
				targets: ".shap1",
				translateY: {
					value: ["-130px", "0"],
				},
				duration: 500,
				easing: "easeInOutBack",
				timeOffset: "-=500",
			},
			{
				targets: ".shap2",
				translateY: {
					value: ["130px", "0"],
				},
				duration: 500,
				easing: "easeInOutBack",
				timeOffset: "-=500",
			},
			{
				targets: ".outro-brand-shap",
				scale: {
					value: ["0", "1"],
				},
				duration: 1500,
				easing: "easeOutElastic",
				timeOffset: "-=200",
			},
			{
				targets: ".shap3",
				translateX: {
					value: ["-130px", "0"],
				},
				duration: 500,
				easing: "easeInOutBack",
				timeOffset: "-=1200",
			},
			{
				targets: ".shap4",
				translateX: {
					value: ["130px", "0"],
				},
				duration: 500,
				easing: "easeInOutBack",
				timeOffset: "-=1200",
			},
			{
				targets: ".outro-logo",
				scale: {
					value: ["0", "1"],
				},
				duration: 1500,
				easing: "easeOutElastic",
				timeOffset: "-=1000",
			},
			{
				targets: ".brand-name-heading",
				translateY: {
					value: ["-20px", "0"],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=1500",
			},
			{
				targets: ".text1",
				translateY: {
					value: ["20px", "0"],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=1500",
			},
		],
	},
	{
		id: 14,
		name: "outro24",
		html: `<div class="outro-type outro24">
                <div class="outro-screen-cover screen-cover1"></div>
                <div class="outro-screen-cover screen-cover2"></div>
                <div class="outro-content">
                    <div class="outro-circle_wrap">
                        <div class="outro-circle1 circle"></div>
                        <div class="outro-circle2 circle"></div>
                        <div class="outro-circle3 circle"></div>
                    </div>
                    <div class="outro-shap shap1"></div>
                    <div class="outro-shap shap2"></div>
                    <div class="outro-shap shap3"></div>
                    <div class="outro-shap shap4"></div>
                    <div class="outro-brand-text">
                        <div class="outro-brand-logo outro-logo">
                            <img src="1.png" alt=""/>
                        </div>
                        <h1 class="text1 outro-brand-name-el">motionarray.com</h1>
                        <h5 class="text2 outro-tagline-el">Some text here</h5>
                    </div>
                </div>
            </div>`,
		animeTimeline: [
			{
				targets: ".screen-cover1",
				scale: {
					value: [5, 0],
					duration: 500,
				},
				easing: "easeOutSine",
			},
			{
				targets: ".shap1",
				translateY: {
					value: ["0", "-130px"],
				},
				duration: 800,
				easing: "easeOutElastic",
				timeOffset: "-=100",
			},
			{
				targets: ".shap2",
				translateY: {
					value: ["0", "130px"],
				},
				duration: 800,
				easing: "easeOutElastic",
				timeOffset: "-=800",
			},
			{
				targets: ".shap3",
				translateX: {
					value: ["0", "-130px"],
				},

				duration: 800,
				easing: "easeOutElastic",
				timeOffset: "-=800",
			},
			{
				targets: ".shap4",
				translateX: {
					value: ["0", "130px"],
				},
				duration: 800,
				easing: "easeOutElastic",
				timeOffset: "-=800",
			},
			{
				targets: ".outro-circle1",
				scale: {
					value: [0, 1],
				},
				duration: 400,
				easing: "linear",
				timeOffset: "-=800",
			},
			{
				targets: ".outro-circle2",
				scale: {
					value: [0, 1],
				},
				duration: 600,
				easing: "linear",
				timeOffset: "-=700",
			},
			{
				targets: ".shap1",
				translateY: {
					value: ["-130px", "0"],
				},
				scale: {
					value: ["1", "0"],
				},
				duration: 800,
				easing: "easeOutQuart",
				timeOffset: "-=100",
			},
			{
				targets: ".shap2",
				translateY: {
					value: ["130px", "0"],
				},
				scale: {
					value: ["1", "0"],
				},
				duration: 800,
				easing: "easeOutQuart",
				timeOffset: "-=800",
			},
			{
				targets: ".shap3",
				translateX: {
					value: ["-130px", "0"],
				},
				scale: {
					value: ["1", "0"],
				},
				duration: 800,
				easing: "easeOutQuart",
				timeOffset: "-=800",
			},
			{
				targets: ".shap4",
				translateX: {
					value: ["130px", "0"],
				},
				scale: {
					value: ["1", "0"],
				},
				duration: 800,
				easing: "easeOutQuart",
				timeOffset: "-=800",
			},
			{
				targets: ".outro-circle3",
				scale: {
					value: [0, 1],
				},
				duration: 1000,
				easing: "easeOutElastic",
				timeOffset: "-=700",
			},
			{
				targets: ".outro-circle3",
				scale: {
					value: [1, 0],
				},
				duration: 300,
				easing: "easeOutSine",
				timeOffset: "-=500",
			},
			{
				targets: ".screen-cover2",
				scale: {
					value: [0, 5],
					duration: 2000,
				},
				easing: "easeOutSine",
				timeOffset: "-=300",
			},
			{
				targets: ".outro-brand-logo",
				translateY: {
					value: ["-40px", "0"],
				},
				scale: {
					value: ["0", "1"],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 1500,
				easing: "easeOutElastic",
				timeOffset: "-=1900",
			},
			{
				targets: ".text1",
				translateY: {
					value: ["-10px", "0"],
				},
				scale: {
					value: ["0", "1"],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 1000,
				easing: "easeOutElastic",
				timeOffset: "-=1900",
			},
			{
				targets: ".text2",
				translateY: {
					value: ["-10px", "0"],
				},
				scale: {
					value: ["0", "1"],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 1000,
				easing: "easeOutElastic",
				timeOffset: "-=1900",
			},
		],
	},
	{
		id: 15,
		name: "outro25",
		html: `<div class="outro-type outro25">
                <div class="outro-screen-cover screen-cover1"></div>
                <div class="outro-screen-cover screen-cover2"></div>
                <div class="outro-content">
                    <div class="outro-circle_wrap">
                        <div class="outro-circle1 circle"></div>
                        <div class="outro-circle2 circle"></div>
                        <div class="outro-circle3 circle"></div>
                    </div>
                    <div class="outro-shap shap1"></div>
                    <div class="outro-shap shap2"></div>
                    <div class="outro-shap shap3"></div>
                    <div class="outro-shap shap4"></div>
                    <div class="outro-brand-text">
                        <div class="outro-brand-shap">
                            <div class="outro-brand-logo outro-logo">
                                <img src="1.png" alt=""/>
                                <!--<h1 class="outro-logo-icon">M</h1> --><!--We can also put the text in place of the images  -->
                            </div>
                        </div>

                        <h1 class="text1 outro-brand-name-el">motionarray.com</h1>
                        <h5 class="text2 outro-tagline-el">Some text here</h5>
                    </div>
                </div>
            </div>`,
		animeTimeline: [
			{
				targets: ".screen-cover1",
				scale: {
					value: [5, 0],
					duration: 500,
				},
				easing: "easeOutSine",
			},
			{
				targets: ".shap1",
				translateY: {
					value: ["0", "-130px"],
				},
				duration: 800,
				easing: "easeOutElastic",
				timeOffset: "-=100",
			},
			{
				targets: ".shap2",
				translateY: {
					value: ["0", "130px"],
				},
				duration: 800,
				easing: "easeOutElastic",
				timeOffset: "-=800",
			},
			{
				targets: ".shap3",
				translateX: {
					value: ["0", "-130px"],
				},

				duration: 800,
				easing: "easeOutElastic",
				timeOffset: "-=800",
			},
			{
				targets: ".shap4",
				translateX: {
					value: ["0", "130px"],
				},
				duration: 800,
				easing: "easeOutElastic",
				timeOffset: "-=800",
			},
			{
				targets: ".outro-circle1",
				scale: {
					value: [0, 1],
				},
				duration: 400,
				easing: "linear",
				timeOffset: "-=800",
			},
			{
				targets: ".outro-circle2",
				scale: {
					value: [0, 1],
				},
				duration: 600,
				easing: "linear",
				timeOffset: "-=750",
			},
			{
				targets: ".shap1",
				translateY: {
					value: ["-130px", "0"],
				},
				scale: {
					value: ["1", "0"],
				},
				duration: 800,
				easing: "easeOutQuart",
				timeOffset: "-=100",
			},
			{
				targets: ".shap2",
				translateY: {
					value: ["130px", "0"],
				},
				scale: {
					value: ["1", "0"],
				},
				duration: 800,
				easing: "easeOutQuart",
				timeOffset: "-=800",
			},
			{
				targets: ".shap3",
				translateX: {
					value: ["-130px", "0"],
				},
				scale: {
					value: ["1", "0"],
				},
				duration: 800,
				easing: "easeOutQuart",
				timeOffset: "-=800",
			},
			{
				targets: ".shap4",
				translateX: {
					value: ["130px", "0"],
				},
				scale: {
					value: ["1", "0"],
				},
				duration: 800,
				easing: "easeOutQuart",
				timeOffset: "-=800",
			},
			{
				targets: ".outro-circle3",
				scale: {
					value: [0, 1],
				},
				duration: 1000,
				easing: "easeOutElastic",
				timeOffset: "-=700",
			},
			{
				targets: ".outro-circle3",
				scale: {
					value: [1, 0],
				},
				duration: 500,
				easing: "easeOutSine",
				timeOffset: "-=500",
			},
			{
				targets: ".screen-cover2",
				scale: {
					value: [0, 5],
					duration: 2000,
				},
				easing: "easeOutSine",
				timeOffset: "-=300",
			},
			{
				targets: ".outro-brand-shap",
				scale: {
					value: ["0", "1"],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 1000,
				easing: "easeOutElastic",
				timeOffset: "-=1800",
			},
			{
				targets: ".outro-brand-logo",
				translateY: {
					value: ["100%", "0"],
				},
				duration: 500,
				easing: "easeOutSine",
				timeOffset: "-=1500",
			},
			{
				targets: ".text1",
				translateY: {
					value: ["-10px", "0"],
				},
				scale: {
					value: ["0", "1"],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 1000,
				easing: "easeOutElastic",
				timeOffset: "-=1800",
			},
			{
				targets: ".text2",
				translateY: {
					value: ["-10px", "0"],
				},
				scale: {
					value: ["0", "1"],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 1000,
				easing: "easeOutElastic",
				timeOffset: "-=1800",
			},
		],
	},
	{
		id: 16,
		name: "outro26",
		html: `<div class="outro-type outro26">
                <div class="outro-content">
                    <div class="outro-brand-wrap">
                        <div class="outro-brand-shap">
                            <div class="outro-logo">
                                <img src="1.png" alt="">
                            </div>
                        </div>
                        <div class="outro-shap-wrap">
                            <div class="outro-shap shap1"></div>
                            <div class="outro-shap shap2"></div>
                            <div class="outro-shap shap3"></div>
                            <div class="outro-shap shap4"></div>
                        </div>
                    </div>
                    <div class="outro-brand-name">
                        <h1 class="brand-name-heading outro-brand-name-el">MOTHIONARRAY.COM</h1>
                    </div>
                    <div class="outro-brand-text">
                        <p class="text text1 outro-tagline-el">YOTUBE.COM/MOTHIONARRAY.COM</p>
                    </div>
                </div>
            </div>`,
		animeTimeline: [
			{
				targets: ".shap1",
				translateY: {
					value: ["0", "-130px"],
				},
				scale: {
					value: ["0", "1"],
				},
				duration: 1000,
				easing: "easeOutElastic",
			},
			{
				targets: ".shap2",
				translateY: {
					value: ["0", "130px"],
				},
				scale: {
					value: ["0", "1"],
				},
				duration: 1000,
				easing: "easeOutElastic",
				timeOffset: "-=800",
			},
			{
				targets: ".shap3",
				translateX: {
					value: ["0", "-130px"],
				},
				scale: {
					value: ["0", "1"],
				},
				duration: 1000,
				easing: "easeOutElastic",
				timeOffset: "-=800",
			},
			{
				targets: ".shap4",
				translateX: {
					value: ["0", "130px"],
				},
				scale: {
					value: ["0", "1"],
				},
				duration: 1000,
				easing: "easeOutElastic",
				timeOffset: "-=800",
			},
			{
				targets: ".outro-shap-wrap",
				rotate: {
					value: ["0", "360"],
				},
				scale: {
					value: ["1", "0"],
				},
				duration: 500,
				easing: "linear",
			},
			{
				targets: ".outro-brand-shap",
				scale: {
					value: ["0", "1"],
				},
				duration: 1500,
				easing: "easeOutElastic",
				timeOffset: "-=300",
			},
			{
				targets: ".brand-name-heading",
				opacity: {
					value: [0, 1],
				},
				translateY: {
					value: ["-20px", "0"],
				},
				duration: 1000,
				easing: "easeOutElastic",
				timeOffset: "-=300",
			},
			{
				targets: ".text1",
				opacity: {
					value: [0, 1],
				},
				translateY: {
					value: ["20px", "0"],
				},
				duration: 1000,
				easing: "easeOutElastic",
				timeOffset: "-=1000",
			},
		],
	},
	{
		id: 17,
		name: "outro27",
		html: `<div class="outro-type outro27">
                <div class="outro-content">
                    <div class="outro-brand-wrap">                        
                        <div class="outro-logo">
                            <img src="1.png" alt="" class="outro-logo-icon">
                        </div>
                        <div class="outro-shap-wrap">
                            <div class="outro-shap shap1"></div>
                            <div class="outro-shap shap2"></div>
                            <div class="outro-shap shap3"></div>
                            <div class="outro-shap shap4"></div>
                        </div>
                    </div>
                    <div class="outro-brand-name">
                        <h1 class="brand-name-heading outro-brand-name-el">MOTHIONARRAY.COM</h1>
                    </div>
                    <div class="outro-brand-text">
                        <p class="text text1 outro-tagline-el">YOTUBE.COM/MOTHIONARRAY.COM</p>
                    </div>
                </div>
            </div>`,
		animeTimeline: [
			{
				targets: ".shap1",
				translateY: {
					value: ["0", "-130px"],
				},
				scale: {
					value: ["0", "1"],
				},
				duration: 1000,
				easing: "easeOutElastic",
			},
			{
				targets: ".shap2",
				translateY: {
					value: ["0", "130px"],
				},
				scale: {
					value: ["0", "1"],
				},
				duration: 1000,
				easing: "easeOutElastic",
				timeOffset: "-=800",
			},
			{
				targets: ".shap3",
				translateX: {
					value: ["0", "-130px"],
				},
				scale: {
					value: ["0", "1"],
				},
				duration: 1000,
				easing: "easeOutElastic",
				timeOffset: "-=800",
			},
			{
				targets: ".shap4",
				translateX: {
					value: ["0", "130px"],
				},
				scale: {
					value: ["0", "1"],
				},
				duration: 1000,
				easing: "easeOutElastic",
				timeOffset: "-=800",
			},
			{
				targets: ".outro-shap-wrap",
				rotate: {
					value: ["0", "360"],
				},
				scale: {
					value: ["1", "0"],
				},
				duration: 500,
				easing: "linear",
			},
			{
				targets: ".outro-logo",
				scale: {
					value: ["0", "1"],
				},
				duration: 1500,
				easing: "easeOutElastic",
				timeOffset: "-=300",
			},
			{
				targets: ".brand-name-heading",
				translateY: {
					value: ["-20px", "0"],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 1000,
				easing: "easeOutElastic",
				timeOffset: "-=300",
			},
			{
				targets: ".text1",
				translateY: {
					value: ["20px", "0"],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 1000,
				easing: "easeOutElastic",
				timeOffset: "-=1000",
			},
		],
	},
	{
		id: 18,
		name: "outro28",
		html: `<div class="outro-type outro28">
                <div class="outro-screen-cover screen-cover1"></div>
                <div class="outro-content">
                    <div class="outro-shap shap1"></div>
                    <div class="outro-shap shap2"></div>
                    <div class="outro-brand-text">
                        <div class="outro-brand-shap">
                            <div class="outro-brand-logo outro-logo">
                                <img src="1.png" alt=""/>
                            </div>
                        </div>
                        <h1 class="text1 outro-brand-name-el">motionarray.com</h1>
                        <h5 class="text2 outro-tagline-el">Some text here</h5>
                    </div>
                </div>
            </div>`,
		animeTimeline: [
			{
				targets: ".outro-brand-shap",
				scale: {
					value: ["5", "1"],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 2000,
				easing: "easeOutElastic",
			},
			{
				targets: ".shap1",
				translateX: {
					value: ["0", "-130px"],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 1000,
				easing: "easeOutElastic",
				timeOffset: "-=1200",
			},
			{
				targets: ".shap2",
				translateX: {
					value: ["0", "130px"],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 1000,
				easing: "easeOutElastic",
				timeOffset: "-=1200",
			},
			{
				targets: ".shap1",
				translateX: {
					value: ["-130px", "0"],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=400",
			},
			{
				targets: ".shap2",
				translateX: {
					value: ["130px", "0"],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=500",
			},
			{
				targets: ".outro-brand-logo",
				scale: {
					value: ["0", "1"],
				},
				duration: 1000,
				easing: "easeOutElastic",
				timeOffset: "-=500",
			},
			{
				targets: ".text1",
				translateY: {
					value: ["-20px", "0"],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 1000,
				easing: "easeOutElastic",
				timeOffset: "-=500",
			},
			{
				targets: ".text2",
				translateY: {
					value: ["10px", "0"],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 1000,
				easing: "easeOutElastic",
				timeOffset: "-=900",
			},
		],
	},
	{
		id: 19,
		name: "outro30",
		html: `<div class="outro-type outro30">
                <div class="outro-outshap"></div>
                <div class="outro-content">
                    <div class="outro-shadow shadow1">
                        <div class="outro-brand-shap">
                            <div class="outro-logo">
                                <img src="1.png" alt="" class=""> 
                            </div>
                        </div>
                    </div>
                    <div class="outro-brand-name ">
                        <h1 class="brand-name-heading outro-brand-name-el">motionarray.com</h1>
                    </div>
                    <div class="outro-brand-text">
                        <p class="text text1 outro-tagline-el">Your Server Name</p>
                    </div>
                </div>
            </div>`,
		animeTimeline: [
			{
				targets: ".outro-outshap",
				translateY: {
					value: ["500px", "-200px"],
				},
				rotateY: {
					value: ["90", "0"],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 500,
				easing: "easeOutQuart",
			},
			{
				targets: ".outro-outshap",
				translateY: {
					value: ["-200px", "0px"],
				},
				opacity: {
					value: [1, 0],
				},
				duration: 300,
				easing: "linear",
			},
			{
				targets: ".shadow1",
				scale: {
					value: ["0", "1"],
				},
				duration: 800,
				easing: "linear",
				timeOffset: "-=100",
			},
			{
				targets: ".outro-brand-shap",
				scale: {
					value: ["0", "1"],
				},
				duration: 1000,
				easing: "linear",
				timeOffset: "-=900",
			},
			{
				targets: ".outro-logo",
				scale: {
					value: ["0", "1"],
				},
				duration: 2000,
				easing: "easeOutElastic",
				timeOffset: "-=500",
			},
			{
				targets: ".brand-name-heading",
				translateY: {
					value: ["25px", "0"],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=1000",
			},
			{
				targets: ".text1",
				translateX: {
					value: ["-5px", "0"],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=1000",
			},
		],
	},
	{
		id: 20,
		name: "outro32",
		html: `<div class="outro-type outro32">
                    <div class="outro-screen-cover"></div>
                    <div class="outro-content">
                    <div class="outro-brand-shap">
                        <div class="outro-logo">
                            <img src="1.png" alt=""/>
                        </div>
                        <div class="outro-out-shap shap1"></div>
                        <div class="outro-out-shap shap2"></div>
                    </div>
                    <div class="outro-brand-text">
                        <h1 class="text1 outro-brand-name-el">MOTION ARRAY</h1>
                        <p class="text2 outro-tagline-el">www.motionarray.com</p>
                        <div class="layer layer1"></div>
                        <div class="layer layer2"></div>
                        <div class="layer layer3"></div>
                        <div class="layer layer4"></div>
                        <div class="layer layer5"></div>
                        <div class="layer layer6"></div>
                        <div class="layer layer7"></div>
                        <div class="layer layer8"></div>
                    </div>
                </div>
            </div>`,
		animeTimeline: [
			{
				targets: ".outro-brand-shap",
				translateX: {
					value: ["200px", "200px"],
				},
				scale: {
					value: [0, 1],
				},
				rotate: {
					value: ["45", "0"],
				},

				opacity: {
					value: [0, 1],
				},
				duration: 1000,
				easing: "easeOutElastic",
			},
			{
				targets: ".shap2",
				scale: {
					value: [0, 1],
				},
				duration: 500,
				easing: "easeOutElastic",
				timeOffset: "-=500",
			},
			{
				targets: ".shap2",
				right: {
					value: ["200%", "0"],
				},
				opacity: {
					value: [1, 0],
				},
				duration: 500,
				easing: "easeInQuad",
			},
			{
				targets: ".outro-logo",
				translateX: {
					value: ["-100px", "0"],
				},
				scale: {
					value: [0, 1],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 1000,
				easing: "easeOutElastic",
				timeOffset: "-=200",
			},
			{
				targets: ".shap1",
				scale: {
					value: [0, 1],
				},
				duration: 200,
				easing: "easeOutSine",
				timeOffset: "-=1700",
			},
			{
				targets: ".outro-brand-shap",
				translateX: {
					value: ["200px", "250px"],
				},
				duration: 200,
				easing: "easeOutSine",
				timeOffset: "-=800",
			},
			{
				targets: ".shap1",
				left: {
					value: ["200%", "0"],
				},
				opacity: {
					value: [1, 0],
				},
				duration: 400,
				easing: "easeOutSine",
				timeOffset: "-=500",
			},
			{
				targets: ".outro-brand-shap",
				translateX: {
					value: ["250px", "0"],
				},
				duration: 500,
				easing: "easeOutSine",
				timeOffset: "-=300",
			},
			{
				targets: ".outro-screen-cover",
				scale: {
					value: [0, 5],
					duration: 800,
				},
				easing: "easeOutSine",
				timeOffset: "-=500",
			},
			{
				targets: ".text1",
				translateX: {
					value: ["-20", 0],
					duration: 400,
				},
				opacity: {
					value: [0, 1],
				},
				easing: "easeOutQuart",
				timeOffset: "-=200",
			},
			{
				targets: ".text2",
				translateX: {
					value: ["-20", 0],
					duration: 400,
				},
				opacity: {
					value: [0, 1],
				},
				easing: "easeOutQuart",
				timeOffset: "-=1000",
			},
			{
				targets: ".layer1",
				left: {
					value: ["80%", "100%"],
					duration: 1000,
				},
				scaleX: {
					value: [1, 0],
					duration: 1000,
				},

				opacity: {
					value: [0, 1],
				},
				easing: "easeOutQuart",
				timeOffset: "-=1200",
			},
			{
				targets: ".layer2",
				left: {
					value: ["80%", "100%"],
					duration: 1000,
				},
				scaleX: {
					value: [1, 0],
					duration: 1000,
				},

				opacity: {
					value: [0, 1],
				},
				easing: "easeOutQuart",
				timeOffset: "-=1000",
			},
			{
				targets: ".layer3",
				left: {
					value: ["50%", "90%"],
					duration: 1000,
				},
				scaleX: {
					value: [1, 0],
					duration: 1000,
				},

				opacity: {
					value: [0, 1],
				},
				easing: "easeOutQuart",
				timeOffset: "-=1200",
			},
			{
				targets: ".layer4",
				left: {
					value: ["0%", "50%"],
					duration: 1000,
				},
				scaleX: {
					value: [1, 0],
					duration: 1000,
				},
				opacity: {
					value: [0, 1],
				},
				easing: "easeOutQuart",
				timeOffset: "-=1200",
			},
			{
				targets: ".layer5",
				left: {
					value: ["50%", "100%"],
					duration: 1000,
				},
				scaleX: {
					value: [1, 0],
					duration: 1000,
				},

				opacity: {
					value: [0, 1],
				},
				easing: "easeOutQuart",
				timeOffset: "-=1200",
			},
			{
				targets: ".layer6",
				right: {
					value: ["0%", "90%"],
					duration: 1000,
				},
				scaleX: {
					value: [1, 0],
					duration: 1000,
				},

				opacity: {
					value: [0, 1],
				},
				easing: "easeOutQuart",
				timeOffset: "-=1200",
			},
			{
				targets: ".layer7",
				right: {
					value: ["20%", "60%"],
					duration: 1000,
				},
				scaleX: {
					value: [1, 0],
					duration: 1000,
				},

				opacity: {
					value: [0, 1],
				},
				easing: "easeOutQuart",
				timeOffset: "-=1200",
			},
			{
				targets: ".layer8",
				right: {
					value: ["80%", "90%"],
					duration: 1000,
				},
				scaleX: {
					value: [1, 0],
					duration: 1000,
				},

				opacity: {
					value: [0, 1],
				},
				easing: "easeOutQuart",
				timeOffset: "-=1200",
			},
		],
	},
	{
		id: 21,
		name: "outro34",
		html: `<div class="outro-type outro34">
                <div class="outro-screen-cover"></div>
                <div class="outro-content">
                    <div class="outro-brand-shap">
                        <div class="outro-logo">
                            <img src="1.png" alt=""/>
                        </div>
                        <div class="outro-out-shap shap1"></div>
                        <div class="outro-out-shap shap2"></div>

                    </div>
                <div class="outro-brand-text">
                    <h1 class="text1 outro-brand-name-el">MOTION ARRAY</h1>
                    <p class="text2 outro-tagline-el">www.motionarray.com</p>
                    <div class="bubble-wrap bubble-wrap1">
                        <div class="inner-bubble inner-bubble1"></div>
                    </div>
                    <div class="bubble-wrap bubble-wrap2">
                        <div class="inner-bubble inner-bubble2"></div>
                    </div>
                    <div class="bubble-wrap bubble-wrap3">
                        <div class="inner-bubble inner-bubble3"></div>
                    </div>
                    <div class="bubble-wrap bubble-wrap4">
                        <div class="inner-bubble inner-bubble4"></div>
                    </div>
                    <div class="bubble-wrap bubble-wrap5">
                        <div class="inner-bubble inner-bubble5"></div>
                    </div>
                    <div class="bubble-wrap bubble-wrap6">
                        <div class="inner-bubble inner-bubble6"></div>
                    </div>
                    <div class="bubble-wrap bubble-wrap7">
                        <div class="inner-bubble inner-bubble7"></div>
                    </div>
                    <div class="bubble-wrap bubble-wrap8">
                        <div class="inner-bubble inner-bubble8"></div>
                    </div>
                    <div class="bubble-wrap bubble-wrap9">
                        <div class="inner-bubble inner-bubble9"></div>
                    </div>
                </div>
                </div>
            </div>`,
		animeTimeline: [
			{
				targets: ".outro-brand-shap",
				translateX: {
					value: ["200px", "200px"],
				},
				scale: {
					value: [0, 1],
				},
				rotate: {
					value: ["45", "0"],
				},

				opacity: {
					value: [0, 1],
				},
				duration: 1000,
				easing: "easeOutElastic",
			},
			{
				targets: ".shap2",
				scale: {
					value: [0, 1],
				},
				duration: 500,
				easing: "easeOutElastic",
				timeOffset: "-=500",
			},
			{
				targets: ".shap2",
				right: {
					value: ["200%", "0"],
				},
				opacity: {
					value: [1, 0],
				},
				duration: 500,
				easing: "easeInQuad",
			},
			{
				targets: ".outro-logo",
				translateX: {
					value: ["-100px", "0"],
				},
				scale: {
					value: [0, 1],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 1000,
				easing: "easeOutElastic",
				timeOffset: "-=200",
			},
			{
				targets: ".shap1",
				scale: {
					value: [0, 1],
				},
				duration: 200,
				easing: "easeOutSine",
				timeOffset: "-=1700",
			},
			{
				targets: ".outro-brand-shap",
				translateX: {
					value: ["200px", "250px"],
				},
				duration: 200,
				easing: "easeOutSine",
				timeOffset: "-=800",
			},
			{
				targets: ".shap1",
				left: {
					value: ["200%", "0"],
				},
				opacity: {
					value: [1, 0],
				},
				duration: 400,
				easing: "easeOutSine",
				timeOffset: "-=500",
			},
			{
				targets: ".outro-brand-shap",
				translateX: {
					value: ["250px", "0"],
				},
				duration: 500,
				easing: "easeOutSine",
				timeOffset: "-=300",
			},
			{
				targets: ".outro-screen-cover",
				scale: {
					value: [0, 5],
					duration: 800,
				},
				easing: "easeOutSine",
				timeOffset: "-=500",
			},
			{
				targets: ".text1",
				translateX: {
					value: ["-20", 0],
					duration: 400,
				},
				opacity: {
					value: [0, 1],
				},
				easing: "easeOutQuart",
				timeOffset: "-=200",
			},
			{
				targets: ".text2",
				translateX: {
					value: ["-20", 0],
					duration: 400,
				},
				opacity: {
					value: [0, 1],
				},
				easing: "easeOutQuart",
				timeOffset: "-=1000",
			},
			{
				targets: ".bubble-wrap1",
				scale: {
					value: [0, 1],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 500,
				easing: "linear",
				timeOffset: "-=950",
			},
			{
				targets: ".inner-bubble1",
				scale: {
					value: [0, 1.2],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=550",
			},
			{
				targets: ".bubble-wrap2",
				scale: {
					value: [0, 1],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 500,
				easing: "linear",
				timeOffset: "-=900",
			},
			{
				targets: ".inner-bubble2",
				scale: {
					value: [0, 1.2],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=500",
			},
			{
				targets: ".bubble-wrap3",
				scale: {
					value: [0, 1],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 500,
				easing: "linear",
				timeOffset: "-=800",
			},
			{
				targets: ".inner-bubble3",
				scale: {
					value: [0, 1.2],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=450",
			},
			{
				targets: ".bubble-wrap4",
				scale: {
					value: [0, 1],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 500,
				easing: "linear",
				timeOffset: "-=750",
			},
			{
				targets: ".inner-bubble4",
				scale: {
					value: [0, 1.2],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=400",
			},
			{
				targets: ".bubble-wrap5",
				scale: {
					value: [0, 1],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 500,
				easing: "linear",
				timeOffset: "-=700",
			},
			{
				targets: ".inner-bubble5",
				scale: {
					value: [0, 1.2],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=350",
			},
			{
				targets: ".bubble-wrap6",
				scale: {
					value: [0, 1],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 500,
				easing: "linear",
				timeOffset: "-=650",
			},
			{
				targets: ".inner-bubble6",
				scale: {
					value: [0, 1.2],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=300",
			},
			{
				targets: ".bubble-wrap7",
				scale: {
					value: [0, 1],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 500,
				easing: "linear",
				timeOffset: "-=700",
			},
			{
				targets: ".inner-bubble7",
				scale: {
					value: [0, 1.2],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=350",
			},
			{
				targets: ".bubble-wrap8",
				scale: {
					value: [0, 1],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 500,
				easing: "linear",
				timeOffset: "-=550",
			},
			{
				targets: ".inner-bubble8",
				scale: {
					value: [0, 1.2],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=200",
			},
			{
				targets: ".bubble-wrap9",
				scale: {
					value: [0, 1],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 500,
				easing: "linear",
				timeOffset: "-=650",
			},
			{
				targets: ".inner-bubble9",
				scale: {
					value: [0, 1.2],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=300",
			},
		],
	},
	{
		id: 22,
		name: "outro35",
		html: `<div class="outro-type outro35">
                <div class="outro-screen-cover"></div>
                <div class="outro-content">
                    <div class="outro-brand-shap">
                        <div class="outro-logo">
                            <img src="1.png" alt=""/> 
                            <!-- <h1 class="outro-logo-icon">M</h1>-->
                        </div>
                        <div class="outro-out-shap shap1"></div>
                        <div class="outro-out-shap shap2"></div>

                    </div>
                <div class="outro-brand-text">
                    <h1 class="text1 outro-brand-name-el">MOTION ARRAY</h1>
                    <p class="text2 outro-tagline-el">www.motionarray.com</p>
                    <div class="layer layer1"></div>
                    <div class="layer layer2"></div>
                    <div class="layer layer3"></div>
                    <div class="layer layer4"></div>
                    <div class="layer layer5"></div>
                    <div class="layer layer6"></div>
                    <div class="layer layer7"></div>
                    <div class="layer layer8"></div>
                </div>
                </div>
            </div>`,
		animeTimeline: [
			{
				targets: ".outro-brand-shap",
				translateX: {
					value: ["200px", "200px"],
				},
				scale: {
					value: [0, 1],
				},
				rotate: {
					value: ["45", "0"],
				},

				opacity: {
					value: [0, 1],
				},
				duration: 1000,
				easing: "easeOutElastic",
			},
			{
				targets: ".shap2",
				scale: {
					value: [0, 1],
				},
				duration: 500,
				easing: "easeOutElastic",
				timeOffset: "-=500",
			},
			{
				targets: ".shap2",
				right: {
					value: ["200%", "0"],
				},
				opacity: {
					value: [1, 0],
				},
				duration: 500,
				easing: "easeInQuad",
			},
			{
				targets: ".outro-logo",
				translateX: {
					value: ["-100px", "0"],
				},
				scale: {
					value: [0, 1],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 1000,
				easing: "easeOutElastic",
				timeOffset: "-=200",
			},
			{
				targets: ".shap1",
				scale: {
					value: [0, 1],
				},
				duration: 200,
				easing: "easeOutSine",
				timeOffset: "-=1700",
			},
			{
				targets: ".outro-brand-shap",
				translateX: {
					value: ["200px", "250px"],
				},
				duration: 200,
				easing: "easeOutSine",
				timeOffset: "-=800",
			},
			{
				targets: ".shap1",
				left: {
					value: ["200%", "0"],
				},
				opacity: {
					value: [1, 0],
				},
				duration: 400,
				easing: "easeOutSine",
				timeOffset: "-=500",
			},
			{
				targets: ".outro-brand-shap",
				translateX: {
					value: ["250px", "0"],
				},
				duration: 500,
				easing: "easeOutSine",
				timeOffset: "-=300",
			},
			{
				targets: ".outro-screen-cover",
				scale: {
					value: [0, 5],
					duration: 800,
				},
				easing: "easeOutSine",
				timeOffset: "-=500",
			},
			{
				targets: ".text1",
				translateX: {
					value: ["-20", 0],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 400,
				easing: "easeOutQuart",
				timeOffset: "-=500",
			},
			{
				targets: ".text2",
				translateX: {
					value: ["-20", 0],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 400,
				easing: "easeOutQuart",
				timeOffset: "-=500",
			},
			{
				targets: ".layer1",
				rotate: {
					value: ["45", "45"],
				},
				scaleX: {
					value: [1, 0],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 600,
				easing: "easeOutQuart",
				timeOffset: "-=600",
			},
			{
				targets: ".layer2",
				rotate: {
					value: ["90", "90"],
				},
				scaleX: {
					value: [1, 0],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 600,
				easing: "easeOutQuart",
				timeOffset: "-=600",
			},
			{
				targets: ".layer3",
				rotate: {
					value: ["115", "115"],
				},
				scaleX: {
					value: [1, 0],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 600,
				easing: "easeOutQuart",
				timeOffset: "-=600",
			},
			{
				targets: ".layer4",
				rotate: {
					value: ["180", "180"],
				},
				scaleX: {
					value: [1, 0],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 600,
				easing: "easeOutQuart",
				timeOffset: "-=600",
			},
			{
				targets: ".layer5",
				rotate: {
					value: ["45", "45"],
				},
				scaleX: {
					value: [1, 0],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 600,
				easing: "easeOutQuart",
				timeOffset: "-=600",
			},
			{
				targets: ".layer6",
				rotate: {
					value: ["90", "90"],
				},
				scaleX: {
					value: [1, 0],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 600,
				easing: "easeOutQuart",
				timeOffset: "-=600",
			},
			{
				targets: ".layer7",
				rotate: {
					value: ["130", "130"],
				},
				scaleX: {
					value: [1, 0],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 600,
				easing: "easeOutQuart",
				timeOffset: "-=600",
			},
			{
				targets: ".layer8",
				rotate: {
					value: ["180", "180"],
				},
				scaleX: {
					value: [1, 0],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 600,
				easing: "easeOutQuart",
				timeOffset: "-=600",
			},
		],
	},
	{
		id: 23,
		name: "outro36",
		html: `<div class="outro-type outro36">
                <div class="outro-content">
                    <div class="outro-brand-wrap">
                        <div class="outro-brand-shap">
                            <div class="outro-logo">
                                <img src="1.png" alt="">
                            </div>
                        </div>
                        <div class="outro-shadow shadow1"></div>
                        <div class="outro-shadow shadow2"></div>
                        <div class="outro-shadow shadow3"></div>
                        <div class="outro-shadow shadow4"></div>
                        <div class="outro-shap-wrap">
                            <div class="outro-shap shap1"></div>
                            <div class="outro-shap shap2"></div>
                        </div>
                    </div>
                    <div class="outro-brand-name">
                        <h1 class="brand-name-heading outro-brand-name-el">MOTHIONARRAY.COM</h1>
                    </div>
                    <div class="outro-brand-text">
                        <p class="text text1 outro-tagline-el">YOTUBE.COM/MOTHIONARRAY.COM</p>
                    </div>
                </div>
            </div>`,
		animeTimeline: [
			{
				targets: ".shadow1",
				scale: {
					value: ["0", "1"],
				},
				duration: 500,
				easing: "linear",
			},
			{
				targets: ".shadow2",
				scale: {
					value: ["0", "1.1"],
				},
				duration: 500,
				easing: "linear",
				timeOffset: "-=450",
			},
			{
				targets: ".shap1",
				translateX: {
					value: ["0", "-130px"],
				},
				scale: {
					value: ["0", "1"],
				},
				duration: 1000,
				easing: "easeOutElastic",
				timeOffset: "-=450",
			},
			{
				targets: ".shap2",
				translateX: {
					value: ["0", "130px"],
				},
				scale: {
					value: ["0", "1"],
				},
				duration: 1000,
				easing: "easeOutElastic",
				timeOffset: "-=1000",
			},
			{
				targets: ".shadow3",
				scale: {
					value: ["0", "1"],
				},
				duration: 1000,
				easing: "linear",
				timeOffset: "-=800",
			},
			{
				targets: ".shadow4",
				scale: {
					value: ["0", "1.1"],
				},
				duration: 1000,
				easing: "linear",
				timeOffset: "-=400",
			},
			{
				targets: ".outro-shap-wrap",
				rotate: {
					value: ["0", "360"],
				},
				duration: 800,
				easing: "linear",
				timeOffset: "-=1200",
			},
			{
				targets: ".outro-shap-wrap",
				scale: {
					value: ["1", "0"],
				},
				duration: 200,
				easing: "linear",
			},
			{
				targets: ".outro-brand-shap",
				scale: {
					value: ["0", "1"],
				},
				duration: 1000,
				easing: "easeOutElastic",
			},
			{
				targets: ".outro-logo",
				scale: {
					value: ["0", "1"],
				},
				duration: 1000,
				easing: "easeOutElastic",
				timeOffset: "-=800",
			},
			{
				targets: ".brand-name-heading",
				translateY: {
					value: ["-20px", "0"],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 1000,
				easing: "easeOutElastic",
				timeOffset: "-=1000",
			},
			{
				targets: ".text1",
				translateY: {
					value: ["20px", "0"],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 1000,
				easing: "easeOutElastic",
				timeOffset: "-=1000",
			},
		],
	},
	{
		id: 24,
		name: "outro37",
		html: `<div class="outro-type outro37">
                <div class="outro-content">
                    <div class="outro-brand-wrap">
                        <div class="outro-brand-shap">
                            <div class="outro-logo">
                                <img src="1.png" alt="">
                            </div>
                        </div>
                        <div class="outro-shadow shadow1"></div>
                        <div class="outro-shadow shadow2"></div>
                        <div class="outro-shadow shadow3"></div>
                        <div class="outro-shadow shadow4"></div>
                        <div class="outro-shap-wrap">
                            <div class="outro-shap shap1"></div>
                            <div class="outro-shap shap2"></div>
                        </div>
                        
                        <div class="bubble-wrap-main">
                            <div class="bubble-wrap bubble-wrap1">
                                <div class="inner-bubble inner-bubble1"></div>
                            </div>
                            <div class="bubble-wrap bubble-wrap2">
                                <div class="inner-bubble inner-bubble2"></div>
                            </div>
                            <div class="bubble-wrap bubble-wrap3">
                                <div class="inner-bubble inner-bubble3"></div>
                            </div>
                            <div class="bubble-wrap bubble-wrap4">
                                <div class="inner-bubble inner-bubble4"></div>
                            </div>
                            <div class="bubble-wrap bubble-wrap5">
                                <div class="inner-bubble inner-bubble5"></div>
                            </div>
                            <div class="bubble-wrap bubble-wrap6">
                                <div class="inner-bubble inner-bubble6"></div>
                            </div>
                            <div class="bubble-wrap bubble-wrap7">
                                <div class="inner-bubble inner-bubble7"></div>
                            </div>
                            <div class="bubble-wrap bubble-wrap8">
                                <div class="inner-bubble inner-bubble8"></div>
                            </div>
                        </div>
                    </div>
                    <div class="outro-brand-name">
                        <h1 class="brand-name-heading outro-brand-name-el">MOTHIONARRAY.COM</h1>
                    </div>
                    <div class="outro-brand-text">
                        <p class="text text1 outro-tagline-el">YOTUBE.COM/MOTHIONARRAY.COM</p>
                    </div>
                </div>
            </div>`,
		animeTimeline: [
			{
				targets: ".shadow1",
				scale: {
					value: ["0", "1"],
				},
				duration: 500,
				easing: "linear",
			},
			{
				targets: ".shadow2",
				scale: {
					value: ["0", "1.1"],
				},
				duration: 500,
				easing: "linear",
				timeOffset: "-=450",
			},
			{
				targets: ".shap1",
				translateX: {
					value: ["0", "-130px"],
				},
				scale: {
					value: ["0", "1"],
				},
				duration: 1000,
				easing: "easeOutElastic",
				timeOffset: "-=450",
			},
			{
				targets: ".shap2",
				translateX: {
					value: ["0", "130px"],
				},
				scale: {
					value: ["0", "1"],
				},
				duration: 1000,
				easing: "easeOutElastic",
				timeOffset: "-=1000",
			},
			{
				targets: ".shadow3",
				scale: {
					value: ["0", "1"],
				},
				duration: 1000,
				easing: "linear",
				timeOffset: "-=800",
			},
			{
				targets: ".shadow4",
				scale: {
					value: ["0", "1.1"],
				},
				duration: 1000,
				easing: "linear",
				timeOffset: "-=400",
			},
			{
				targets: ".outro-shap-wrap",
				rotate: {
					value: ["0", "360"],
				},
				duration: 800,
				easing: "linear",
				timeOffset: "-=1200",
			},
			{
				targets: ".outro-shap-wrap",
				scale: {
					value: ["1", "0"],
				},
				duration: 200,
				easing: "linear",
			},
			{
				targets: ".outro-brand-shap",
				scale: {
					value: ["0", "1"],
				},
				duration: 1000,
				easing: "easeOutElastic",
			},
			{
				targets: ".outro-logo",
				scale: {
					value: ["0", "1"],
				},
				duration: 1000,
				easing: "easeOutElastic",
				timeOffset: "-=800",
			},
			{
				targets: ".bubble-wrap1",
				scale: {
					value: [0, 1],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 500,
				easing: "linear",
				timeOffset: "-=1200",
			},
			{
				targets: ".bubble-wrap-main",
				scale: {
					value: ["0", "1"],
				},
				duration: 500,
				easing: "easeOutElastic",
				timeOffset: "-=1200",
			},
			{
				targets: ".inner-bubble1",
				scale: {
					value: [0, 1.2],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=800",
			},
			{
				targets: ".bubble-wrap2",
				scale: {
					value: [0, 1],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 500,
				easing: "linear",
				timeOffset: "-=1200",
			},
			{
				targets: ".inner-bubble2",
				scale: {
					value: [0, 1.2],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=880",
			},
			{
				targets: ".bubble-wrap3",
				scale: {
					value: [0, 1.2],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=1200",
			},
			{
				targets: ".inner-bubble3",
				scale: {
					value: [0, 1.2],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=800",
			},
			{
				targets: ".bubble-wrap4",
				scale: {
					value: [0, 1],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=1200",
			},
			{
				targets: ".inner-bubble4",
				scale: {
					value: [0, 1.2],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=800",
			},
			{
				targets: ".bubble-wrap5",
				scale: {
					value: [0, 1],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=1200",
			},
			{
				targets: ".inner-bubble5",
				scale: {
					value: [0, 1.2],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=800",
			},
			{
				targets: ".bubble-wrap6",
				scale: {
					value: [0, 1],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=1200",
			},
			{
				targets: ".inner-bubble6",
				scale: {
					value: [0, 1.2],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=800",
			},
			{
				targets: ".bubble-wrap7",
				scale: {
					value: [0, 1],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=1200",
			},
			{
				targets: ".inner-bubble7",
				scale: {
					value: [0, 1.2],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=800",
			},
			{
				targets: ".bubble-wrap8",
				scale: {
					value: [0, 1],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=1200",
			},
			{
				targets: ".inner-bubble8",
				scale: {
					value: [0, 1.2],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=800",
			},
			{
				targets: ".brand-name-heading",
				translateY: {
					value: ["-20px", "0"],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 1000,
				easing: "easeOutElastic",
				timeOffset: "-=1200",
			},
			{
				targets: ".text1",
				translateY: {
					value: ["20px", "0"],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 1000,
				easing: "easeOutElastic",
				timeOffset: "-=1000",
			},
		],
	},
	{
		id: 25,
		name: "outro38",
		html: `<div class="outro-type outro38">
                <div class="outro-content">
                    <div class="outro-brand-wrap">
                        <div class="outro-brand-shap">
                            <div class="outro-logo">
                                <img src="1.png" alt="">
                            </div>
                        </div>
                        <div class="outro-shadow shadow1"></div>
                        <div class="outro-shadow shadow2"></div>
                        <div class="outro-shadow shadow3"></div>
                        <div class="outro-shadow shadow4"></div>
                        <div class="outro-shap-wrap">
                            <div class="outro-shap shap1"></div>
                            <div class="outro-shap shap2"></div>
                        </div>
                        <div class="bubble-wrap-main">
                            <div class="bubble-wrap bubble-wrap1">
                                <div class="inner-bubble inner-bubble1"></div>
                            </div>
                            <div class="bubble-wrap bubble-wrap2">
                                <div class="inner-bubble inner-bubble2"></div>
                            </div>
                            <div class="bubble-wrap bubble-wrap3">
                                <div class="inner-bubble inner-bubble3"></div>
                            </div>
                            <div class="bubble-wrap bubble-wrap4">
                                <div class="inner-bubble inner-bubble4"></div>
                            </div>
                            <div class="bubble-wrap bubble-wrap5">
                                <div class="inner-bubble inner-bubble5"></div>
                            </div>
                            <div class="bubble-wrap bubble-wrap6">
                                <div class="inner-bubble inner-bubble6"></div>
                            </div>
                            <div class="bubble-wrap bubble-wrap7">
                                <div class="inner-bubble inner-bubble7"></div>
                            </div>
                            <div class="bubble-wrap bubble-wrap8">
                                <div class="inner-bubble inner-bubble8"></div>
                            </div>
                        </div>
                    </div>
                    <div class="outro-brand-name">
                        <h1 class="brand-name-heading outro-brand-name-el">MOTHIONARRAY.COM</h1>
                    </div>
                    <div class="outro-brand-text">
                        <p class="text text1 outro-tagline-el">YOTUBE.COM/MOTHIONARRAY.COM</p>
                    </div>
                </div>
            </div>`,
		animeTimeline: [
			{
				targets: ".shadow1",
				scale: {
					value: ["0", "1"],
				},
				duration: 500,
				easing: "linear",
			},
			{
				targets: ".shadow2",
				scale: {
					value: ["0", "1.1"],
				},
				duration: 500,
				easing: "linear",
				timeOffset: "-=450",
			},
			{
				targets: ".shap1",
				translateX: {
					value: ["0", "-130px"],
				},
				scale: {
					value: ["0", "1"],
				},
				duration: 1000,
				easing: "easeOutElastic",
				timeOffset: "-=450",
			},
			{
				targets: ".shap2",
				translateX: {
					value: ["0", "130px"],
				},
				scale: {
					value: ["0", "1"],
				},
				duration: 1000,
				easing: "easeOutElastic",
				timeOffset: "-=1000",
			},
			{
				targets: ".shadow3",
				scale: {
					value: ["0", "1"],
				},
				duration: 1000,
				easing: "linear",
				timeOffset: "-=800",
			},
			{
				targets: ".shadow4",
				scale: {
					value: ["0", "1.1"],
				},
				duration: 1000,
				easing: "linear",
				timeOffset: "-=400",
			},
			{
				targets: ".outro-shap-wrap",
				rotate: {
					value: ["0", "360"],
				},
				duration: 800,
				easing: "linear",
				timeOffset: "-=1200",
			},
			{
				targets: ".outro-shap-wrap",
				scale: {
					value: ["1", "0"],
				},
				duration: 200,
				easing: "linear",
			},
			{
				targets: ".outro-brand-shap",
				scale: {
					value: ["0", "1"],
				},
				duration: 1000,
				easing: "easeOutElastic",
			},
			{
				targets: ".outro-logo",
				scale: {
					value: ["0", "1"],
				},
				duration: 1000,
				easing: "easeOutElastic",
				timeOffset: "-=800",
			},
			{
				targets: ".bubble-wrap1",
				scale: {
					value: [0, 1],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 500,
				easing: "linear",
				timeOffset: "-=1200",
			},
			{
				targets: ".inner-bubble1",
				scale: {
					value: [0, 1.2],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=800",
			},
			{
				targets: ".bubble-wrap2",
				scale: {
					value: [0, 1],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 500,
				easing: "linear",
				timeOffset: "-=1150",
			},
			{
				targets: ".inner-bubble2",
				scale: {
					value: [0, 1.2],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=800",
			},
			{
				targets: ".bubble-wrap3",
				scale: {
					value: [0, 1.2],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=1100",
			},
			{
				targets: ".inner-bubble3",
				scale: {
					value: [0, 1.2],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=750",
			},
			{
				targets: ".bubble-wrap4",
				scale: {
					value: [0, 1],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=1050",
			},
			{
				targets: ".inner-bubble4",
				scale: {
					value: [0, 1.2],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=700",
			},
			{
				targets: ".bubble-wrap5",
				scale: {
					value: [0, 1],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=1000",
			},
			{
				targets: ".inner-bubble5",
				scale: {
					value: [0, 1.2],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=650",
			},
			{
				targets: ".bubble-wrap6",
				scale: {
					value: [0, 1],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=950",
			},
			{
				targets: ".inner-bubble6",
				scale: {
					value: [0, 1.2],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=600",
			},
			{
				targets: ".bubble-wrap7",
				scale: {
					value: [0, 1],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=900",
			},
			{
				targets: ".inner-bubble7",
				scale: {
					value: [0, 1.2],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=550",
			},
			{
				targets: ".bubble-wrap8",
				scale: {
					value: [0, 1],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=850",
			},
			{
				targets: ".inner-bubble8",
				scale: {
					value: [0, 1.2],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=500",
			},
			{
				targets: ".brand-name-heading",
				translateY: {
					value: ["-20px", "0"],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 1000,
				easing: "easeOutElastic",
				timeOffset: "-=1200",
			},
			{
				targets: ".text1",
				translateY: {
					value: ["20px", "0"],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 1000,
				easing: "easeOutElastic",
				timeOffset: "-=1000",
			},
		],
	},
	{
		id: 26,
		name: "outro39",
		html: `<div class="outro-type outro39">
                <div class="outro-screen-cover"></div>
                <div class="outro-content">
                    <div class="outro-shap"></div>
                    <div class="outro-shap2"></div>
                    <div class="outro-circle_wrap">
                        <div class="outro-circle1 circle"></div>
                        <div class="outro-circle2 circle"></div>
                        <div class="outro-circle3 circle"></div>
                    </div>
                    <div class="outro-brand-text">
                        <div class="outro-brand-logo outro-logo">
                            <img src="1.png" alt=""/>
                        </div>

                        <h1 class="text1 outro-brand-name-el">Sound FX included</h1>
                        <h5 class="text2 outro-tagline-el">Another text here</h5>
                        <div class="bubble-wrap bubble-wrap1">
                            <div class="inner-bubble inner-bubble1"></div>
                        </div>
                    <div class="bubble-wrap bubble-wrap2">
                            <div class="inner-bubble inner-bubble2"></div>
                        </div>
                        <div class="bubble-wrap bubble-wrap3">
                            <div class="inner-bubble inner-bubble3"></div>
                        </div>
                        <div class="bubble-wrap bubble-wrap4">
                            <div class="inner-bubble inner-bubble4"></div>
                        </div>
                        <div class="bubble-wrap bubble-wrap5">
                            <div class="inner-bubble inner-bubble5"></div>
                        </div>
                        <div class="bubble-wrap bubble-wrap6">
                            <div class="inner-bubble inner-bubble6"></div>
                        </div>
                        <div class="bubble-wrap bubble-wrap7">
                            <div class="inner-bubble inner-bubble7"></div>
                        </div>
                        <div class="bubble-wrap bubble-wrap8">
                            <div class="inner-bubble inner-bubble8"></div>
                        </div>
                        <div class="bubble-wrap bubble-wrap9">
                            <div class="inner-bubble inner-bubble9"></div>
                        </div>
                    </div>
                </div>
            </div>`,
		animeTimeline: [
			{
				targets: ".outro-shap",
				translateX: {
					value: [0, "300"],
				},
				duration: 500,
				easing: "easeOutSine",
			},
			{
				targets: ".outro-shap2",
				translateX: {
					value: [0, "-300"],
				},
				duration: 500,
				easing: "easeOutSine",
				timeOffset: "-=500",
			},
			{
				targets: ".outro-shap",
				translateX: {
					value: ["300", 0],
				},
				duration: 200,
				easing: "easeOutSine",
			},
			{
				targets: ".outro-shap2",
				translateX: {
					value: ["-300", 0],
				},
				duration: 200,
				easing: "easeOutSine",
				timeOffset: "-=200",
			},
			{
				targets: ".outro-screen-cover",
				scale: {
					value: [0, 5],
					duration: 2000,
				},
				easing: "easeOutSine",
			},
			{
				targets: ".outro-circle1",
				scale: {
					value: [0, 1],
				},
				duration: 500,
				easing: "linear",
				timeOffset: "-=2000",
			},
			{
				targets: ".outro-circle3",
				scale: {
					value: [0, 1],
				},
				duration: 800,
				easing: "easeOutBack",
				timeOffset: "-=1900",
			},
			{
				targets: ".outro-circle2",
				scale: {
					value: [0, 1],
				},
				duration: 500,
				easing: "easeOutSine",
				timeOffset: "-=1800",
			},
			{
				targets: ".outro-circle3",
				scale: {
					value: [1, 0],
				},
				duration: 200,
				easing: "easeOutSine",
				timeOffset: "-=1100",
			},
			{
				targets: ".outro-brand-logo",
				scale: {
					value: [0, 1],
				},
				translateY: {
					value: ["10px", "0px"],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 2000,
				easing: "easeOutElastic",
				timeOffset: "-=1000",
			},
			{
				targets: ".text1",
				translateY: {
					value: ["10px", "0px"],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 800,
				easing: "easeOutElastic",
				timeOffset: "-=1300",
			},
			{
				targets: ".text2",
				translateY: {
					value: ["10px", "0px"],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 800,
				easing: "easeOutElastic",
				timeOffset: "-=1000",
			},
			{
				targets: ".bubble-wrap1",
				scale: {
					value: [0, 1],
				},
				rotate: {
					value: ["45", "45"],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 500,
				easing: "linear",
				timeOffset: "-=2000",
			},
			{
				targets: ".inner-bubble1",
				scale: {
					value: [0, 1.2],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=1600",
			},
			{
				targets: ".bubble-wrap2",
				scale: {
					value: [0, 1],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 500,
				easing: "linear",
				timeOffset: "-=1950",
			},
			{
				targets: ".inner-bubble2",
				scale: {
					value: [0, 1.2],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=1550",
			},
			{
				targets: ".bubble-wrap3",
				scale: {
					value: [0, 1],
				},
				rotate: {
					value: ["45", "45"],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=1800",
			},
			{
				targets: ".inner-bubble3",
				scale: {
					value: [0, 1.2],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=1450",
			},
			{
				targets: ".bubble-wrap4",
				scale: {
					value: [0, 1],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=1850",
			},
			{
				targets: ".inner-bubble4",
				scale: {
					value: [0, 1.2],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=1500",
			},
			{
				targets: ".bubble-wrap5",
				scale: {
					value: [0, 1],
				},
				rotate: {
					value: ["45", "45"],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=1500",
			},
			{
				targets: ".inner-bubble5",
				scale: {
					value: [0, 1.2],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=1000",
			},
			{
				targets: ".bubble-wrap6",
				scale: {
					value: [0, 1],
				},
				rotate: {
					value: ["45", "45"],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=1550",
			},
			{
				targets: ".inner-bubble6",
				scale: {
					value: [0, 1.2],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=1850",
			},
			{
				targets: ".bubble-wrap7",
				scale: {
					value: [0, 1],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=1850",
			},
			{
				targets: ".inner-bubble7",
				scale: {
					value: [0, 1.2],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=1550",
			},
			{
				targets: ".bubble-wrap8",
				scale: {
					value: [0, 1],
				},
				rotate: {
					value: ["45", "45"],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=1400",
			},
			{
				targets: ".inner-bubble8",
				scale: {
					value: [0, 1.2],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=900",
			},
			{
				targets: ".bubble-wrap9",
				scale: {
					value: [0, 1],
				},
				rotate: {
					value: ["45", "45"],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=1200",
			},
			{
				targets: ".inner-bubble9",
				scale: {
					value: [0, 1.2],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=800",
			},
		],
	},
	{
		id: 27,
		name: "outro40",
		html: `<div class="outro-type outro40">
                <div class="outro-content">
                    <div class="outro-shap-left">
                        <div class="outro-shap shap1"></div>
                        <div class="outro-shap shap2"></div>
                        <div class="outro-shap shap3"></div>
                    </div>
                    <div class="outro-shap-right">
                        <div class="outro-shap shap3"></div>
                        <div class="outro-shap shap2"></div>
                        <div class="outro-shap shap1"></div>
                    </div>
                    <div class="outro-brand-shap">
                        <div class="outro-logo">
                            <img src="1.png" alt="" class="outro-logo-icon">
                        </div>
                        <div class="bubble-wrap bubble-wrap1">
                            <div class="inner-bubble inner-bubble1"></div>
                        </div>
                    <div class="bubble-wrap bubble-wrap2">
                            <div class="inner-bubble inner-bubble2"></div>
                        </div>
                        <div class="bubble-wrap bubble-wrap3">
                            <div class="inner-bubble inner-bubble3"></div>
                        </div>
                        <div class="bubble-wrap bubble-wrap4">
                            <div class="inner-bubble inner-bubble4"></div>
                        </div>
                        <div class="bubble-wrap bubble-wrap5">
                            <div class="inner-bubble inner-bubble5"></div>
                        </div>
                        <div class="bubble-wrap bubble-wrap6">
                            <div class="inner-bubble inner-bubble6"></div>
                        </div>
                        <div class="bubble-wrap bubble-wrap7">
                            <div class="inner-bubble inner-bubble7"></div>
                        </div>
                        <div class="bubble-wrap bubble-wrap8">
                            <div class="inner-bubble inner-bubble8"></div>
                        </div>
                        <div class="bubble-wrap bubble-wrap9">
                            <div class="inner-bubble inner-bubble9"></div>
                        </div>
                    </div>
                    <div class="outro-brand-name">
                        <h1 class="brand-name-heading outro-brand-name-el">MOTHIONARRAY.COM</h1>
                    </div>
                    <div class="outro-brand-text">
                        <p class="text text1 outro-tagline-el">TWITTER.COM/MOTHIONARRAY.COM</p>
                    </div>
                    
                </div>
            </div>`,
		animeTimeline: [
			{
				targets: ".shap3",
				translateY: {
					value: ["-20px", "0"],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 300,
				easing: "linear",
			},
			{
				targets: ".shap3",
				translateY: {
					value: ["-40px", "0"],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 300,
				easing: "linear",
				timeOffset: "-=300",
			},
			{
				targets: ".shap2",
				translateY: {
					value: ["-30px", "0"],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 300,
				easing: "linear",
				timeOffset: "-=250",
			},
			{
				targets: ".outro-shap-right .shap2",
				translateY: {
					value: ["-30px", "0"],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 300,
				easing: "linear",
				timeOffset: "-=250",
			},
			{
				targets: ".shap1",
				translateY: {
					value: ["-40px", "0"],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 300,
				easing: "linear",
				timeOffset: "-=250",
			},
			{
				targets: ".outro-shap-right .shap1",
				translateY: {
					value: ["-20px", "0"],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 300,
				easing: "linear",
				timeOffset: "-=250",
			},
			{
				targets: ".outro-shap-left",
				left: {
					value: ["0", "50%"],
				},
				duration: 500,
				easing: "easeOutQuart",
			},
			{
				targets: ".outro-shap-right",
				right: {
					value: ["0", "50%"],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=500",
			},
			{
				targets: ".outro-brand-shap",
				scale: {
					value: ["0", "1"],
				},
				duration: 1500,
				easing: "easeOutElastic",
				timeOffset: "-=400",
			},
			{
				targets: ".outro-logo",
				scale: {
					value: ["0", "1"],
				},
				duration: 1500,
				easing: "easeOutElastic",
				timeOffset: "-=1000",
			},
			{
				targets: ".outro-screen-cover",
				scale: {
					value: [0, 5],
					duration: 2000,
				},
				easing: "easeOutSine",
				timeOffset: "-=1000",
			},
			{
				targets: ".brand-name-heading",
				translateY: {
					value: ["-20px", "0"],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=1500",
			},
			{
				targets: " .text1",
				translateY: {
					value: ["20px", "0"],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=1500",
			},
			{
				targets: ".bubble-wrap1",
				scale: {
					value: [0, 1],
				},
				rotate: {
					value: ["45", "45"],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 500,
				easing: "linear",
				timeOffset: "-=1400",
			},
			{
				targets: ".inner-bubble1",
				scale: {
					value: [0, 1.2],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=1100",
			},
			{
				targets: ".bubble-wrap2",
				scale: {
					value: [0, 1],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 500,
				easing: "linear",
				timeOffset: "-=1950",
			},
			{
				targets: ".inner-bubble2",
				scale: {
					value: [0, 1.2],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=1550",
			},
			{
				targets: ".bubble-wrap3",
				scale: {
					value: [0, 1],
				},
				rotate: {
					value: ["45", "45"],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=1900",
			},
			{
				targets: ".inner-bubble3",
				scale: {
					value: [0, 1.2],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=1550",
			},
			{
				targets: ".bubble-wrap4",
				scale: {
					value: [0, 1],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=1850",
			},
			{
				targets: ".inner-bubble4",
				scale: {
					value: [0, 1.2],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=1500",
			},
			{
				targets: ".bubble-wrap5",
				scale: {
					value: [0, 1],
				},
				rotate: {
					value: ["45", "45"],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=1500",
			},
			{
				targets: ".inner-bubble5",
				scale: {
					value: [0, 1.2],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=1000",
			},
			{
				targets: ".bubble-wrap6",
				scale: {
					value: [0, 1],
				},
				rotate: {
					value: ["45", "45"],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=1550",
			},
			{
				targets: ".inner-bubble6",
				scale: {
					value: [0, 1.2],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=1850",
			},
			{
				targets: ".bubble-wrap7",
				scale: {
					value: [0, 1],
				},
				rotate: {
					value: ["45", "45"],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=1850",
			},
			{
				targets: ".inner-bubble7",
				scale: {
					value: [0, 1.2],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=1550",
			},
			{
				targets: ".bubble-wrap8",
				scale: {
					value: [0, 1],
				},
				rotate: {
					value: ["45", "45"],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=1400",
			},
			{
				targets: ".inner-bubble8",
				scale: {
					value: [0, 1.2],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=900",
			},
			{
				targets: ".bubble-wrap9",
				scale: {
					value: [0, 1],
				},
				rotate: {
					value: ["45", "45"],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=1200",
			},
			{
				targets: ".inner-bubble9",
				scale: {
					value: [0, 1.2],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=800",
			},
		],
	},
	{
		id: 28,
		name: "outro41",
		html: `<div class="outro-type outro41">
                <div class="outro-screen-cover"></div>
                <div class="outro-content">
                    <div class="outro-shap-left">
                        <div class="outro-shap shap1"></div>
                        <div class="outro-shap shap2"></div>
                        <div class="outro-shap shap3"></div>
                    </div>
                    <div class="outro-shap-right">
                        <div class="outro-shap shap3"></div>
                        <div class="outro-shap shap2"></div>
                        <div class="outro-shap shap1"></div>
                    </div>
                    <div class="outro-outshap"></div>
                    <div class="outro-brand-shap">
                        <div class="outro-logo">
                            <img src="1.png" alt="" class="outro-logo-icon">
                        </div>
                    </div>
                    <div class="outro-brand-name">
                        <h1 class="brand-name-heading outro-brand-name-el">Easy to custmize</h1>
                    </div>
                    <div class="outro-brand-text">
                        <p class="text text1 outro-tagline-el">Another text here</p>
                    </div> 
                </div>
            </div>`,
		animeTimeline: [
			{
				targets: ".outro-shap-left",
				left: {
					value: ["0", "50%"],
				},
				opacity: {
					value: [1, 0],
				},
				duration: 400,
				easing: "easeInQuad",
			},
			{
				targets: ".outro-shap-right",
				right: {
					value: ["0", "50%"],
				},
				opacity: {
					value: [1, 0],
				},
				duration: 400,
				easing: "easeInQuad",
				timeOffset: "-=400",
			},
			{
				targets: ".outro-screen-cover",
				scale: {
					value: [0, 5],
					duration: 2000,
				},
				easing: "easeOutSine",
				timeOffset: "-=100",
			},
			{
				targets: ".outro-brand-shap",
				scale: {
					value: ["0", "1"],
				},
				duration: 1500,
				easing: "easeOutElastic",
				timeOffset: "-=2000",
			},
			{
				targets: ".outro-outshap",
				translateY: {
					value: ["0", "-100px"],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 400,
				easing: "easeOutQuart",
				timeOffset: "-=2000",
			},
			{
				targets: ".outro-outshap",
				translateY: {
					value: ["-100px", "100px"],
				},
				rotateY: {
					value: ["0", "90"],
				},
				duration: 900,
				easing: "easeOutQuart",
				timeOffset: "-=1500",
			},
			{
				targets: ".outro-logo",
				translateY: {
					value: ["-60px", "0"],
				},
				scale: {
					value: ["0", "1"],
				},
				duration: 1200,
				easing: "easeOutElastic",
				timeOffset: "-=1350",
			},
			{
				targets: ".outro-brand-shap",
				translateY: {
					value: ["0", "20px"],
				},
				duration: 1000,
				easing: "easeOutElastic",
				timeOffset: "-=1350",
			},
			{
				targets: ".outro-brand-shap",
				translateY: {
					value: ["20px", "0"],
				},
				duration: 1000,
				easing: "easeOutElastic",
				timeOffset: "-=1100",
			},
			{
				targets: ".brand-name-heading",
				translateY: {
					value: ["-10px", "0"],
				},
				scale: {
					value: ["0", "1"],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 1500,
				easing: "easeOutElastic",
				timeOffset: "-=1200",
			},
			{
				targets: ".text1",
				translateY: {
					value: ["-10px", "0"],
				},
				scale: {
					value: ["0", "1"],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 1500,
				easing: "easeOutElastic",
				timeOffset: "-=1500",
			},
		],
	},
	{
		id: 29,
		name: "outro42",
		html: `<div class="outro-type outro42">
                <div class="outro-screen-cover"></div>
                <div class="outro-content">
                    <div class="outro-shap-left">
                        <div class="outro-shap shap1"></div>
                        <div class="outro-shap shap2"></div>
                        <div class="outro-shap shap3"></div>
                    </div>
                    <div class="outro-shap-right">
                        <div class="outro-shap shap3"></div>
                        <div class="outro-shap shap2"></div>
                        <div class="outro-shap shap1"></div>
                    </div>
                    <div class="outro-outshap"></div>
                    <div class="outro-brand-shap">
                        <div class="outro-logo">
                            <img src="1.png" alt="">
                        </div>
                        <div class="bubble-wrap bubble-wrap1">
                            <div class="inner-bubble inner-bubble1"></div>
                        </div>
                        <div class="bubble-wrap bubble-wrap2">
                        <div class="inner-bubble inner-bubble2"></div>
                        </div>
                        <div class="bubble-wrap bubble-wrap3">
                            <div class="inner-bubble inner-bubble3"></div>
                        </div>
                        <div class="bubble-wrap bubble-wrap4">
                            <div class="inner-bubble inner-bubble4"></div>
                        </div>
                        <div class="bubble-wrap bubble-wrap5">
                            <div class="inner-bubble inner-bubble5"></div>
                        </div>
                        <div class="bubble-wrap bubble-wrap6">
                            <div class="inner-bubble inner-bubble6"></div>
                        </div>
                        <div class="bubble-wrap bubble-wrap7">
                            <div class="inner-bubble inner-bubble7"></div>
                        </div>
                        <div class="bubble-wrap bubble-wrap8">
                            <div class="inner-bubble inner-bubble8"></div>
                        </div>
                        <div class="bubble-wrap bubble-wrap9">
                            <div class="inner-bubble inner-bubble9"></div>
                        </div>
                    </div>
                    <div class="outro-brand-name">
                        <h1 class="brand-name-heading outro-brand-name-el">+12 soc. midea icons </h1>
                    </div>
                    <div class="outro-brand-text">
                        <p class="text text1 outro-tagline-el">Another text here</p>
                    </div> 
                    
                </div>
            </div>`,
		animeTimeline: [
			{
				targets: ".outro-shap-left",
				left: {
					value: ["0", "50%"],
				},
				opacity: {
					value: [1, 0],
				},
				duration: 400,
				easing: "easeInQuad",
			},
			{
				targets: ".outro-shap-right",
				right: {
					value: ["0", "50%"],
				},
				opacity: {
					value: [1, 0],
				},
				duration: 400,
				easing: "easeInQuad",
				timeOffset: "-=400",
			},
			{
				targets: ".outro-screen-cover",
				scale: {
					value: [0, 5],
					duration: 2000,
				},
				easing: "easeOutSine",
				timeOffset: "-=100",
			},
			{
				targets: ".outro-brand-shap",
				scale: {
					value: ["0", "1"],
				},
				duration: 1500,
				easing: "easeOutElastic",
				timeOffset: "-=2000",
			},
			{
				targets: ".outro-outshap",
				translateY: {
					value: ["0", "-100px"],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 400,
				easing: "easeOutQuart",
				timeOffset: "-=2000",
			},
			{
				targets: ".outro-outshap",
				translateY: {
					value: ["-100px", "100px"],
				},
				rotateY: {
					value: ["0", "90"],
				},
				duration: 900,
				easing: "easeOutQuart",
				timeOffset: "-=1500",
			},
			{
				targets: ".outro-logo",
				translateY: {
					value: ["-60px", "0"],
				},
				scale: {
					value: ["0", "1"],
				},
				duration: 1200,
				easing: "easeOutElastic",
				timeOffset: "-=1350",
			},
			{
				targets: ".outro-brand-shap",
				translateY: {
					value: ["0", "20px"],
				},
				duration: 1000,
				easing: "easeOutElastic",
				timeOffset: "-=1350",
			},
			{
				targets: ".outro-brand-shap",
				translateY: {
					value: ["20px", "0"],
				},
				duration: 1000,
				easing: "easeOutElastic",
				timeOffset: "-=1100",
			},
			{
				targets: ".brand-name-heading",
				translateY: {
					value: ["-10px", "0"],
				},
				scale: {
					value: ["0", "1"],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 1500,
				easing: "easeOutElastic",
				timeOffset: "-=1200",
			},
			{
				targets: ".text1",
				translateY: {
					value: ["-10px", "0"],
				},
				scale: {
					value: ["0", "1"],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 1500,
				easing: "easeOutElastic",
				timeOffset: "-=1500",
			},
			{
				targets: ".bubble-wrap1",
				scale: {
					value: [0, 1],
				},
				rotate: {
					value: ["45", "45"],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 500,
				easing: "linear",
				timeOffset: "-=2000",
			},
			{
				targets: ".inner-bubble1",
				scale: {
					value: [0, 1.2],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=1800",
			},
			{
				targets: ".bubble-wrap2",
				scale: {
					value: [0, 1],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 500,
				easing: "linear",
				timeOffset: "-=1550",
			},
			{
				targets: ".inner-bubble2",
				scale: {
					value: [0, 1.2],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=1250",
			},
			{
				targets: ".bubble-wrap3",
				scale: {
					value: [0, 1],
				},
				rotate: {
					value: ["45", "45"],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=1900",
			},
			{
				targets: ".inner-bubble3",
				scale: {
					value: [0, 1.2],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=1550",
			},
			{
				targets: ".bubble-wrap4",
				scale: {
					value: [0, 1],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=1850",
			},
			{
				targets: ".inner-bubble4",
				scale: {
					value: [0, 1.2],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=1500",
			},
			{
				targets: ".bubble-wrap5",
				scale: {
					value: [0, 1],
				},
				rotate: {
					value: ["45", "45"],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=1500",
			},
			{
				targets: ".inner-bubble5",
				scale: {
					value: [0, 1.2],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=1000",
			},
			{
				targets: ".bubble-wrap6",
				scale: {
					value: [0, 1],
				},
				rotate: {
					value: ["45", "45"],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 500,
				easing: "linear",
				timeOffset: "-=1550",
			},
			{
				targets: ".inner-bubble6",
				scale: {
					value: [0, 1.2],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=1250",
			},
			{
				targets: ".bubble-wrap7",
				scale: {
					value: [0, 1],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=1950",
			},
			{
				targets: ".inner-bubble7",
				scale: {
					value: [0, 1.2],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=1650",
			},
			{
				targets: ".bubble-wrap8",
				scale: {
					value: [0, 1],
				},
				rotate: {
					value: ["45", "45"],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=1400",
			},
			{
				targets: ".inner-bubble8",
				scale: {
					value: [0, 1.2],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=900",
			},
			{
				targets: ".bubble-wrap9",
				scale: {
					value: [0, 1],
				},
				rotate: {
					value: ["45", "45"],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=1700",
			},
			{
				targets: ".inner-bubble9",
				scale: {
					value: [0, 1.2],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=1500",
			},
		],
	},
	{
		id: 30,
		name: "outro43",
		html: `<div class="outro-type outro43">
                <div class="outro-screen-cover"></div>
                <div class="outro-screen-cover cover2"></div>
                <div class="outro-content">
                    <div class="outro-shap-left">
                        <div class="outro-shap shap1"></div>
                        <div class="outro-shap shap2"></div>
                        <div class="outro-shap shap3"></div>
                    </div>
                    <div class="outro-shap-right">
                        <div class="outro-shap shap3"></div>
                        <div class="outro-shap shap2"></div>
                        <div class="outro-shap shap1"></div>
                    </div>
                    <div class="outro-brand-shap">
                        <div class="outro-logo">
                            <img src="1.png" alt="">
                        </div>
                    </div>
                    <div class="outro-brand-name">
                        <h1 class="brand-name-heading outro-brand-name-el">MOTHIONARRAY.COM</h1>
                    </div>
                    <div class="outro-brand-text">
                        <p class="text text1 outro-tagline-el">TWITTER.COM/MOTHIONARRAY.COM</p>
                    </div>
                </div>
                    <div class="layer layer1"></div>
                    <div class="layer layer2"></div>
                    <div class="layer layer3"></div>
                    <div class="layer layer4"></div>
                    <div class="layer layer5"></div>
                    <div class="layer layer6"></div>
                    <div class="layer layer7"></div>
                    <div class="layer layer8"></div>
                </div>
            </div>`,
		animeTimeline: [
			{
				targets: ".outro-screen-cover",
				scale: {
					value: [0, 0.1],
					duration: 400,
				},
				easing: "easeOutSine",
			},
			{
				targets: ".outro-screen-cover",
				scale: {
					value: [0.1, 0],
					duration: 400,
				},
				easing: "easeOutSine",
			},
			{
				targets: ".outro-screen-cover",
				scale: {
					value: [0, 2],
					duration: 2200,
				},
				easing: "easeOutSine",
			},
			{
				targets: ".cover2",
				scale: {
					value: [0, 2],
					duration: 2000,
				},
				easing: "easeOutSine",
				timeOffset: "-=1800",
			},
			{
				targets: ".outro-brand-shap",
				scale: {
					value: ["0", "1"],
				},
				rotateY: {
					value: ["-90", "0"],
				},
				duration: 800,
				easing: "linear",
				timeOffset: "-=1800",
			},
			{
				targets: ".brand-name-heading",
				translateY: {
					value: ["50px", "0"],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=1000",
			},
			{
				targets: ".text1",
				translateY: {
					value: ["50px", "0"],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=800",
			},
			{
				targets: ".layer1",
				rotate: {
					value: ["45", "45"],
				},
				scaleX: {
					value: [1, 0],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 1000,
				easing: "easeOutQuart",
				timeOffset: "-=1500",
			},
			{
				targets: ".layer2",
				rotate: {
					value: ["90", "90"],
				},
				scaleX: {
					value: [1, 0],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 1000,
				easing: "easeOutQuart",
				timeOffset: "-=1200",
			},
			{
				targets: ".layer3",
				rotate: {
					value: ["115", "115"],
				},
				scaleX: {
					value: [1, 0],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 1000,
				easing: "easeOutQuart",
				timeOffset: "-=1300",
			},
			{
				targets: ".layer4",
				rotate: {
					value: ["180", "180"],
				},
				scaleX: {
					value: [1, 0],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 1000,
				easing: "easeOutQuart",
				timeOffset: "-=1500",
			},
			{
				targets: ".layer5",
				rotate: {
					value: ["45", "45"],
				},
				scaleX: {
					value: [1, 0],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 1000,
				easing: "easeOutQuart",
				timeOffset: "-=1200",
			},
			{
				targets: ".layer6",
				rotate: {
					value: ["90", "90"],
				},
				scaleX: {
					value: [1, 0],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 1000,
				easing: "easeOutQuart",
				timeOffset: "-=1300",
			},
			{
				targets: ".layer7",
				rotate: {
					value: ["130", "130"],
				},
				scaleX: {
					value: [1, 0],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 1000,
				easing: "easeOutQuart",
				timeOffset: "-=1500",
			},
			{
				targets: ".layer8",
				rotate: {
					value: ["180", "180"],
				},
				scaleX: {
					value: [1, 0],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 1000,
				easing: "easeOutQuart",
				timeOffset: "-=1200",
			},
		],
	},
	{
		id: 31,
		name: "outro44",
		html: `<div class="outro-type outro44">
                <div class="outro-screen-cover"></div>
                <div class="outro-screen-cover cover2"></div>
                <div class="outro-content">
                    <div class="outro-shap-left">
                        <div class="outro-shap shap1"></div>
                        <div class="outro-shap shap2"></div>
                        <div class="outro-shap shap3"></div>
                    </div>
                    <div class="outro-shap-right">
                        <div class="outro-shap shap3"></div>
                        <div class="outro-shap shap2"></div>
                        <div class="outro-shap shap1"></div>
                    </div>
                    <div class="outro-brand-shap">
                        <div class="outro-logo">
                            <img src="1.png" alt="">
                        </div>
                    </div>
                    <div class="outro-brand-name">
                        <h1 class="brand-name-heading outro-brand-name-el">MOTHIONARRAY.COM</h1>
                    </div>
                    <div class="outro-brand-text">
                        <p class="text text1 outro-tagline-el">TWITTER.COM/MOTHIONARRAY.COM</p>
                    </div>
                </div>
                    <div class="layer layer1"></div>
                    <div class="layer layer2"></div>
                    <div class="layer layer3"></div>
                    <div class="layer layer4"></div>
                    <div class="layer layer5"></div>
                    <div class="layer layer6"></div>
                    <div class="layer layer7"></div>
                    <div class="layer layer8"></div>
                </div>
            </div>`,
		animeTimeline: [
			{
				targets: ".outro-screen-cover",
				scale: {
					value: [0, 0.1],
					duration: 400,
				},
				easing: "easeOutSine",
			},
			{
				targets: ".outro-screen-cover",
				scale: {
					value: [0.1, 0],
					duration: 400,
				},
				easing: "easeOutSine",
			},
			{
				targets: ".outro-screen-cover",
				scale: {
					value: [0, 2],
					duration: 2200,
				},
				easing: "easeOutSine",
			},
			{
				targets: ".cover2",
				scale: {
					value: [0, 2],
					duration: 2000,
				},
				easing: "easeOutSine",
				timeOffset: "-=1800",
			},
			{
				targets: ".outro-brand-shap",
				scale: {
					value: ["0", "1"],
				},
				rotateY: {
					value: ["-90", "0"],
				},
				duration: 800,
				easing: "linear",
				timeOffset: "-=1800",
			},
			{
				targets: ".brand-name-heading",
				translateY: {
					value: ["50px", "0"],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=1000",
			},
			{
				targets: ".text1",
				translateY: {
					value: ["50px", "0"],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 500,
				easing: "easeOutQuart",
				timeOffset: "-=800",
			},
			{
				targets: ".layer1",
				rotate: {
					value: ["45", "45"],
				},
				scaleX: {
					value: [1, 0],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 1000,
				easing: "easeOutQuart",
				timeOffset: "-=1500",
			},
			{
				targets: ".layer2",
				rotate: {
					value: ["90", "90"],
				},
				scaleX: {
					value: [1, 0],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 1000,
				easing: "easeOutQuart",
				timeOffset: "-=1200",
			},
			{
				targets: ".layer3",
				rotate: {
					value: ["115", "115"],
				},
				scaleX: {
					value: [1, 0],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 1000,
				easing: "easeOutQuart",
				timeOffset: "-=1300",
			},
			{
				targets: ".layer4",
				rotate: {
					value: ["180", "180"],
				},
				scaleX: {
					value: [1, 0],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 1000,
				easing: "easeOutQuart",
				timeOffset: "-=1500",
			},
			{
				targets: ".layer5",
				rotate: {
					value: ["45", "45"],
				},
				scaleX: {
					value: [1, 0],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 1000,
				easing: "easeOutQuart",
				timeOffset: "-=1200",
			},
			{
				targets: ".layer6",
				rotate: {
					value: ["90", "90"],
				},
				scaleX: {
					value: [1, 0],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 1000,
				easing: "easeOutQuart",
				timeOffset: "-=1300",
			},
			{
				targets: ".layer7",
				rotate: {
					value: ["130", "130"],
				},
				scaleX: {
					value: [1, 0],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 1000,
				easing: "easeOutQuart",
				timeOffset: "-=1500",
			},
			{
				targets: ".layer8",
				rotate: {
					value: ["180", "180"],
				},
				scaleX: {
					value: [1, 0],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 1000,
				easing: "easeOutQuart",
				timeOffset: "-=1200",
			},
		],
	},
	{
		id: 32,
		name: "outro31",
		html: `<div class="outro-type outro31">                
                <div class="outro-content">
                    <div class="outro-shadow shadow1">
                        <div class="outro-shadow shadow2">
                            <div class="outro-shadow shadow3">
                                <div class="outro-shadow shadow4">
                                    <div class="outro-brand-shap">
                                        <div class="outro-logo">
                                            <img src="1.png" alt="" >
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="outro-brand-name">
                        <h1 class="brand-name-heading heading1 outro-brand-name-el"> text enter first</h1>
                        <h1 class="brand-name-heading heading2 outro-tagline-el">Colorfull logo</h1>
                        <h1 class="brand-name-heading heading3">www.motionarray.com</h1>
                    </div>
                    <div class="outro-brand-text">
                        <p class="text text1">Your Server Name </p>
                    </div>
                </div>
            </div>`,
		animeTimeline: [
			{
				targets: ".shadow1",
				scale: {
					value: ["0.2", "0.2"],
				},
				translateY: {
					value: ["500px", "-800px"],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 500,
				easing: "linear",
			},
			{
				targets: ".shadow1",
				translateY: {
					value: ["-800px", "00"],
				},
				duration: 200,
				easing: "linear",
			},
			{
				targets: ".heading3",
				opacity: {
					value: [1, 0],
				},
				duration: 200,
				easing: "linear",
			},
			{
				targets: ".shadow1",
				scale: {
					value: ["0.2", "0.2"],
				},
				translateY: {
					value: ["0px", "-800px"],
				},
				duration: 300,
				easing: "linear",
			},
			{
				targets: ".shadow1",
				translateY: {
					value: ["-800px", "00"],
				},
				duration: 200,
				easing: "linear",
			},
			{
				targets: ".heading2",
				opacity: {
					value: [1, 0],
				},
				duration: 200,
				easing: "linear",
			},
			{
				targets: ".shadow1",
				translateY: {
					value: ["0px", "-800"],
				},
				duration: 500,
				easing: "easeInSine",
			},
			{
				targets: ".shadow1",
				translateY: {
					value: ["-800px", "00"],
				},
				duration: 500,
				easing: "easeOutBounce",
			},
			{
				targets: ".outro-brand-name",
				translateY: {
					value: ["25", "50"],
				},
				duration: 500,
				easing: "easeOutElastic",
				timeOffset: "-=300",
			},
			{
				targets: ".text1",
				translateX: {
					value: ["-5px", "0"],
				},
				opacity: {
					value: [0, 1],
				},
				duration: 500,
				easing: "easeOutQuart",
			},
			{
				targets: ".shadow1",
				scale: {
					value: ["0.2", "1"],
				},
				duration: 700,
				easing: "linear",
				timeOffset: "-=600",
			},
			{
				targets: ".shadow2",
				scale: {
					value: ["0", "1"],
				},
				duration: 700,
				easing: "linear",
				timeOffset: "-=700",
			},
			{
				targets: ".shadow3",
				scale: {
					value: ["0", "1"],
				},
				duration: 700,
				easing: "linear",
				timeOffset: "-=500",
			},
			{
				targets: ".shadow4",
				scale: {
					value: ["0", "1"],
				},
				duration: 700,
				easing: "linear",
				timeOffset: "-=500",
			},
			{
				targets: ".outro-brand-shap",
				scale: {
					value: ["0", "1"],
				},
				duration: 700,
				easing: "linear",
				timeOffset: "-=500",
			},
			{
				targets: ".outro-logo",
				scale: {
					value: ["0", "1"],
				},
				duration: 2000,
				easing: "easeOutElastic",
				timeOffset: "-=500",
			},
		],
	},
];

outroAnimations.map((val, index) => {
	const applyProperties = function ({ data, options }) {
		let elem = this;

		let elemChildrens = {
			content: elem.querySelector(".outro-content"),
			logoImg: elem.querySelector(".outro-logo img"),
			brandName: elem.querySelector(".outro-brand-name-el"),
			tagline: elem.querySelector(".outro-tagline-el"),
			website: elem.querySelector(".outro-website-el"),
		};

		elemChildrens.logoImg.src = options.fullLogoSrc;
		/* if (options.renderPreview) {
            elemChildrens.content.classList.add("remote-render-preview");
        } */

		elemChildrens.brandName.innerText = data.brandName;
		elemChildrens.tagline.innerText = data.tagline;
		if (elemChildrens.website) {
			elemChildrens.website.innerText = data.website;
		}

		twemoji.parse(elemChildrens.content);
	};
	val.getMarkup = (params) => {
		let htmlNode = new DOMParser();
		htmlNode = htmlNode.parseFromString(val.html, "text/html");
		htmlNode = htmlNode.body.children[0];

		htmlNode.applyProperties = applyProperties;
		htmlNode.applyProperties(params);

		return htmlNode;
	};
	return val;
});
export default outroAnimations;
