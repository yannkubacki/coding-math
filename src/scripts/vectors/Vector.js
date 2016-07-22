class Vector {

	constructor(x = 0, y = 0) {

		this.x = x;
		this.y = y;

	}

	setAngle(angle) {

		const length = this.getLength();
		this.x = Math.cos(angle) * length;
		this.y = Math.sin(angle) * length;

	}

	getAngle() {

		return Math.atan2(this.y,this.x);

	}

	setLength(length) {

		const angle = this.getAngle();
		this.x = Math.cos(angle) * length;
		this.y = Math.sin(angle) * length;

	}

	getLength() {

		return Math.sqrt((this.x * this.x) + (this.y * this.y));

	}

	add(v2) {

		return new Vector(this.x + v2.x, this.y + v2.y);

	}

	addTo(v2) {

		this.x += v2.x;
		this.y += v2.y;

	}

	substract(v2) {

		return new Vector(this.x - v2.x, this.y - v2.y);

	}

	substractBy(v2) {

		this.x -= v2.x;
		this.y -= v2.y;

	}

	multiply(val) {

		return new Vector(this.x * val, this.y * val);

	}

	multiplyBy(val) {

		this.x *= val;
		this.y *= val;

	}

	divide(val) {

		return new Vector(this.x / val, this.y / val);

	}

	divideBy(val) {

		this.x /= val;
		this.y /= val;

	}

}

export default Vector