import axios from 'axios';

const api = axios.create({
    baseURL: 'https://www.omdbapi.com/?apikey=21071de5&s=',
})

export default api;