class FetchWrapper {
  async get<T>(url: string): Promise<T> {
    const response = await fetch(url);
    return this.parseJson<T>(response);
  }

  async post<T>(url: string, body: any): Promise<T> {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
    return this.parseJson<T>(response);
  }

  private async parseJson<T>(response: Response): Promise<T> {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data as T;
  }
}

export const fetchWrapper = new FetchWrapper();
