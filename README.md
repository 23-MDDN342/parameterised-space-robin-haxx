

Update: Refactoring! Now I have a function to draw areas of grids, with noise. I want to keep packaging the code into this and have different "styles" e.g. arrangements of shapes that produce different textures, so I can focus on building the ideal composition and vibe.
Right now I'm looking back through past iterations for what to include here, and frying my brain cleaning up the project file. I also moved some variables into the code.js draw scope.
!




Initial idea statement; revisited..

For this project I aimed to produce a piece of animation that is ready to apply to architectural form via projection mapping, either a blank wall mass of any scale or something more purpose-built such as a stage set or other audio-visual installation.\
I think I've made a lot of progress in working out how to do this, and the guidance in creating noise has been really helpful. Being able to define a region to split uniformy into components, then coordinate their behaviour with either smooth animation or spontaneous noise, is the key to what I was going for here. 
I explored a few different ways the grid components could be designed, mostly by layering animated rectangle shapes, sometimes making each component large enough to layer over its neighbours. I coded a tool to move the region by mouse movement, wrote code for a "highlight" layer of elements to follow the mouse around, and finally settled on the idea of functions to create set x,y,width,height regions of different texture compositions.\
I'm super interested in abstract, cyber-aesthetics and how they contrast against more organic forms, visual elements and movement. 
I explored different tech-leaning design styles, starting with darker, strobey stuff inspired by DJ visuals - but moving towards using the tools I built to design the final composition for a Zoom background, I decided on a brighter, futuristic cityscape.

I stuck to one colour to interpolate to and from white, and the last thing I am trying to implement is a branching algorithm.

![sketch 1](https://github.com/23-MDDN342/parameterised-space-robin-haxx/blob/master/sketch.jpg?raw=true)\
![sketch 2](https://github.com/23-MDDN342/parameterised-space-robin-haxx/blob/master/readmeImages/sketch2.jpg?raw=true)\
![sketch 3](https://github.com/23-MDDN342/parameterised-space-robin-haxx/blob/master/readmeImages/sketch3.jpg?raw=true)

inspiration (music + space)

![Cityscape](https://github.com/23-MDDN342/parameterised-space-robin-haxx/blob/master/readmeImages/cityscape.png?raw=true)\
"Cityscape", Earth Liberation Studio

![The ARK](https://github.com/23-MDDN342/parameterised-space-robin-haxx/blob/master/readmeImages/theArk.png?raw=true)\
ANTIVIJ, "THE ARK", Mexico \
https://cdm.link/2014/02/wander-a-garden-of-light-shape-and-sound-with-antivjs-the-ark-2/ \
This is a really fantastic combination of what I'd like to be able to apply these visuals to. Sculptural architecture pavilion in an outdoor environment that uses ambient sound as well as its contect in a botanical garden to build an incredibly immersive spectacle. The lighting is very restrained and considered, white-on-black. I want to do something similar with a limited or monochrome palette. Nice mix of mechanical and organic-feeling motion builds on this vibe, and the form of the surface it is projected on is part of the composition through and through.

![G. Jones #1](https://github.com/23-MDDN342/parameterised-space-robin-haxx/blob/master/readmeImages/gJones1.png?raw=true)\
G. Jones, "PATHS" Live @ Joy theater, New Orleans\
https://www.youtube.com/watch?v=8xlktP4jdps \
I believe the visuals were made by mr. greg jones himself. I really like how they use this tiled format in an obviously incredibly fast-paced and dynamic way, but also how negative space and built-up forms are used to give the sense of enclosing/ widening tunnels and such. just so many possibilities for both animation and application.

![Raven Kwok #1](https://github.com/23-MDDN342/parameterised-space-robin-haxx/blob/master/readmeImages/karmaFields1.png?raw=true)\
Karma Fields, "Sweat", visuals by Raven Kwok https://ravenkwok.com/ \
https://www.youtube.com/watch?v=8eohNsFWCLU \
Another interesting use of music visualization, this came to mind as it breaks up in a rule similar to the golden ratio and alternates between 2d and 3d compositions. I've cited Raven's work before. This was generated with Processing.

This piece is also known as "189D0", and Raven has adapted it for 23 screens of various sizes in a mall interior. \
![Raven Kwok #2](https://github.com/23-MDDN342/parameterised-space-robin-haxx/blob/master/readmeImages/ravenKwok2.png?raw=true)\
https://ravenkwok.com/189d0-special-edition-cosmo/

openProcessing code notes:

![bowhowz](https://github.com/23-MDDN342/parameterised-space-robin-haxx/blob/master/readmeImages/bowhowz.png?raw=true)\
-RobA / @cartocopia , "Bowhowz"\
https://openprocessing.org/sketch/2165806 \
Progressively built up composition

strategy for colour: nested palette arrays

const pallettes = [\
    [hex1_1, hex1_2, hex1_3],\
    [hex2_1, hex2_2, hex2_3],\
    [hex3_1, hex3_2, hex3_3],\
]

-"stage counter" for progressively adding visual elements to the composition. \
-this person used a switch statement, which broke it up pretty well,
interestingly enough. this had 5 cases for elements being "deployed".

![growing into it](https://github.com/23-MDDN342/parameterised-space-robin-haxx/blob/master/readmeImages/growingIntoIt.png?raw=true)\
A. Reuland / @a_soluble_fish , "growing into it"\
https://openprocessing.org/sketch/2169799 \
mycelium/ branches colonizing space

-this code was object-oriented; using classes for different elements.
i will do this too ...\
-a function for growing, similarly to how I have used recursion before.\
-I like how this used the space in a "tiled" format, while implementing
systems for moving parts that interacted to make a varied overall piece.

requirements:\
-consistent rendering at any resolution (scalable) and lends 
 itself to large-format application\
-perfect 24 frame loop and smooth, bug-free performance\
-organised, readable and accessible code standard
 & curated collection of commits. \
-varied use of coded elements and design patterns, creative 
 thought process and execution. unique voice.\
-this document tracks my thought process at every significant step
 and should be able to introduce the work well to a lay-person.\
-open source ethics, always.
