import { createCharacterCard } from "./components/card/card.js";
import { createNavButton } from "./components/nav-button/nav-button.js";
import { createSearchBar } from "./components/search-bar/search-bar.js";

createSearchBar();
createNavButton();

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBar = document.querySelector('[data-js="search-bar"]');
const searchBarInput = document.querySelector(".search-bar__input");
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
let maxPage = 42;
let page = 1;
let searchQuery = "";

//This is the search function//
searchBar.addEventListener("submit", (e) => {
  e.preventDefault();
  cardContainer.innerHTML = "";
  searchQuery = searchBarInput.value;
  fetchCharacters(page, searchQuery);
  searchBarInput.value = "";
});

async function fetchCharacters(page, name) {
  try {
    cardContainer.innerHTML = "";
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${page}&name=${name}`
    );
    if (response.ok) {
      const data = await response.json();
      maxPage = data.info.pages;
      const characters = data.results;
      pagination.textContent = `${page} / ${maxPage}`;
      characters.map((character) => {
        createCharacterCard(
          character.image,
          character.name,
          character.status,
          character.type,
          character.episode.length
        );
      });
    }
  } catch (error) {
    console.error(error);
  }
}
fetchCharacters(page, searchQuery);

prevButton.addEventListener("click", () => {
  if (page > 1) {
    page -= 1;
    fetchCharacters(page, searchQuery);
    pagination.textContent = `${page} / ${maxPage}`;
  }
  // else {
  //   prevButton.disabled = true;
  // }
});

nextButton.addEventListener("click", () => {
  if (page < maxPage) {
    page += 1;
    fetchCharacters(page, searchQuery);
    pagination.textContent = `${page} / ${maxPage}`;
  }
  // else {
  //   nextButton.disabled = true;
  // }
});

document
  .querySelector(".header-Logo")
  .addEventListener("click", () => location.reload());
