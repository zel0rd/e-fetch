import { handleResponseError } from './responseErrorParser';

export async function parseResponse<T>(response: Response): Promise<T> {
  const contentType = response.headers.get('content-type');

  if (!response.ok) {
    await handleResponseError(response);
  }

  if (contentType?.includes('application/json')) {
    return response.json() as Promise<T>;
  }

  if (contentType?.includes('text/html')) {
    const text = await response.text();
    return text as unknown as T;
  }

  if (contentType?.includes('text/plain')) {
    const text = await response.text();
    return text as unknown as T;
  }

  throw new Error(`Unsupported content type: ${contentType}`);
}
