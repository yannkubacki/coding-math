class Flashpoint {

	constructor(context,width,height) {

		this.context = context;
		this.width = width;
		this.height = height;
		this.centerX = width * .5;
		this.centerY = height * .5;
		this.offset = 50;
		this.speed = .1;
		this.angle = 0;
		this.baseRadius = 0;

	}

	render() {

		const x = this.centerX + (Math.sin(this.angle) * this.offset);
		const y = this.centerY + (Math.sin(this.angle) * this.offset);
		const radius = this.baseRadius +(Math.sin(this.angle) * 100);

		this.context.clearRect(0, 0, this.width, this.height);
		this.context.beginPath();
		this.context.arc(x, y, Math.random() * 10, 0, Math.PI * 2, false);
		this.context.fillStyle = '#000000';
		this.context.fill();

		this.angle += this.speed;


		requestAnimationFrame(this.render.bind(this));

	}

}

export default Flashpoint;