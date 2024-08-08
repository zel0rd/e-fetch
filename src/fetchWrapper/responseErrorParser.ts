export async function handleResponseError(response: Response): Promise<never> {
  const errorText = await response.text();

  switch (response.status) {
    case 400:
      throw new Error(`Bad Request: ${errorText}`);
    case 401:
      throw new Error(`Unauthorized: ${errorText}`);
    case 403:
      throw new Error(`Forbidden: ${errorText}`);
    case 404:
      throw new Error(`Not Found: ${errorText}`);
    case 500:
      throw new Error(`Internal Server Error: ${errorText}`);
    case 502:
      throw new Error(`Bad Gateway: ${errorText}`);
    case 503:
      throw new Error(`Service Unavailable: ${errorText}`);
    default:
      throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
  }
}
