export function getIdFromPeopleUrl(url) {
  return url
    .replace(process.env.REACT_APP_STAR_WARS_API, '')
    .replace('people', '')
    .replace(/\//g, '');
}