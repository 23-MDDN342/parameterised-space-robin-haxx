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
	let spacing = width / unitsOnField ;

	let noiseNumber;
	let darker = color("#004237"); //monochrome colour to lerp with white.
	let white = color("#ffffff");
	// let darker = color("#000000");



	// for (let x = 1; x < (width / spacing) -1; x++){
	// 	for (let y = 1; y < (height / spacing)-1; y++)
	// }



	for (let x =0; x <= (width / spacing); x++){
		for (let y =0; y <= height / spacing; y++ ){
		//	noiseDetail(10,.9);
		noiseDetail(2);
			
		noiseColour = getNoiseValue(spacing+x, spacing+y, cur_frac, "MyNoise", 0, 1, 15);
			// push();
			// stroke(255);
			// strokeWeight(unitSize/100);
			// line(spacing*x/4,spacing*y/4,spacing*x,spacing*y);
			// pop();

			fill(lerpColor(white, darker, noiseColour));
			//rect(spacing*x, spacing*y, unitSize, noiseColour*(unitSize/5));
			
			zero_to_zero = map(cur_frac,0,1,1,0);
			
			if(cur_frac < 0.5){
				rect(spacing*x, spacing*y, cur_frac*unitSize*2, unitSize);
				rect(spacing*x, spacing*y, unitSize, cur_frac*unitSize*2);
			} else {
				rect(spacing*x, spacing*y, zero_to_zero*unitSize*2, unitSize);
				rect(spacing*x, spacing*y, unitSize, zero_to_zero*unitSize*2);
			}
			rect(spacing*x, spacing*y, unitSize/1.5, unitSize/1.8);
			fill(lerpColor(darker, white, noiseColour));
			if(noiseColour < 0.6){
				fill(0);
			}
			rect(spacing*x, spacing*y, unitSize/2, unitSize/2);
			
			// Update 5/3:
			// exercise for noise generation, using a grid. doesn't currently
			// scale lineweights properly and could do better with how the
			// gridlines connect, but I like the organic nature of the strobey effect.

		}
		
		// rect(width/2,height/2,unitSize/3*unitsOnField,unitSize*unitsOnField,unitSize/2);
		 fill(lerpColor(white, darker, noiseColour));
		 if(noiseColour > 0.5){
		 	fill(255,50);
		 }
		ellipse(width/2,height/2,width/2.4,height/3.5);
		image(img,width/4,height/4,width/2,height/2);
		// rect(width/2,height/2,unitSize/3*unitsOnField,unitSize/2.1*unitsOnField,unitSize/2);

	}
	//fill(255,90);
	


}

