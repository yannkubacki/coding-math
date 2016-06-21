window.onload = () => {

	let canvas = document.getElementById('canvas'),
		context = canvas.getContext('2d'),
		width = canvas.width = window.innerWidth,
		height = canvas.height = window.innerHeight

		context.fillRect(100,100,200,200,'#0000ff')

}