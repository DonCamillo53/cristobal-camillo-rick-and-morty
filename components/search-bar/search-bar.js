const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);

export function createSearchBar() {
  const createSearchForm = document.createElement("form");
  createSearchForm.classList.add("search-bar");
  createSearchForm.setAttribute("data-js", "search-bar");
  searchBarContainer.append(createSearchForm);

  const createInputSearch = document.createElement("input");
  createInputSearch.classList.add("search-bar__input");
  createInputSearch.setAttribute("name", "query");
  createInputSearch.setAttribute("type", "text");
  createInputSearch.setAttribute("placeholder", "search characters");
  createInputSearch.setAttribute("aria-label", "character name");

  const createSearchButton = document.createElement("button");
  createSearchButton.classList.add("search-bar__button");
  createSearchButton.setAttribute("aria-label", "search for character");

  const createSearchButtonImage = document.createElement("img");
  createSearchButtonImage.classList.add("search-bar__icon");
  createSearchButtonImage.setAttribute("src", "./assets/images.png");

  createSearchButton.append(createSearchButtonImage);
  createSearchForm.append(createInputSearch, createSearchButton);
}
