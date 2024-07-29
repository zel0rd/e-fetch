export async function parseResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const contentType = response.headers.get('content-type');
  if (contentType?.includes('application/json')) {
    return response.json() as Promise<T>;
  } else if (contentType?.includes('text/html')) {
    const text = await response.text();
    return text as unknown as T;
  } else if (contentType?.includes('text/plain')) {
    const text = await response.text();
    return text as unknown as T;
  } else {
    throw new Error(`Unsupported content type: ${contentType}`);
  }
}
