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
		this.GUIConfig();

	}

	init() {

		this.guiOptions = {
			mass: 20000
		}

		this.sun = new Particle(this.width / 2, this.height / 2, 0, 0, this.guiOptions.mass);
		this.planet = new Particle(this.width / 2 + 200, this.height / 2, 10, -Math.PI / 2);

	}

	GUIConfig() {

		const datGuiConfig = {
		    mass: this.guiOptions.mass
	    };

	    this.gui = new Dat.GUI();

	    this.gui.add(datGuiConfig, 'mass').min(10000).max(500000).step(1000).onChange((mass) => {
    		this.guiOptions.mass = mass;
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

		this.sun.mass = this.guiOptions.mass;

		this.planet.gravitateTo(this.sun);
		this.planet.update();

		this.context.beginPath();
		this.context.fillStyle = '#ffff00';
		this.context.arc(this.sun.position.x, this.sun.position.y, 30, 0, Math.PI * 2, false);
		this.context.fill();

		this.context.beginPath();
		this.context.fillStyle = '#00ffff';
		this.context.arc(this.planet.position.x, this.planet.position.y, 10, 0, Math.PI * 2, false);
		this.context.fill();

		requestAnimationFrame(this.render.bind(this));

	}

}

export default App