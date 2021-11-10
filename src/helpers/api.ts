import axios from 'axios';
import { API_URL } from './consts';

const apiPokemon = axios.create({
  baseURL: API_URL,
});

export default apiPokemon;
