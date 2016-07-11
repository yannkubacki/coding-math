import Lissajous from './Lissajous';

class Fireflies {

	constructor(options) {

		this.context = options.context;
		this.width = options.width;
		this.height = options.height;

		this.firefliesSize = options.size;
		this.firefliesColor = options.color;
		this.firefliesNumber = options.number;
		this.radiusX = options.radiusX;
		this.radiusY = options.radiusY;
		this.speedX = options.speedX;
		this.speedY = options.speedY;
		this.centerX = this.width * .5;
		this.centerY = this.height * .5;

		this.init();
		this.bindEvents();

	}

	init() {

		this.fireflies = [];

		for (let i = 0; i < this.firefliesNumber; i++) {

			const firefly = new Lissajous({
				context : this.context,
				width : this.width,
				height : this.height,
				size : this.firefliesSize,
				color : this.firefliesColor,
				radiusX : Math.random() * this.radiusX,
				radiusY : Math.random() * this.radiusY,
				speedX : Math.random() * this.speedX,
				speedY : Math.random() * this.speedY,
				centerX : this.centerX,
				centerY : this.centerY
			});

			this.fireflies.push(firefly)

		}

		console.log(this.fireflies)

	}

	bindEvents() {

		window.addEventListener('mousemove', this.centerChange.bind(this));

	}

	centerChange(e) {

		this.centerX = e.clientX;
		this.centerY = e.clientY;

	}

	update() {

		for (let i = 0; i < this.fireflies.length; i++) {

			this.fireflies[i].update(this.centerX, this.centerY);

		}

	}

}

export default Fireflies;