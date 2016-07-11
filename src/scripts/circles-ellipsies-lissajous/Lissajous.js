class Lissajous {

	constructor(options) {

		this.context = options.context;
		this.width = options.width;
		this.height = options.height;
		this.centerX = options.centerX;
		this.centerY = options.centerY;

		this.size = options.size
		this.color = options.color
		this.radiusX = options.radiusX;
		this.radiusY = options.radiusY;
		this.angleX = 0;
		this.angleY = 0;
		this.speedX = options.speedX;
		this.speedY = options.speedY;

	}

	update(centerX = this.centerX, centerY = this.centerY) {

		const x = centerX + (Math.cos(this.angleX) * this.radiusX);
		const y = centerY + (Math.sin(this.angleY) * this.radiusY);

		this.context.beginPath();
		this.context.arc(x, y, this.size, 0, 2 * Math.PI, false);
		this.context.fillStyle = this.color;
		this.context.fill();

		this.angleX += this.speedX;
		this.angleY += this.speedY;

	}

}

export default Lissajous;