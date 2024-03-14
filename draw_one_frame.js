/* 
   getNoiseValue arguments:
   x: current grid location across
   y: current grid location down
   loop: can be any value from 0-1 and will loop
   name: the "name" of the lookup table. probably change this each time.
   min/max: the minimum and maximum of the value to return
   smoothness: 1 means elements are not related. larger numbers cause groupings.
*/

function renderSquares(x,y,rWidth,rHeight,noiseDetail,primary,secondary,cur_frac,unitsOnField,unitSize,spacing ){
	zero_to_zero = map(cur_frac,0,1,1,0);
	push();
	translate(x,y);
	stroke(0,100,100);
	strokeWeight(unitSize/20);
	for(let i = 0; i < (rWidth/spacing); i++){
		for (let j = 0; j < (rHeight / spacing); j++){
			noiseGen = getNoiseValue(i,j,cur_frac,"fNoise",0,1,noiseDetail);

			fill(lerpColor(primary, secondary, noiseGen));
			if(cur_frac < 0.5){
				rect(spacing*i,spacing*j,  unitSize*4*cur_frac, unitSize/2);
				fill(255);
				rect(spacing*i,spacing*j, unitSize/4, unitSize*4*cur_frac)
			}else{
				rect(spacing*i,spacing*j, unitSize*4*zero_to_zero, unitSize/2);
				fill(255);
				rect(spacing*i,spacing*j, unitSize/4, unitSize*4*zero_to_zero);
			}

		}
	}
	pop();
}


function draw_one_frame(cur_frac,unitsOnField,unitSize,spacing) {



	rectMode(CENTER);
	background(255);
	
	noStroke();
	
	//translate(width / 2, height / 2);
	


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
		noiseDetail(6,.2);
		
		let noiseX = x;
//		noiseX = mouseX;
		let noiseY = y;




		noiseColour = getNoiseValue(noiseX, noiseY, cur_frac, "MyNoise", 0, 1, 30 );

		
			// push();
			// stroke(255);
			// strokeWeight(unitSize/100);
			// line(spacing*x/4,spacing*y/4,spacing*x,spacing*y);
			// pop();

			fill(lerpColor(white, darker, noiseColour));

			//rect(spacing*x, spacing*y, unitSize/2, unitSize*2);
			
			zero_to_zero = map(cur_frac,0,1,1,0);
			
			
			if(cur_frac < 0.5){
				rect(spacing*x, spacing*y, cur_frac*unitSize/2, unitSize*2);
			//	rect(spacing*x, spacing*y, unitSize*2, cur_frac*unitSize);
				
			} else {
				rect(spacing*x, spacing*y, zero_to_zero*unitSize/2, unitSize*2);
			//	rect(spacing*x, spacing*y, unitSize*2, zero_to_zero*unitSize);
			}
			//rect(spacing*x, spacing*y, unitSize*2, unitSize);
			fill(0);
			if(cur_frac < 0.5){
			//rect(spacing*x, (spacing*y)-(spacing/2), unitSize/4, unitSize*cur_frac);
		}else{
			//rect(spacing*x, (spacing*y)-(spacing/2), unitSize/4, unitSize*zero_to_zero);
		}
			fill(lerpColor(darker, white, noiseColour));
			if(noiseColour < 0.8){
				
				fill(0,80);

			}
			

			
			rect(spacing*x, spacing*y, unitSize*2, unitSize/8);
			//OLD IDEA: drawing based on mouse position 

// 			if (
// 				spacing*x > mouseX && 
// 				spacing*x < (mouseX + width/8) &&

// 				//spacing*y > mouseY &&
// 				//spacing*y < (mouseY + height/8)&&
// 				x==x // redundant condition so I can comment and add stuff line-by-line 
// 				){
// 			// for(let b=0; b< 5; b++){
// 			// rect((spacing*x)-((width/16)*4*b),spacing*y-(height/16), unitSize/8, unitSize*6);
// 			// //rect(spacing*x, spacing*y, unitSize*4, unitSize/4);
// 			// }
// }	

			if(spacing*x == mouseX*x && spacing*y == mouseY*y){
				//	fill(255,255,0);
				
				fill(lerpColor(darker, white, noiseColour));
				//rect(mouseX,mouseY,unitSize*2,unitSize*2);
				//rect(mouseX,mouseY,unitSize,unitSize);
				
				}
			

			// Update 5/3:
			// exercise for noise generation, using a grid. doesn't currently
			// scale lineweights properly and could do better with how the
			// gridlines connect, but I like the organic nature of the strobey effect.

		}

		
		// rect(width/2,height/2,unitSize/3*unitsOnField,unitSize*unitsOnField,unitSize/2);
		 fill(lerpColor(white, darker, noiseColour));
		 if(noiseColour > .2){
		 	fill(0,20);

		 }


		 push();
		 fill(255,20);
		 scale(1.1);
		 beginShape();
		 curveVertex(width/4,0);
		 curveVertex(width - (width/4),0);
		 curveVertex(width - (width/4), (height/2));
		 vertex(width/2, height-(height/4));
		 curveVertex(width/4, (height/2));

		 endShape(CLOSE);
		 pop();


		// ellipse(width/2,height/2,width/2.4,height/3.5);
		// image(img,width/4,height/4,width/2,height/2);
		// rect(width/2,height/2,unitSize/3*unitsOnField,unitSize/2.1*unitsOnField,unitSize/2);

	}
	//fill(255,90);
	
	renderSquares(width/6,height/4,width/8,height,50,white,darker,cur_frac,unitsOnField,unitSize,spacing);
	renderSquares(width/3,height/4,width- width/4, height/6,1,white,darker,cur_frac,unitsOnField,unitSize,spacing);
	renderSquares((width/3)-(unitSize/4),height/4,width- width/4, height/6,1,white,white,cur_frac,unitsOnField,unitSize,spacing);

}

