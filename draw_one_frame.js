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
	background(255);
	
	noStroke();
	
	//translate(width / 2, height / 2);
	
	let unitsOnField = 33;
	let unitSize = width/unitsOnField;
	let spacing = width / unitsOnField ;

	let noiseNumber;
	 let darker = color("#004237"); //monochrome colour to lerp with white.
	let white = color("#ffffff");
	// let darker = color("#000fff");



	// for (let x = 1; x < (width / spacing) -1; x++){
	// 	for (let y = 1; y < (height / spacing)-1; y++)
	// }



	for (let x =0; x <= (width / spacing); x++){
		for (let y =0; y <= height / spacing; y++ ){
		//	noiseDetail(10,.9);
		noiseDetail(6);
		
			
		noiseColour = getNoiseValue(spacing+x, spacing+y, cur_frac, "MyNoise", 0, 1, 5);
			// push();
			// stroke(255);
			// strokeWeight(unitSize/100);
			// line(spacing*x/4,spacing*y/4,spacing*x,spacing*y);
			// pop();

			fill(lerpColor(white, darker, noiseColour));
			//rect(spacing*x, spacing*y, unitSize, noiseColour*(unitSize/5));
			
			zero_to_zero = map(cur_frac,0,1,1,0);
			
			
			if(cur_frac < 0.5){
				rect(spacing*x, spacing*y, cur_frac*unitSize*4, unitSize/2);
				rect(spacing*x, spacing*y, unitSize/2, cur_frac*unitSize*24);
				
			} else {
				rect(spacing*x, spacing*y, zero_to_zero*unitSize*4, unitSize/2);
				rect(spacing*x, spacing*y, unitSize/2, zero_to_zero*unitSize*24);
			}
			rect(spacing*x, spacing*y, unitSize/1.5, unitSize/1.5);
			fill(lerpColor(darker, white, noiseColour));
			if(noiseColour < 0.4){
				
				fill(0,40);
			}
			fill(255,200);
			
			
			rect(spacing*x, spacing*y, unitSize*2, unitSize);
			rect(spacing*x, spacing*y, unitSize, unitSize*2);
			
			// Update 5/3:
			// exercise for noise generation, using a grid. doesn't currently
			// scale lineweights properly and could do better with how the
			// gridlines connect, but I like the organic nature of the strobey effect.

		}

		
		// rect(width/2,height/2,unitSize/3*unitsOnField,unitSize*unitsOnField,unitSize/2);
		 fill(lerpColor(white, darker, noiseColour));
		 if(noiseColour > .2){
		 	fill(255,20);

		 }


		 push();
		 fill(255);
		 beginShape();
		 vertex(width/4,0);
		 vertex(width - (width/4),0);
		 vertex(width - (width/4), (height/2));
		 vertex(width/2, (height/4)+(height/20));
		 vertex(width/4, (height/2));
	 
		 endShape(CLOSE);
		 pop();
		ellipse(width/2,height/2,width/2.4,height/3.5);
		image(img,width/4,height/4,width/2,height/2);
		// rect(width/2,height/2,unitSize/3*unitsOnField,unitSize/2.1*unitsOnField,unitSize/2);

	}
	//fill(255,90);
	


}

