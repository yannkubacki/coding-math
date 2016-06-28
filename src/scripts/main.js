import Flashpoint from './trigonometry/Flashpoint'

window.onload = function() {

	const canvas = document.getElementById('canvas'),
		context = canvas.getContext('2d'),
		width = canvas.width = window.innerWidth,
		height = canvas.height = window.innerHeight

		this.flashpoint = new Flashpoint(context, width, height);
		this.flashpoint.render();
}