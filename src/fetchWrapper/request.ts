import { parseResponse } from './responseParser';

export class FetchWrapper {
  async get<T>(url: string): Promise<T> {
    const response = await fetch(url);
    return parseResponse<T>(response);
  }

  async post<T>(url: string, body: any): Promise<T> {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
    return parseResponse<T>(response);
  }

  async put<T>(url: string, body: any): Promise<T> {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
    return parseResponse<T>(response);
  }

  async delete<T>(url: string): Promise<T> {
    const response = await fetch(url, {
      method: 'DELETE'
    });
    return parseResponse<T>(response);
  }
}
