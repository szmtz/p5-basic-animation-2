// p5 requires two basic functions setup and draw for every project
// the setup and the loop that happens forever - the animation basis of p5
//

// create a variable star
// change star to stars to make it an array
let stars = []; 
let factor = 100; 

function setup() {
    createCanvas(400, 400); 
    //2ND VERSION
    for (let i = 0; i < 500; i++) {
        stars[i] = createVector(
            random(-width*factor, width*factor), 
            random(-height*factor, height*factor), 
            random(400)
        )}
    }
    // call star and set it equal to a vector with the createVector function
    // the createVector function will make an object that stores an x, y and z adds a 3d effect
    // since the circle is at 200, 200, create a vector where the position is at 200, 200 
    // then give it a z of zero to be flat in the middle 

    // to start editing for 2nd animation - moved over vector to the right changing from 200 - 300
    


//the draw function will be an infinite draw loop
function draw() {
    background(0); 
    fill(255); 
    noStroke(); 
      // NOTE: p5 has the top left corner as 0, 0 (the 0, 0 spot)
      // 2ND VERSION - to get 0,0 to actually be at the center
      //use the translate() function to change the origin point
    translate(width / 2, height / 2); 
   
    //after setting up the circle with createVector function setup, use d for diameter to create
    // the placeholder variable for diameter
    //initially the diameter was set to 16 but what we want to do is create an illusion of 3D
    // if the z value is keeping track of a pretend number as if the circle is actually leaving the screen and coming towards me, the bigger it gets the closer it gets
    //to do that use the map() function - will take any given value that has some range to it
    
    // 2ND VERSION
    // instead of drawing the circle at x and y, make up an x value that will be the star's x value divided by the star's z value
    // the closer it's getting to the viewer
    // as it gets bigger its moving out and to the right
    // repeat with the y value
    //instead of drawing 1 circle, put a loop that -- for each star, 
    for (let star of stars){
    let x = star.x / star.z; 
    let y = star.y / star.z; 
    let d = map(star.z, 0, 400, 10, 1); 
    // 16; 
    // let d = map(star.z, 0, 400, 1, 10); // mapping the star's z value has a range between 0 and 400 and then the diameter when it's at zero will be just one
    //and then as it gets closer and closer to the viewer, it gets bigger (10)

    // call the new star variable with it's createVector function/value and placing this at x and y
    // circle(star.x, star.y, d); 
    // 2ND VERSION - instead of drawing the circle at the star's actual value - we'll use the previously created x and y variables
    circle(x, y, d); 
    star.z -= 5;
    
    if(star.z < 1) {
        star.x = random(-width*factor, width*factor);  
        star.y = random(-height*factor, height*factor);  
        star.z = 400; 
    }

    }





    //after the previous set up, write some code that has just the z value increase - initial basic animation of circle just growing star.z +=10; 

    
    // star.z += 1; 


}


    // example circle(200, 200, 16);  200 x , 200 y and 16 diameter the circle is at the center since the canvas is 400 x 400
    // NOTE: p5 has the top left corner as 0, 0 (the 0, 0 spot)


     //the describe() function allows people with screen readers to hear a description of what's on the screen
    //describe('canvas with a black background'); 