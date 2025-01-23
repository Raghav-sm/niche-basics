const accessKey = "";
let page = 1;
const formEl = document.querySelector('form');
const inputEl = document.getElementById('search-Id');
const searchBtnEl = document.getElementById('search-btn');
const searchResultEl = document.querySelector('.search-result');
const searchResultSEl = document.querySelector('.search-results');
const showMorBtnEl = document.getElementById('show-more-btn');




async function fetchImages(query, page) {
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${query}&client_id=${accessKey}`;
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Eno Https error idhe !', response.status);
    }
    const data = await response.json(); // parsed 
    return data.results;

  } catch (error) {
    console.log("Error while fetching Images", error);
  }
  return [];
}


function displayImages(Images) {
  searchResultSEl.innerHTML = "";

  Images.forEach(Image => {
    const searchResultDiv = document.createElement('div');
    searchResultDiv.classList.add('search-result');
    searchResultDiv.innerHTML = `
      <img src="${Image.urls.small}" alt="${Image.alt_description || 'Image'}"/>
      <a href="${Image.links.html}" target="_blank" rel="noopener noreferrer">
        ${Image.alt_description}
      </a>
    `;
    searchResultSEl.appendChild(searchResultDiv);
  });
}


showMorBtnEl.addEventListener('click', async (e) => {
  page++;
  const inputData = inputEl.value.trim();
  if (inputData) {
    let image = await fetchImages(inputData, page);
    displayImages(image);
  }
})


formEl.addEventListener('submit', async (e) => {
  e.preventDefault();
  const inputData = inputEl.value.trim();
  searchResultSEl.innerHTML = "";
  let page = 1;
  if (inputData) {
    const Images = await fetchImages(inputData, page);
    displayImages(Images);
  }
})