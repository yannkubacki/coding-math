import Vector from '../vectors/Vector';

class Particle {

	constructor(x, y, speed, direction, mass = 1) {

		this.position = new Vector(x, y); 
		this.velocity = new Vector(); 
		this.velocity.setLength(speed);
		this.velocity.setAngle(direction);
		this.mass = mass;

	}

	accelerate(acceleration) {

		this.velocity.addTo(acceleration);

	}

	angleTo(p2) {

		return Math.atan2(p2.position.y - this.position.y, p2.position.x - this.position.x);

	}

	distanceTo(p2) {

		const dx = p2.position.x - this.position.x;
		const dy = p2.position.y - this.position.y;

		return Math.sqrt(dx * dx + dy * dy);

	}

	gravitateTo(p2) {

		let gravity = new Vector();
		const distance = this.distanceTo(p2);

		console.log(distance, 'distance');
		console.log(this.angleTo(p2), 'angle');

		// G = Mass / (distance * distance)
		gravity.setLength(p2.mass / (distance * distance));
		gravity.setAngle(this.angleTo(p2));

		this.velocity.addTo(gravity);

	}

	update() {

		this.position.addTo(this.velocity);

	}

}

export default Particle