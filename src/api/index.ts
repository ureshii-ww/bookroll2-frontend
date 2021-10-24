import axios from 'axios';

export const API_URL: string = process.env.REACT_APP_API_URL + '/api/';

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL
})

export default $api;