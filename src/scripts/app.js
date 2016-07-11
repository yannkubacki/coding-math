import { debounce } from 'lodash';

import Flashpoint from './trigonometry/Flashpoint';
import Circle from './circles-ellipsies-lissajous/Circle';

class App {

	constructor() {

		this.canvas = document.getElementById('canvas');
		this.context = this.canvas.getContext('2d');
		this.width = this.canvas.width = window.innerWidth;
		this.height = this.canvas.height = window.innerHeight;

		this.setup();
		this.render();
		this.bindEvents();

	}

	setup() {

		this.flashpoint = new Flashpoint(this.context, this.width, this.height, 100, .1);
		this.circle = new Circle(this.context, this.width, this.height, 100, .1);
		this.circle2 = new Circle(this.context, this.width, this.height, 200, .01);

	}

	bindEvents() {

		window.addEventListener('resize', debounce(this.resize.bind(this), 100));

	}

	resize() {

		this.width = this.canvas.width = window.innerWidth;
		this.height = this.canvas.height = window.innerHeight;

		this.setup();

	}

	render() {

		this.context.clearRect(0, 0, this.width, this.height);

		this.flashpoint.update();
		this.circle.update();
		this.circle2.update();

		requestAnimationFrame(this.render.bind(this));

	}

}

export default App