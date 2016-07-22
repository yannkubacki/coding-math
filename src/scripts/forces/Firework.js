import Particle from '../forces/Particle';

class Firework {

	constructor(options) {

		this.context = options.context;
		this.particles = [];
		this.particlesNb = options.particlesNb;
		this.particlesSize = options.particlesSize;


		for(let i = 0; i < this.particlesNb; i++) {

			const particle = new Particle(options.centerX, options.centerY, Math.random() * options.maxSpeed, Math.random() * Math.PI * 2, options.gravity);
			this.particles.push(particle);

		}

	}

	update() {

		for(let i = 0, j = this.particles.length; i < j; i++) {

			const particle = this.particles[i];
			particle.update();
			this.context.beginPath();
			this.context.arc(particle.position.x, particle.position.y, this.particlesSize, 0, Math.PI * 2, false);
			this.context.fillStyle = '#ffffff';
			this.context.fill();

		}

	}

}

export default Firework