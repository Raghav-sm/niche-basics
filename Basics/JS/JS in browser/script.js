//let hold = document.getElementById('ChangeTextButton');
//console.log(hold); in dom itll show button
document.getElementById('ChangeTextButton').
  addEventListener("click", function () {
    let pr = document.getElementById("my-paragraph");
    pr.textContent = "Paragraph SuccessFull changed"
  })


// Challenge 2
//Change color when button clicked

document.getElementById("HighlightFirstCity").
  addEventListener('click', function () {
    let firstElement = document.getElementById("CityList");
    firstElement.firstElementChild.classList.add("highlight");
  })

//example 3
//Change the DOM element to Espresso 
document.getElementById("coffeeButton").
  addEventListener('click', function () {
    let el = document.getElementById('coffeeType');
    el.textContent = 'Espresso'
  })



// example 4
//create and insert an element 
document.getElementById('createNewElementButton').
  addEventListener('click', function () {
    let newElement = document.createElement('li');
    newElement.textContent = "KissanJam";
    document.getElementById('bakeryList').
      appendChild(newElement);
  })

// example-5
//Removing elements
document.querySelector('.bikeButton').
  addEventListener('click', function () {
    let bikePartList = document.getElementById('bikePartList');
    bikePartList.lastElementChild.remove();
  })