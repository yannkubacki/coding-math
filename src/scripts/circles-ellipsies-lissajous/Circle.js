class Circle {

	constructor(context, width, height, radius, speed) {

		this.context = context;
		this.width = width;
		this.height = height;
		this.centerX = width * .5;
		this.centerY = height * .5;

		this.radius = radius;
		this.angle = 0;
		this.speed = speed;


	}

	update() {

		const x = this.centerX + (Math.cos(this.angle) * this.radius);
		const y = this.centerY + (Math.sin(this.angle) * this.radius);

		this.context.beginPath();
		this.context.arc(x, y, 10, 0, 2 * Math.PI, false);
		this.context.fill();

		this.angle += this.speed;

	}

}

export default Circle;