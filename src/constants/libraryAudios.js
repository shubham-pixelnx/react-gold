let libraryAudios = [
	{
		name: "Little Idea",
		url: `assets/music/bensound-littleidea.mp3`,
	},
	{
		name: "Inspire",
		url: `assets/music/bensound-inspire.mp3`,
	},
	{
		name: "Hey!",
		url: `assets/music/bensound-hey.mp3`,
	},
	{
		name: "Energy",
		url: `assets/music/bensound-energy.mp3`,
	},
	{
		name: "Dreams",
		url: `assets/music/bensound-dreams.mp3`,
	},
	{
		name: "Guitar",
		url: `assets/music/guitar.mp3`,
	},
	{
		name: "Groovy Hip Hop",
		url: `assets/music/bensound-groovyhiphop.mp3`,
	},
	{
		name: "Summer",
		url: `assets/music/bensound-summer.mp3`,
	},
	{
		name: "Tenderness",
		url: `assets/music/bensound-tenderness.mp3`,
	},
	{
		name: "Cute",
		url: `assets/music/bensound-cute.mp3`,
	},
	{
		name: "Beyond The Line",
		url: `assets/music/bensound-beyondtheline.mp3`,
	},
	{
		name: "Endless Motion",
		url: `assets/music/bensound-endlessmotion.mp3`,
	},
];
libraryAudios.map((val, index) => {
	return (val.id = index + 1);
});
export default libraryAudios;
