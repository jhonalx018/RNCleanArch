// @ts-nocheck
import axios from 'axios-observable';
import {ITUNES_URL} from '@env';

const globalAxiosInstance = axios.create({
  baseURL: ITUNES_URL,
});

// Add a request interceptor
globalAxiosInstance.interceptors.request.use(
  config =>
    // Do something before request is sent
    // eslint-disable-next-line implicit-arrow-linebreak
    config,
  error =>
    // Do something with request error
    // eslint-disable-next-line implicit-arrow-linebreak
    Promise.reject(error),
);

// Add a response interceptor
globalAxiosInstance.interceptors.response.use(
  response =>
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    // eslint-disable-next-line implicit-arrow-linebreak
    response,
  error =>
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // eslint-disable-next-line implicit-arrow-linebreak
    Promise.reject(error),
);

export default globalAxiosInstance;
