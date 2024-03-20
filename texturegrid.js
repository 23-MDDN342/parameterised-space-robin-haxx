// let unitsOnField = 65;//THIS NEEDS A MORE ACCESSIBLE SCALABLE VARIABLE IN DRAW_ONE_FRAME
// let unitSize = width/unitsOnField;
// let spacing = width / unitsOnField ;



// class TextureGrid {
//     constructor(x,y,w,h,strokeClr,noiseDetail,primary,secondary) {

//         this.x = x;
//         this.y = y;
//         this.w = w;
//         this.h = h;
//         this.strokeClr = strokeClr;
//         this.noiseDetail = noiseDetail;
//         this.primary = primary;
//         this.secondary = secondary;
        
//     }

//     noise(cur_frac){
//         this.primaryNoise = getNoiseValue(this.x,this.y,cur_frac,"pNoise",0,1,pNoiseDetail);
//         this.primaryNoise = getNoiseValue(this.x,this.y,cur_frac,"sNoise",0,1,sNoiseDetail);

//     //  potentially able to change on the fly with code such as:
//     //  let chaoticNoise = getNoiseValue(this.x,this.y,cur_frac,"cNoise",0,1,2);
//     //  shapeOne.noise.secondaryNoise = chaoticNoise

//     }

//     renderSquares(cur_frac,unitsOnField,unitSize,spacing){

//         zero_to_zero = map(cur_frac,0,1,1,0);

//         translate(this.x,this.y);
//         stroke(this.strokeClr);
//         strokeWeight(unitSize/40);

//         for(let i = 0; i < (this.w/spacing); i++)
//         {
//             for (let j = 0; j < (this.h / spacing); j++)
//             {

//                 noiseGen = getNoiseValue(i,j,cur_frac,"fNoise",0,1,this.noiseDetail);
//                 fill(lerpColor(this.primary, this.secondary, noiseGen));

//                  if(cur_frac < 0.5)
//                 {
//                     push();
//                     noStroke();
//                     fill(255);
//                     rect(spacing*i,(spacing*j)-(unitSize/4),  (unitSize*4*cur_frac)-(unitSize/2), unitSize/2);
//                     pop();
//                     rect(spacing*i,spacing*j, unitSize/2, (unitSize*2*noiseGen)+unitSize);
//                 }
//                 else
//                 {
//                     push();
//                     noStroke();
//                     fill(255);
//                     rect(spacing*i,(spacing*j)-(unitSize/4), (unitSize*4*zero_to_zero)-(unitSize/2), unitSize/2);
//                     pop();
//                     push();
//                     //fill(255);
//                     rect(spacing*i,spacing*j, unitSize/2, (unitSize*2*noiseGen)+unitSize);
//                     pop();   
//                 }
            
//             }
//         }
        

//     }





// }


