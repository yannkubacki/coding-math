import { debounce } from 'lodash';
import Dat from 'dat-gui';

// import Flashpoint from './trigonometry/Flashpoint';
// import Circle from './circles-ellipsies-lissajous/Circle';
// import Ellipse from './circles-ellipsies-lissajous/Ellipse';
// import Lissajous from './circles-ellipsies-lissajous/Lissajous';
// import Fireflies from './circles-ellipsies-lissajous/Fireflies';
// import HomingArrow from './arctangent/HomingArrow';
import Vector from './vectors/Vector';
import Particle from './forces/Particle';
import Firework from './forces/Firework';

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

		this.ship = new Particle(this.width / 2, this.height / 2, 0, 0, 0);
		this.thrust = new Vector();
		this.angle = 0;
		this.isThrusting = false;
		this.isBreaking= false;
		this.isTurningLeft = false;
		this.isTurningRight = false;

	}

	bindEvents() {

		window.addEventListener('resize', debounce(this.resize.bind(this), 100));

		window.addEventListener('keydown', this.keydownHandler.bind(this));
		window.addEventListener('keyup', this.keyupHandler.bind(this));

	}

	keydownHandler(e) {

		switch(e.keyCode) {

			// up
			case 38:
				this.isThrusting = true;
			break;

			// down
			case 40:
				this.isBreaking = true;
			break;

			// left
			case 37:
				this.isTurningLeft = true;
			break;

			// right
			case 39:
				this.isTurningRight = true;
			break;

			default:
			break;

		}

	}

	keyupHandler(e) {

		switch(e.keyCode) {

			// up
			case 38:
				this.isThrusting = false;
			break;

			// down
			case 40:
				this.isBreaking = false;
			break;

			// left
			case 37:
				this.isTurningLeft = false;
			break;

			// right
			case 39:
				this.isTurningRight = false;
			break;

			default:
			break;

		}

	}

	resize() {

		this.width = this.canvas.width = window.innerWidth;
		this.height = this.canvas.height = window.innerHeight;

		this.init();

	}

	render() {

		this.context.clearRect(0, 0, this.width, this.height);

		if(this.isTurningLeft){
			this.angle -= .05;
		}
		if(this.isTurningRight){
			this.angle += .05;
		}

		this.thrust.setAngle(this.angle);

		if(this.isThrusting) {
			this.thrust.setLength(.1);
		} else {
			this.thrust.setLength(0);
		}

		this.ship.accelerate(this.thrust);
		this.ship.update();

		this.context.save();
		this.context.translate(this.ship.position.x, this.ship.position.y);
		this.context.rotate(this.angle);

		this.context.beginPath();
		this.context.moveTo(10, 0);
		this.context.lineTo(-10, -7);
		this.context.lineTo(-10, 7);
		this.context.lineTo(10, 0);
		this.context.strokeStyle = '#ffffff';
		this.context.stroke();

		this.context.restore();

		if(this.ship.position.x < 0){
			this.ship.position.x = this.width;
		}
		if(this.ship.position.x > this.width){
			this.ship.position.x = 0;
		}
		if(this.ship.position.y < 0){
			this.ship.position.y = this.height;
		}
		if(this.ship.position.y > this.height){
			this.ship.position.y = 0;
		}

		requestAnimationFrame(this.render.bind(this));

	}

}

export default App