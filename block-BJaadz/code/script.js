// Select the h1 element and store it in a variable named heading.
let heading = document.querySelector("h1");
console.log(heading);
// Check the typeof heading and log it.
console.log(typeof heading);
// Change the color of heading to black.
heading.style.color = "black";
// Select all the hr elements and store it in a variable named allHrs using querySelectorAll
let allHrs = document.querySelectorAll("hr");
console.log(allHrs);
/* 
Convert the NodeList returned by querySelectorAll to Array using Array.from() or spread operator and store it in allHrsArray

Array.from converts an array kind of data into array so we can use methods like map, reduce

HINT:
let allHrsArray = Array.from(allHrs)
*/
let allHrsArray = Array.from(allHrs);

// Set the border of the all the hr elements to "1px solid tomato"

allHrsArray.forEach((val) => {
  val.style.border = "1px solid tomato";
});

// Change the background of all the hr to "antiquewhite" using for of loop.

allHrsArray.forEach((val) => {
  val.style.background = "antiquewhite";
});

// Change the 'border-radius' of all the hr to "5px" using array.
allHrsArray.forEach((val) => {
  val.style.borderRadius = "5px";
});
// Change the alignment of the heading(h1) to center.
heading.style.textAlign = "center";
// Change the font size of the heading to 3rem.
heading.style.fontSize = "3rem";
// Change the border of hr with class 'image' to `2px solid purple`.
let hrWithClass = document.querySelectorAll("hr.image");
hrWithClass.forEach((val) => {
  val.style.border = "2px solid purple";
});

// Hide the box number 17 (last box).
let archive = document.querySelector(".archive");
let seventeen = archive.lastElementChild;
seventeen.style.display = "none";

// Change the border of all the hr element from solid to dashed type
allHrsArray.forEach((val) => {
  val.style.border = "dashed";
});

// Create a pragraph element and store it in variable named 'para' using `createElement`
let para = document.createElement("p");
// Change the inner text of para to "querySelector returns an element you can maupulate but querySelectorAll returns the collection of elements in array kind of structure."
para.innerText =
  "querySelector returns an element you can maupulate but querySelectorAll returns the collection of elements in array kind of structure.";
// Remove all the elements from box 1
let one = document.querySelector(".one");
let boxone = Array.from(one.children);
boxone.forEach((element) => {
  one.firstElementChild.remove();
  one.append(para);
});

// Replace all the elements inside box 1 with the para (you created above)

/* Walking the DOM
Do the following after selecting box 16 and storing in variable named box16

  - Access the parentNode
  - Access the childNodes
  - Access previousSibling
  - Access nextSibling
  - Access firstChild
  - Access lastChild

  - Access previousElementSibling
  - Access nextElementSibling
  - Access firstElementChild
  - Access lastElementChild

  - Focus on the difference between element and node
*/
let sixteen = document.querySelector(".sixteen");
console.log(sixteen.parentNode);
console.log(sixteen.childNodes);
console.log(sixteen.previousElementSibling);
console.log(sixteen.nextElementSibling);
console.log(sixteen.firstElementChild);
console.log(sixteen.lastElementChild);
console.log(sixteen.previousElementSibling);
console.log(sixteen.nextElementSibling);
console.log(sixteen.firstElementChild);
console.log(sixteen.lastElementChild);
// Select box 2 and append a new paragraph element with content "Append inserts as last child" just after hr element.
let two = document.querySelector(".two");
let pTwo = document.createElement("p");
pTwo.innerText = "Append inserts as last child";
two.append(pTwo);
// Select box 3 and prepend a new paragraph element with content "Prepend inserts as first child" just before hr element.
let three = document.querySelector(".three");
let pthree = document.createElement("p");
pthree.innerText = "Prepend inserts as first child";
three.prepend(pthree);
// Change the border of box 4 to '1px solid black'
let four = document.querySelector(".four");
four.style.border = "1px solid black";
// Change the border radius of box 5 to 10px.
let five = document.querySelector(".five");
five.style.borderRadius = "10px";
// Change the text color of box 6 to black.
let six = document.querySelector(".six");
six.style.color = "black";
// Change the font size of the para inside box 1 to 0.8rem.
two.lastElementChild.style.fontSize = "0.8rem";

// Change the background of all the alternate boxes (1, 3, 5, ....) to aliceblue
let allBox = Array.from(document.querySelectorAll(".box"));
allBox.forEach((element) => {
  if (allBox.indexOf(element) % 2 == 1) {
    element.style.background = "linearGradient(aliceblue,aliceblue)";
  }
});
// add a class named "awesome-box" to the box 6 using classList property of DOM element.
six.classList.add("awesome-box");
console.log(six);
// Using the toggle classList property toggle the class `awesome-box` from box 2
two.classList.toggle("awesome-box");
console.log(two);
// Using the remove classList proeprty remove the class `awesome-box` from box 4
four.classList.remove("awesome-box");
console.log(four);

// Change the background of the body to bisque
let body = document.querySelector("body");
body.style.background = "bisque";
// Create a button and store it in a variable named 'btn'
let btn = document.createElement("button");
// textContent of the button should be 'Click Me'
btn.innerText = "Click Me";
// Change the background of the btn to 'oldlace'
btn.style.background = "oldlace";
// Change the font size of the btn to 1rem
btn.style.fontSize = "1rem";
// Change the border of the btn to '1px solid black'
btn.style.border = "1px solid black";
// Add the padding of '0.5rem 1rem' to btn
btn.style.padding = "0.5rem 1rem";
// Append the btn in box number 9
let nine = document.querySelector(".nine");
nine.append(btn);
// Create a img element with src value `https://images.unsplash.com/photo-1592500595497-d1f52a40b207?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80` and store in a variable named imgElm
let img = document.createElement("img");
img.setAttribute(
  "src",
  "https://images.unsplash.com/photo-1592500595497-d1f52a40b207?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"
);
// Select the box 7 using class seven
let seven = document.querySelector(".seven");
// Remove all the elements form box seven
let sevenChilds = Array.from(seven.children);
sevenChilds.forEach((ele) => {
  let rm = seven.firstElementChild;
  rm.remove();
});
// Append the imgElm to the box no 7
seven.append(img);
// Change the width and height of the image to `100%`
img.setAttribute("height", "100%");
img.setAttribute("width", "100%");

// Select the box 5 using class five

// Create an input element
let input = document.createElement("input");
// Change the placeholder property of the input element to "Enter you email!"
input.setAttribute("placeholder", "Enter you email!");
// Append the input element to the box 5 you selected above
five.append(input);
// Create two anchor (a) element with  the text of `AltCampus` and `Google`
let a1 = document.createElement("a");
let a2 = document.createElement("a");
a1.innerText = "AltCampus";
a2.innerText = "Google";
// Change the href property of the anchor elements to `https://altcampus.school` and `https://google.com`
a1.setAttribute("href", "https://altcampus.school");
a2.setAttribute("href", "https://google.com");
// Append both the elements to box 5 you selected above.
five.append(a1);
five.append(a2);
