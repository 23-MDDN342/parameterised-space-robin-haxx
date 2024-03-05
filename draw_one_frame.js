var x = 300;
var y = 300;
var a = 100;
var b = 100;


let boundary = new Rectangle(200,200,200,200)
let qt = new QuadTree(boundary, 4);
console.log(qt);

// this is the fireworks example
function draw_one_frame() {

	for(let i=0; i < 4; i++){
		let p = new point(random(width), random(height));
		qt.insert(p);
	}
	//background(255);
	x += 2;
	y += 2;
	a -= 2;
	b -= 2;
	strokeWeight(1);
	translate(width / 2, height / 2);

}