class Flashpoint {

	constructor(context, width, height, offset, speed) {

		this.context = context;
		this.width = width;
		this.height = height;
		this.centerX = width * .5;
		this.centerY = height * .5;
		
		this.offset = offset;
		this.speed = speed;
		this.angle = 0;
		this.baseRadius = 0;

	}

	update() {

		const x = this.centerX + (Math.sin(this.angle) * this.offset);
		const y = this.centerY + (Math.sin(this.angle) * this.offset);
		const radius = this.baseRadius +(Math.sin(this.angle) * 100);

		this.context.beginPath();
		this.context.arc(x, y, Math.random() * 10, 0, Math.PI * 2, false);
		this.context.fillStyle = '#000000';
		this.context.fill();

		this.angle += this.speed;

	}

}

export default Flashpoint;