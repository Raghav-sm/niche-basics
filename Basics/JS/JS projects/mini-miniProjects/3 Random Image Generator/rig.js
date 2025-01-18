const btnEl = document.querySelector(".btn");
const imageContainer = document.querySelector(".image-container");

btnEl.addEventListener('click', () => {
  loadImages();
})

function loadImages() {
  const newImage = document.createElement("img");
  newImage.src = `
  https://picsum.photos/300?random=${Math.random() * 2000}
  `
  imageContainer.appendChild(newImage);
}