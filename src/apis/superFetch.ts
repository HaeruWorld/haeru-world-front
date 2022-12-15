import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_API_URL;

const SuperFetch = axios.create({
  baseURL,
  withCredentials: true,
  timeout: 20000,
});

export default SuperFetch;
