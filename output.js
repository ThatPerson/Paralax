var canvas = document.getElementById('cont');
var context = canvas.getContext('2d');
var mode = 0;

function update_screen() {
	var viewport_x = canvas.width/2;
	var viewport_y = canvas.height/2;
	for (i = 0; i < Particles.length; i++) {

		context.beginPath();
		if (mode == 1) {
			context.arc(viewport_x+Particles[i].x,viewport_y+Particles[i].y, 1, 0, 2 * Math.PI, true);
		} else {
			context.arc(viewport_x+Particles[i].x,viewport_y+Particles[i].y, Particles[i].m, 0, 2 * Math.PI, true);
		}
		console.log(Particles[i].m);
		context.fillStyle = 'blue';
		context.fill();
		context.closePath();
	}
}

function update_all() {
	
	Particles = wait_g(Particles, 0.1);
	if (mode == 0) {
		context.clearRect(0,0,canvas.width,canvas.height);
	}
	update_screen(Particles);
}

setInterval(update_all, 100);

window.addEventListener('resize', resizeCanvas, false);

function resizeCanvas() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	update_all();
}

function key_down(e) {
	if (e.keyCode == 78) {
		if (mode == 0){
			mode = 1
			context.clearRect(0,0,canvas.width,canvas.height);
		}
	}
}
function key_up(e) {
	if (e.keyCode == 78) {
		mode = 0
	}
}

window.addEventListener('keydown',key_down,true);
window.addEventListener('keyup',key_up,true);

resizeCanvas();
