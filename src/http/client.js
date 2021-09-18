import axios from "axios";

const { REACT_APP_STAR_WARS_API } = process.env;

const starWarsClient = axios.create({ baseURL: REACT_APP_STAR_WARS_API });

export { starWarsClient };