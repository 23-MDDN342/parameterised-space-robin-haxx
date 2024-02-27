inspiration (music + space)\

![The ARK](https://github.com/23-MDDN342/parameterised-space-robin-haxx/blob/master/readmeImages/theArk.png?raw=true)\
ANTIVIJ, "THE ARK", Mexico\
This is a really fantastic combination of what I'd like to be able to apply these visuals to. Sculptural architecture pavilion in an outdoor environment that uses ambient sound as well as its contect in a botanical garden to build an incredibly immersive spectacle. The lighting is very restrained and considered, white-on-black. I want to do something similar with a limited or monochrome palette. Nice mix of mechanical and organic-feeling motion builds on this vibe, and the form of the surface it is projected on is part of the composition through and through.

![G. Jones #1](https://github.com/23-MDDN342/parameterised-space-robin-haxx/blob/master/readmeImages/gJones1.png?raw=true)\
G. Jones, "PATHS" Live @ Joy theater, New Orleans\
https://www.youtube.com/watch?v=8xlktP4jdps \
I believe the visuals were made by mr. greg jones himself. I really like how they use this tiled format in an obviously incredibly fast-paced and dynamic way, but also how negative space and built-up forms are used to give the sense of enclosing/ widening tunnels and such. just so many possibilities for both animation and application.

![Karma Fields #1](https://github.com/23-MDDN342/parameterised-space-robin-haxx/blob/master/readmeImages/karmaFields1.png?raw=true)\
Karma Fields, "Sweat", visuals by Raven Kwok https://ravenkwok.com/ \
https://www.youtube.com/watch?v=8eohNsFWCLU \
Another interesting use of music visualization, this came to mind as it breaks up in a rule similar to the golden ratio and alternates between 2d and 3d compositions. I've cited Raven's work before.

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
-open source ethics, always.\