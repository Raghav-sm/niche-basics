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