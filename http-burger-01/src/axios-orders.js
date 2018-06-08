import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://ensemble-192705.firebaseio.com/'
});

export default instance;