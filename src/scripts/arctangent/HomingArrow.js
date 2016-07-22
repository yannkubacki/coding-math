class HomingArrow {

	constructor(options) {

		this.context = options.context;
		this.width = options.width;
		this.height = options.height;
		this.centerX = options.centerX;
		this.centerY = options.centerY;

		this.color = options.color;

		this.angle = 0;
		this.mouseX = 0;
		this.mouseY = 0;

		this.bindEvents();

	}

	bindEvents() {

		window.addEventListener('mousemove', this.calculateAngle.bind(this));

	}

	calculateAngle(e) {

		this.mouseX = e.clientX - this.centerX;
		this.mouseY = e.clientY - this.centerY;

		this.angle = Math.atan2(this.mouseY, this.mouseX);

	}

	update() {

		this.context.save();

		this.context.translate(this.centerX, this.centerY);
		this.context.rotate(this.angle);

		this.context.beginPath();
		this.context.moveTo(20, 0);
		this.context.lineTo(-20, 0);
		this.context.moveTo(20, 0);
		this.context.lineTo(10, -10);
		this.context.moveTo(20, 0);
		this.context.lineTo(10, 10);
		this.context.strokeStyle = this.color;
		this.context.stroke();

		this.context.restore();

	}

}

// INIT EXAMPLE
// this.homingArrow = new HomingArrow({
// 		context : this.context,
// 		width : this.width,
// 		height : this.height,
// 		centerX : this.width * .5,
// 		centerY : this.height * .5,
// 		color : '#ffffff'
// });

export default HomingArrow