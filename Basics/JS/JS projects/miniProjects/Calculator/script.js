const calcInput = document.getElementById('calcInput');
const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const buttonText = e.target.innerText;

    
    if (buttonText == "AC") {
      calcInput.value = "";
    }
    else if (buttonText == "DEL") {
      calcInput.value = calcInput.value.slice(0, -1);
    }
    else if (buttonText == "=") {
      try {
        calcInput.value = eval(calcInput.value.replace("X", "*").replace("%", "/"));
      } catch (e) {
        console.log("Error", e);

      }
    }
    else {
      calcInput.value += buttonText;
    }
  });

});