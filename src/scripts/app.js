import { debounce } from 'lodash';

import Flashpoint from './trigonometry/Flashpoint';
import Circle from './circles-ellipsies-lissajous/Circle';
import Ellipse from './circles-ellipsies-lissajous/Ellipse';
import Lissajous from './circles-ellipsies-lissajous/Lissajous';
import Fireflies from './circles-ellipsies-lissajous/Fireflies';
import HomingArrow from './arctangent/HomingArrow';

class App {

	constructor() {

		this.canvas = document.getElementById('canvas');
		this.context = this.canvas.getContext('2d');
		this.width = this.canvas.width = window.innerWidth;
		this.height = this.canvas.height = window.innerHeight;

		this.init();
		this.render();
		this.bindEvents();

	}

	init() {

		// this.flashpoint = new Flashpoint(this.context, this.width, this.height, 100, .1);
		// this.circle = new Circle(this.context, this.width, this.height, 100, .1);
		// this.ellipse = new Ellipse(this.context, this.width, this.height, 200, 30, .1);

		// this.fireflies = new Fireflies({
		// 	context : this.context,
		// 	width : this.width,
		// 	height : this.height,
		// 	size : 2,
		// 	color : '#f1c40f',
		// 	number : 100,
		// 	radiusX : 500,
		// 	radiusY : 500,
		// 	speedX : .05,
		// 	speedY : .05
		// });

		this.homingArrow = new HomingArrow({
				context : this.context,
				width : this.width,
				height : this.height,
				centerX : this.width * .5,
				centerY : this.height * .5,
				color : '#ffffff'
		});

	}

	bindEvents() {

		window.addEventListener('resize', debounce(this.resize.bind(this), 100));

	}

	resize() {

		this.width = this.canvas.width = window.innerWidth;
		this.height = this.canvas.height = window.innerHeight;

		this.init();

	}

	render() {

		this.context.clearRect(0, 0, this.width, this.height);

		// this.flashpoint.update();
		// this.circle.update();
		// this.ellipse.update();
		// this.fireflies.update();

		this.homingArrow.update();
		
		requestAnimationFrame(this.render.bind(this));

	}

}

export default App