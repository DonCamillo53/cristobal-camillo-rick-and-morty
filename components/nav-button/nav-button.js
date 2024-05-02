const navigation = document.querySelector('[data-js="navigation"]');

export function createNavButton() {
  const createNavContainer = document.createElement("div");
  createNavContainer.classList.add("navigation__container");
  navigation.append(createNavContainer);

  const createPrevButton = document.createElement("button");
  createPrevButton.classList.add("button", "button--prev");
  createPrevButton.setAttribute("data-js", "button-prev");
  createPrevButton.textContent = "Previous";

  const createPaginationSpan = document.createElement("span");
  createPaginationSpan.classList.add("navigation__pagination");
  createPaginationSpan.setAttribute("data-js", "pagination");
  createPaginationSpan.textContent = "1 / 42";

  const createNextButton = document.createElement("button");
  createNextButton.classList.add("button", `button--next`);
  createNextButton.setAttribute("data-js", `button-next`);
  createNextButton.textContent = "Next";

  createNavContainer.append(
    createPrevButton,
    createPaginationSpan,
    createNextButton
  );
}
