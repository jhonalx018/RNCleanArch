import {AxiosRequestConfig} from 'axios';
import {AxiosObservable, Axios} from 'axios-observable';

export default class Requester {
  constructor(private readonly axiosInstance: Axios) {}

  /**
   * Executes HTTP-GET request
   * @param  {string} url
   * @param  {AxiosRequestConfig} config?
   * @returns AxiosObservable
   */
  public get<T>(url: string, config?: AxiosRequestConfig): AxiosObservable<T> {
    return this.axiosInstance.get(url, config);
  }

  /**
   * @param  {string} url
   * @param  {any} data?
   * @param  {AxiosRequestConfig} config?
   * @returns AxiosObservable
   */
  public post<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): AxiosObservable<T> {
    return this.axiosInstance.post(url, data, config);
  }

  /**
   * @param  {string} url
   * @param  {any} data?
   * @param  {AxiosRequestConfig} config?
   * @returns AxiosObservable
   */
  public put<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): AxiosObservable<T> {
    return this.axiosInstance.put(url, data, config);
  }

  /**
   * @param  {string} url
   * @param  {AxiosRequestConfig} config?
   * @returns AxiosObservable
   */
  public delete<T>(
    url: string,
    config?: AxiosRequestConfig,
  ): AxiosObservable<T> {
    return this.axiosInstance.delete(url, config);
  }
}
