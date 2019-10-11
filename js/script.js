let count = 0;
let isActive = true;
let colors = ['#E91E63', '#9C27B0', '#009688', '#3F51B5'];
let bg = document.getElementsByClassName('wrapper-1')[0];

// Set interval to change background pages.
setInterval(function () {

	if (isActive) {
		// Set Background
		bg.style.backgroundColor = colors[count];
		count++;

		// Reset
		if (count == colors.length) {
			count = 0;
		}
	}

}, 5000);


/**
 * Overlay pages
 */
function about() {
	let el = document.getElementById('about');

	count = 1;
	isActive = false;
	display(el);
}

function portfolio() {
	let el = document.getElementById('portfolio');
	
	count = 2;
	isActive = false;
	display(el);
}

function skills() {
	let el = document.getElementById('skills');
	
	count = 0;
	isActive = false;
	display(el);
}

function hire() {
	let el = document.getElementById('hire');

	count = 3;	
	isActive = false;
	display(el);
}

function display(el) {
	
	el.style.display = 'block';
	bg.style.backgroundColor = colors[count];	
}

/*
 * Close overlay
 */
function closeMe(el) {
	isActive = true;
	el.parentNode.style.display = 'none';
}