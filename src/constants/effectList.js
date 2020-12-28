let effects = [
	{
		name: "Snow Falling",
		thumb: "assets/effects/1-snow-fall/snow.jpg",
		video: {
			preview: "assets/effects/1-snow-fall/Snow+Fall.mp4",
			editor: "assets/effects/1-snow-fall/small.webm",
		},
		duration: 56.08,
	},
	{
		name: "Money Falling",
		thumb: "assets/effects/2-money-fall/money.jpg",
		video: {
			preview: "assets/effects/2-money-fall/Money.mp4",
			editor: "assets/effects/2-money-fall/small.webm",
		},
		duration: 17.24,
	},
	{
		name: "Rose",
		thumb: "assets/effects/3-rose/rose.jpg",
		video: {
			preview: "assets/effects/3-rose/Rose.mp4",
			editor: "assets/effects/3-rose/small.webm",
		},
		duration: 11.08,
	},
	{
		name: "Falling Strawberries",
		thumb: "assets/effects/5-strawberries/strawberries.jpg",
		video: {
			preview: "assets/effects/5-strawberries/5-Strawberries.mp4",
			editor: "assets/effects/5-strawberries/small.webm",
		},
		duration: 7.32,
	},
	{
		name: "Confetti",
		thumb: "assets/effects/6-confetti/6-Confetti.jpg",
		video: {
			preview: "assets/effects/6-confetti/6-Confetti.mp4",
			editor: "assets/effects/6-confetti/small.webm",
		},
		duration: 11.56,
	},
	{
		name: "Falling Down Coins",
		thumb: "assets/effects/7-falling-down-coins/7-Falling+Down+Coins.jpg",
		video: {
			preview: "assets/effects/7-falling-down-coins/7-Falling+Down+Coins.mp4",
			editor: "assets/effects/7-falling-down-coins/small.webm",
		},
		duration: 18.88,
	},
	{
		name: "Falling Feathers",
		thumb: "assets/effects/8-falling-feathers/8-Falling+Feathers.jpg",
		video: {
			preview: "assets/effects/8-falling-feathers/8-Falling+Feathers.mp4",
			editor: "assets/effects/8-falling-feathers/small.webm",
		},
		duration: 20.56,
	},
	{
		name: "Leaf 1",
		thumb: "assets/effects/10-Leaf-1/10-Leaf-1.jpg",
		video: {
			preview: "assets/effects/10-Leaf-1/10-Leaf-1.mp4",
			editor: "assets/effects/10-Leaf-1/small.webm",
		},
		duration: 29,
	},
	{
		name: "Leaf 2",
		thumb: "assets/effects/11-Leaf-2/11-Leaf-2.jpg",
		video: {
			preview: "assets/effects/11-Leaf-2/11-Leaf-2.mp4",
			editor: "assets/effects/11-Leaf-2/small.webm",
		},
		duration: 29,
	},
	{
		name: "Leaf 3",
		thumb: "assets/effects/13-Leaf-3/13-Leaf-3.jpg",
		video: {
			preview: "assets/effects/13-Leaf-3/13-Leaf-3.mp4",
			editor: "assets/effects/13-Leaf-3/small.webm",
		},
		duration: 29,
	},
	{
		name: "Dounuts",
		thumb: "assets/effects/9-falling-donuts-with/9-Falling-Donuts-with.jpg",
		video: {
			preview: "assets/effects/9-falling-donuts-with/9-Falling-Donuts-with.mp4",
			editor: "assets/effects/9-falling-donuts-with/small.webm",
		},
		duration: 16.12,
	},
	{
		name: "Star Falling",
		thumb: "assets/effects/16-star-falling/16-Star+Falling.jpg",
		video: {
			preview: "assets/effects/16-star-falling/16-Star+Falling.mp4",
			editor: "assets/effects/16-star-falling/small.webm",
		},
		duration: 24.04,
	},
	{
		name: "Hearts",
		thumb: "assets/effects/14-likes-hearts-firework/14-Likes+Hearts+Firework.jpg",
		video: {
			preview: "assets/effects/14-likes-hearts-firework/14-Likes+Hearts+Firework.mp4",
			editor: "assets/effects/14-likes-hearts-firework/small.webm",
		},
		duration: 14.64,
	},
	{
		name: "Rain Effect",
		thumb: "assets/effects/15-rain-effect/15-Rain+Effect.jpg",
		video: {
			preview: "assets/effects/15-rain-effect/15-Rain+Effect.mp4",
			editor: "assets/effects/15-rain-effect/small.webm",
		},
		duration: 8.32,
	},
	{
		name: "Real Snow",
		thumb: "assets/effects/4-real-snow-fall/real-snow.jpg",
		video: {
			preview: "assets/effects/4-real-snow-fall/Snow+Falling-2.mp4",
			editor: "assets/effects/4-real-snow-fall/small.webm",
		},
		duration: 17.44,
	},
	{
		name: "Butterflies",
		thumb: "assets/effects/12-blue-butterfly/butterfly.jpg",
		video: {
			preview: "assets/effects/12-blue-butterfly/Blue+Butterflies.mp4",
			editor: "assets/effects/12-blue-butterfly/small.webm",
		},
		duration: 51.6,
	},
	{
		name: "Flying Likes",
		thumb: "assets/effects/17-facebook-likes/likes.jpg",
		video: {
			preview: "assets/effects/17-facebook-likes/Many+Likes.mp4",
			editor: "assets/effects/17-facebook-likes/small.webm",
		},
		duration: 9.56,
	},
	{
		name: "Falling Dandelions",
		thumb: "assets/effects/18-falling-dls/falling-dls.jpg",
		video: {
			preview: "assets/effects/18-falling-dls/Falling+Dandelions.mp4",
			editor: "assets/effects/18-falling-dls/small.webm",
		},
		duration: 11.44,
	},
	{
		name: "Smoke",
		thumb: "assets/effects/19-smoke/smoke.jpg",
		video: {
			preview: "assets/effects/19-smoke/Smoke.mp4",
			editor: "assets/effects/19-smoke/small.webm",
		},
		duration: 17.36,
	},
	{
		name: "Heart Ballon",
		thumb: "assets/effects/20-heart-ballon/thumb.jpg",
		video: {
			preview: "assets/effects/20-heart-ballon/Hearts+Baloon.mp4",
			editor: "assets/effects/20-heart-ballon/small.webm",
		},
		duration: 10,
	},
];
let _ = {
	fullscreen: effects.map((val, index) => {
		val.id = index + 1;
		return val;
	}),
};

export default _;
