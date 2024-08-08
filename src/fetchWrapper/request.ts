import { parseResponse } from './responseParser';
import { RequestOptions } from './requestOptions';

export class FetchWrapper {
  private defaultHeaders: HeadersInit = {};

  setDefaultHeaders(headers: HeadersInit) {
    this.defaultHeaders = headers;
  }

  private async request<T>(url: string, config: RequestInit): Promise<T> {
    try {
      const response = await fetch(url, config);
      return parseResponse<T>(response);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Fetch error: ${error.message}`);
      }
      throw new Error(`Fetch error: ${String(error)}`);
    }
  }

  async get<T>(url: string, options: RequestOptions = {}): Promise<T> {
    const config: RequestInit = {
      ...options,
      method: 'GET',
      headers: {
        ...this.defaultHeaders,
        ...options.headers
      }
    };
    return this.request<T>(url, config);
  }

  async post<T>(url: string, body: any, options: RequestOptions = {}): Promise<T> {
    const config: RequestInit = {
      ...options,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...this.defaultHeaders,
        ...options.headers
      },
      body: JSON.stringify(body)
    };
    return this.request<T>(url, config);
  }

  async put<T>(url: string, body: any, options: RequestOptions = {}): Promise<T> {
    const config: RequestInit = {
      ...options,
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        ...this.defaultHeaders,
        ...options.headers
      },
      body: JSON.stringify(body)
    };
    return this.request<T>(url, config);
  }

  async delete<T>(url: string, options: RequestOptions = {}): Promise<T> {
    const config: RequestInit = {
      ...options,
      method: 'DELETE',
      headers: {
        ...this.defaultHeaders,
        ...options.headers
      }
    };
    return this.request<T>(url, config);
  }
}
