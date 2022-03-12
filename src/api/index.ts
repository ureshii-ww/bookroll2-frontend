import axios from 'axios';

export const API_URL: string = process.env.REACT_APP_API_URL;

let currentUserUrl = JSON.parse(localStorage.getItem('userData') || '{}')?.url;

export const setUserUrl = (url: string) => {
  currentUserUrl = url;
}

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL
})

$api.interceptors.response.use(config => {
  return config
}, async error => {
  const originalRequest = error.config;
  if (error.response.status == 401 && error.config && !error.config._isRetry) {
    originalRequest._isRetry = true;
    try {
      const response = await axios.post(API_URL + 'auth/refresh',
        {userUrl: currentUserUrl}, {withCredentials: true});
      $api.defaults.headers.common['Authorization'] = `Bearer ${response.headers['x-access-token']}`
      originalRequest.headers.Authorization = `Bearer ${response.headers['x-access-token']}`;
      return $api.request(originalRequest);
    } catch (error) {
      console.log('Not Authorized');
    }
  }
  throw error;
})

export default $api;