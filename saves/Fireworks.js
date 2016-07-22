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

	GUIConfig() {

		const datGuiConfig = {
		    particlesNb : this.fireworksOptions.particlesNb,
			particlesSize : this.fireworksOptions.particlesSize,
			maxSpeed : this.fireworksOptions.maxSpeed,
			gravity : this.fireworksOptions.gravity
	    };

	    this.gui = new Dat.GUI();

	    this.gui.add(datGuiConfig, 'particlesNb').min(10).max(1000).step(10).onChange((particlesNb) => {
    		this.fireworksOptions.particlesNb = particlesNb;
    	});
    	this.gui.add(datGuiConfig, 'particlesSize').min(1).max(10).step(1).onChange((particlesSize) => {
    		this.fireworksOptions.particlesSize = particlesSize;
    	});
    	this.gui.add(datGuiConfig, 'maxSpeed').min(1).max(20).step(.1).onChange((maxSpeed) => {
    		this.fireworksOptions.maxSpeed = maxSpeed;
    	});
    	this.gui.add(datGuiConfig, 'gravity').min(0).max(5).step(.1).onChange((gravity) => {
    		this.fireworksOptions.gravity = gravity;
    	});

	}

	init() {

		this.fireworks = [];
		this.fireworksOptions = {
			context : this.context,
			particlesNb : 100,
			particlesSize : 5,
			maxSpeed : 10,
			gravity : .1
		};

	}

	bindEvents() {

		window.addEventListener('resize', debounce(this.resize.bind(this), 100));
		window.addEventListener('click', this.clickHandler.bind(this));

	}

	clickHandler(e) {

		const firework = new Firework(Object.assign({},this.fireworksOptions, {
			centerX : e.clientX,
			centerY : e.clientY
		}));

		this.fireworks.push(firework);

	}

	resize() {

		this.width = this.canvas.width = window.innerWidth;
		this.height = this.canvas.height = window.innerHeight;

		this.init();

	}

	render() {

		this.context.clearRect(0, 0, this.width, this.height);

		for(let i = 0, j = this.fireworks.length; i < j; i++) {
			 
			const firework = this.fireworks[i];
			firework.update();

		}
		
		requestAnimationFrame(this.render.bind(this));

	}

}

export default App