const audioFiles = [
	"bazinga (2).wav",
	"bazinga (3).wav",
	"bazinga (4).wav",
	"bazinga (5).wav",
	"bazinga (6).wav",
	"bozo (1).wav",
	"bozo (2).wav",
	"busting a nut.wav",
	"Clench my ass.mp3",
	"cocka.wav",
	"Come on mario.mp3",
	"crushed by king whomp.wav",
	"edging.wav",
	"eheh.mp3",
	"fuck a fan canceled (1).wav",
	"fuck a fan canceled (2).wav",
	"fuck a fan is back on.wav",
	"GULP.wav",
	"I am going to cum.wav",
	"I'm-a going to cum.mp3",
	"koopas (1).wav",
	"koopas (2).wav",
	"koopas (3).wav",
	"kramer jerry.wav",
	"late_night_squeexin.mp3",
	"Make your bed in the morning (1).mp3",
	"Make your bed in the morning (2).mp3",
	"Make_your_bed_in_the_morning_2.mp3",
	"marker bit.wav",
	"marker_bit_1.wav",
	"meow.wav",
	"minecraft villager.wav",
	"More at 7 (1).mp3",
	"More at 7 (2).mp3",
	"More at 7 (3).mp3",
	"More at 7 (4).mp3",
	"More at 7 (5).mp3",
	"obama sasha malia (1).wav",
	"obama sasha malia (2).wav",
	"obama stimulate your economy.wav",
	"obama y'know.wav",
	"ohoh.mp3",
	"pamplemousse.wav",
	"quieres.wav",
	"rock hard for whomps.wav",
	"SAJ.mp3",
	"seinfeld kramer (1).wav",
	"seinfeld kramer (2).wav",
	"seinfeld speed walking.wav",
	"seinfeld what's up with that.wav",
	"show us your pants.wav",
	"Spongebob O sounds.mp3",
	"Squeex play minecwaf.wav",
	"squeexing-it.mp3",
	"Stardew valley harvesting berries.wav",
	"testicles.wav",
	"Thanks for the head.mp3",
	"This goes out to all the believers.wav",
	"This is BBC news.mp3",
	"This is my fucking nightmare.mp3",
	"Toad awawawawa.mp3",
	"toomyah.mp3",
	"walkin (1).wav",
	"walkin (2).wav",
	"walkin (3).wav",
	"Wanna go for a ride jump on my hog.mp3",
	"well gary (1).wav",
	"well gary (2).wav",
	"well gary (3).wav",
	"well gary (4).wav",
	"yoshi (1).wav",
	"yoshi (2).wav",
	"yoshi (3).wav",
];

const CONTAINER = document.getElementById('list-container');
const TEMPLATE = document.getElementById('template');
const AUDIO_DIR = 'audio';

audioFiles.forEach(filename => {
	const node = TEMPLATE.cloneNode(true);
	node.removeAttribute('hidden');
	node.removeAttribute('id');

	const title = node.querySelector('div');
	const source = node.querySelector('source');

	title.innerText = filename.split('.')[0];
	const ext = filename.split('.').pop().toLowerCase();
	let type;
	if (ext === 'mp3') {
		type = 'audio/mpeg';
	} else if (ext === 'wav') {
		type = 'audio/wav';
	}
	source.setAttribute('src', AUDIO_DIR + '/' + filename);
	source.setAttribute('type', type);

	CONTAINER.append(node);
});