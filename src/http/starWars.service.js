import axios from "axios";
import { starWarsClient } from "./client";
import { starWarsEndpoints } from "./endpoints";

export function getCharacters(page = 1) {
  return starWarsClient.get(starWarsEndpoints.getCharacters, { params: { page }});
}

export function getPeople(id) {
  return starWarsClient.get(starWarsEndpoints.getPeople(id))
}

export function getFromUrl(url) {
  return axios.get(url);
}