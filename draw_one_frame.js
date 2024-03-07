/* 
   getNoiseValue arguments:
   x: current grid location across
   y: current grid location down
   loop: can be any value from 0-1 and will loop
   name: the "name" of the lookup table. probably change this each time.
   min/max: the minimum and maximum of the value to return
   smoothness: 1 means elements are not related. larger numbers cause groupings.
*/



function draw_one_frame(cur_frac) {

	rectMode(CENTER);
	background(0);
	noStroke();
	//translate(width / 2, height / 2);

	let unitsOnField = 16;
	let unitSize = width/unitsOnField;
	let spacing = width / unitsOnField - 1;

	let noiseNumber;
	let darker = color("#004237"); //monochrome colour to lerp with white.
	let white = color("#ffffff");

	for (let x = 1; x < (width / spacing)-1; x++){
		for (let y =1; y+1 < height / spacing; y++ ){
			noiseColour = getNoiseValue(spacing+x, spacing+y, cur_frac, "MyNoise", 0, 1, 10);
			// push();
			// stroke(255);
			// strokeWeight(unitSize/100);
			// line(spacing*x/4,spacing*y/4,spacing*x,spacing*y);
			// pop();

			fill(lerpColor(white, darker, noiseColour));
			rect(spacing*x, spacing*y, unitSize, noiseColour*10);
			rect(spacing*x, spacing*y, noiseColour*10, unitSize);
			rect(spacing*x, spacing*y, unitSize/1.8, unitSize/1.8);
			fill(lerpColor(darker, white, noiseColour));
			rect(spacing*x, spacing*y, unitSize/2, unitSize/2);
			// Update 5/3:
			// exercide for noise generation, using a grid. doesn't currently
			// scale lineweights properly and could do better with how the
			// gridlines connect, but I like the organic nature of the strobey effect.

		}
	}


}

