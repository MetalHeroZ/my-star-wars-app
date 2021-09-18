import { starWarsClient } from "./client";
import { starWarsEndpoints } from "./endpoints";

export function getCharacters() {
  return starWarsClient.get(starWarsEndpoints.getPeople);
}