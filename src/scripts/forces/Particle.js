import Vector from '../vectors/Vector';

class Particle {

	constructor(x, y, speed, direction, gravity = 0) {

		this.position = new Vector(x, y); 
		this.velocity = new Vector(); 
		this.velocity.setLength(speed);
		this.velocity.setAngle(direction);
		this.gravity = new Vector(0, gravity);

	}

	accelerate(acceleration) {

		this.velocity.addTo(acceleration);

	}

	update() {

		this.velocity.addTo(this.gravity);
		this.position.addTo(this.velocity);

	}

}

export default Particle