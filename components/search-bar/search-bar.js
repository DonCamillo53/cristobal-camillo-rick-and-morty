import { createCharacterCard } from "../card/card.js";

export function searchFunction(fetchedData, searchInput) {
  const result = fetchedData.find(({ name }) => name === searchInput);
  const image = result.image;
  const characterName = result.name;
  const status = result.status;
  const type = result.type;
  const occurrences = result.episode.length;

  createCharacterCard(image, characterName, status, type, occurrences);
}
