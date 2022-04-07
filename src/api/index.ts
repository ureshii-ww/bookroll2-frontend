import axios from 'axios';

export const API_URL: string = process.env.REACT_APP_API_URL || '';

let currentUserUrl = JSON.parse(localStorage.getItem('userData') || '{}')?.url;

export const setUserUrl = (url: string) => {
  currentUserUrl = url;
};

export const setUserToken = (token: string) => {
  $api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

let isRefreshing = false;
let failedQueue: any[] = [];

const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach(prom => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });

  failedQueue = [];
};

$api.interceptors.response.use(
  config => {
    return config;
  },
  async error => {
    const originalRequest = error.config;
    if (error.response.status == 401 && error.config && !error.config._isRetry) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then(token => {
            originalRequest.headers.Authorization = `Bearer ${token}`;
            return $api.request(originalRequest);
          })
          .catch(err => {
            return Promise.reject(err);
          });
      }

      originalRequest._isRetry = true;
      isRefreshing = true;
      try {
        const response = await axios.post(
          API_URL + 'auth/refresh',
          { userUrl: currentUserUrl },
          { withCredentials: true }
        );
        $api.defaults.headers.common['Authorization'] = `Bearer ${response.headers['x-access-token']}`;
        originalRequest.headers.Authorization = `Bearer ${response.headers['x-access-token']}`;
        processQueue(null, response.headers['x-access-token']);
        return $api.request(originalRequest);
      } catch (error) {
        processQueue(error, null);
        console.log('Not Authorized');
      } finally {
        isRefreshing = false;
      }
    }
    throw error;
  }
);

export default $api;
