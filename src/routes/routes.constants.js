import { getIdFromPeopleUrl } from "@/helpers/urlFilter";

export const home = '/';
export const details = '/details/:id';

export const goToDetails = (url) => {
  const id = getIdFromPeopleUrl(url);
  return `/details/${id}`;
};