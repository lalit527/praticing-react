import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://ensem192705.firebaseio.com/'
});

export default instance;