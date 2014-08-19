var Particles = [];

function reduce(l, i) {
	while (l >= i) {
		l = l - i;
	}
	return l;
}

function Vector(m, a) {
	x = 0;
	y = 0;
	// We can use trignometry. 
	// If a > 0 but < 90 then we use sin to find x, and cos to find y.
	// If a > 90 but < 180 then we use sin to find y and cos to find x. (having reduced a)
	// If a > 180 but < 270 then we use sin to find x and cos to find y.
	// If a > 270 but < 360 then we use sin to find y and cos to find x.
	a = reduce(a, 2*Math.PI);
	p = reduce(a, Math.PI/2);
	s = Math.sin(p);
	c = Math.cos(p);
	if (a >= 0 && a < Math.PI/2) {
		x = s * m;
		y = c * m;
	} else if (a >= Math.PI/2 && a < Math.PI) {
		x = c * m;
		y = -(s * m);
	} else if (a >= Math.PI && a < 1.5*Math.PI) {
		x = -(s * m);
		y = -(c * m);
	} else if (a >= 1.5*Math.PI && a < 2*Math.PI) {
		x = -(c * m);
		y = s * m;
	}
	this.x = x;
	this.y = y;
}

function Particle(x, y, f, s, m) {
	this.x = x;
	this.y = y;
	this.f = f;
	this.s = s;
	this.m = m;
}

function wait_p(a, t) {
	t_x = a.s.x;
	t_y = a.s.y;
	t_x = t_x + (a.f.x*t);
	t_y = t_y + (a.f.y*t);
	a.x = a.x + t_x;
	a.y = a.y + t_y;
	a.s.x = t_x;
	a.s.y = t_y;
	return a;
}

function wait_g(a, t) {
	for (i = 0; i < a.length; i++) {
		a[i] = wait_p(a[i], t);
	}
	return a;
}

// Particles.push(new Particle(2, 2, new Vector(5, (2*Math.PI)*(7/8)), new Vector(10, Math.PI), 20));
// Particles.push(new Particle(-20, -20, new Vector(2, (2*Math.PI)*(7/8)), new Vector(1, Math.PI*0.5), 10));

for (i = 0; i < Math.random()*100; i++) {
	Particles.push(new Particle((Math.random()-0.5)*400, (Math.random()-0.5)*400, new Vector(Math.random()*10, (2*Math.PI)*Math.random()), new Vector(Math.random()*10, (2*Math.PI)*Math.random()), Math.random()*20));
}
console.log(Particles);
