/*******************
 * OUR HELPER CODE *
*******************/

/*
 * Here we add the squares to the canvas dynamically.
 * You can mostly leave this section alone!
 * But if you want to change how wide the canvas is,
 * there are just two steps:
 * 
 * 1. Change the `gridWidth` value below.
 * 2. Change the `grid-template-rows` and
 * `grid-template-columns` to match.
 *
 * To make the second one happen, the number to change
 * is the first argument to `repeat`, currently set at 10.
 */
const gridWidth = 10;
let count = 0;
while (count <= gridWidth * gridWidth) {
  const canvas = document.querySelector('.canvas');
  const div = document.createElement('div');
  div.className = 'square color-5';
  canvas.appendChild(div);
  count++;
}

// You probably should NOT do these in the order below.
// That is, you probably should NOT do all the queries,
// THEN all the functions,
// THEN all the wiring.

// Instead, it'll be easier if you go one action at a time!
// So, add a query for the palette colors.
// THEN add an event listener function for what happens when one is clicked.
// THEN wire those two together, so that when the palette elements are clicked,
// the function runs.
//
// And proceed from there to getting the squares working.
//

// ALSO.
// You do not have to follow the sections below. If you're doing your functions inline, it doesn't make a lot of sense to separate the event listener functions from their wiring!

/***********
 * QUERIES *
***********/

// Add queries for all your squares, palette colors, and brush here.
// (Note the singular or plural used in that sentence!)

let palette =  document.querySelectorAll(".palette div");
let currentColour = document.querySelector(".current-brush");
let paint = document.querySelectorAll(".canvas div");




/****************************
 * EVENT LISTENER FUNCTIONS *
****************************/

// Now add some functions to handle clicking one particular square
// and clicking one particular palette color. You can leave them
// empty at first, though a console.log just to know they're being
// run as event listeners (after the next step is set up) isn't a
// bad idea for testing purposes.



for (let i = 0; i < palette.length; i++){
  palette[i].classList;
  palette[i].addEventListener("click", function(){
    // if (palette[i].classList[2] === "active"){
      // palette[i].classList.toggle("active");

      // console.log(palette[i].classList);

      currentColour.classList.remove(currentColour.classList[1]);
      //removes the class at the classList array index[1] -> which is where the colour name is edited
      currentColour.classList.add("color-"+[i+1]);  
      
      //console.log(currentColour.classList);

    //}

  })
}

for (let i = 0; i < paint.length; i++){

  // paint[i].addEventListener("dragstart", function(){
  //   paint[i].classList.remove(paint[i].classList[1]);
  //   paint[i].classList.add(currentColour.classList[1]);
  // })

  // paint[i].addEventListener("drag", function(){
  //   paint[i].classList.remove(paint[i].classList[1]);
  //   paint[i].classList.add(currentColour.classList[1]);
  // })
  
  // paint[i].addEventListener("dragend", function(){
  //   paint[i].classList[1] = "color-5";
  // })

  //addEventListener("mouseenter", function(){

   //if clicked === true
  //})

  paint[i].addEventListener("mouseenter", function(){
    paint[i].classList.remove(paint[i].classList[1]);
    paint[i].classList.add(currentColour.classList[1]);
  })

  paint[i].addEventListener("mouseover", function(){
    paint[i].classList.remove(paint[i].classList[1]);
    paint[i].classList.add(currentColour.classList[1]);
  })
  
  paint[i].addEventListener("mouseup", function(){
    paint[i].classList[1] = "color-5";
  })
}

//document.addEventListener("mousedown", function () {

//});

// div.addEventListener("mousedown", function(){
//   div.classList.toggle("color-"+[i+1])
// })


/**************************
 * WIRING IT ALL TOGETHER *
**************************/

// Now: wiring up our event listeners to our html node elements.
// You'll need to add the appropriate event listener for each
// square and for each palette color from the functions you
// wrote above.
