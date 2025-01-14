const myText = document.querySelector(".container")
whoAmI = ["Raghav", "Batman", "Spiderman"];
let identityIndex = 0;
let characterIndex = 0;

updateText();

function updateText() {
  myText.innerHTML = `<h1>I am ${whoAmI[identityIndex].
    slice(0, characterIndex)}</h1>`
  characterIndex++;

  if (characterIndex > whoAmI[identityIndex].length) {
    identityIndex++;
    characterIndex = 0;
  }

  setTimeout(updateText, 300);

}


