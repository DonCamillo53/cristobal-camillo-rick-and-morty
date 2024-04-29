export function createCharacterCard(
  image,
  characterName,
  status,
  type,
  occurrences
) {
  const card = document.createElement("li");
  card.classList.add("card-container");
  document.getElementsByClassName("card-container").append(card);

  const cardImageContainer = document.createElement("div");
  cardImageContainer.classList.add("card__image-container");
  card.append(cardImageContainer);

  const cardImage = document.createElement("img");
  cardImage.setAttribute("src", image);
  cardImage.classList.add("card__image");
  cardImage.setAttribute("alt", characterName);

  const cardImageGradient = document.createElement("div");

  cardImageContainer.append(cardImage, cardImageGradient);

  const cardContent = document.createElement("div");
  cardContent.classList.add("card__content");
  card.append(cardContent);

  const cardTitle = document.createElement("h2");
  cardTitle.classList.add("card__title");
  cardTitle.textContent = characterName;

  const cardInfo = document.createElement("dl");
  cardInfo.classList.add("card__info");
  cardContent.append(cardTitle, cardInfo);

  const cardInfoTitleStatus = document.createElement("dt");
  cardInfoTitleStatus.classList.add("card__info-title");
  cardInfoTitleStatus.textContent = "Status";

  const cardInfoDescriptionStatus = document.createElement("dd");
  cardInfoDescriptionStatus.classList.add("card__info-description");
  cardInfoDescriptionStatus.textContent = status;

  const cardInfoTitleType = document.createElement("dt");
  cardInfoTitleType.classList.add("card__info-title");
  cardInfoTitleType.textContent = "Type";

  const cardInfoDescriptionType = document.createElement("dd");
  cardInfoDescriptionType.classList.add("card__info-description");
  cardInfoDescriptionType.textContent = type;

  const cardInfoTitleOccurrences = document.createElement("dt");
  cardInfoTitleOccurrences.classList.add("card__info-title");
  cardInfoTitleOccurrences.textContent = "Occurrences";

  const cardInfoDescriptionOccurrences = document.createElement("dd");
  cardInfoDescriptionOccurrences.classList.add("card__info-description");
  cardInfoDescriptionOccurrences.textContent = occurrences;

  cardInfo.append(
    cardInfoTitleStatus,
    cardInfoDescriptionStatus,
    cardInfoTitleType,
    cardInfoDescriptionType,
    cardInfoTitleOccurrences,
    cardInfoDescriptionOccurrences
  );
}
