import axios from 'axios';

const API_KEY = 'jmUOErxbQVVyZwdpbJ3EeJZei5l4eopA';
const BASE_URL = 'https://api.giphy.com/v1/gifs/search';

export const get = (query: string = '', offset: number = 0) => axios.get(`${BASE_URL}?api_key=${API_KEY}&q=${query}&limit=9&offset=${offset}`)
    .then(res => res.data.data);