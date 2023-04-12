const audioFiles = ["IM-A_GOING_TO_CUM.mp3", "Stardew_valley_harvesting_berries.wav", "eheh.mp3", "late_night_squeexin.mp3", "marker_bit_1.wav", "ohoh.mp3", "pamplemousse.wav", "quieres.wav", "squeexing-it.mp3", "toomyah.mp3", "Make_your_bed_in_the_morning_2.mp3"];

const CONTAINER = document.getElementById('list-container');
const TEMPLATE = document.getElementById('template');

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
	source.setAttribute('src', filename);
	source.setAttribute('type', type);

	CONTAINER.append(node);
});