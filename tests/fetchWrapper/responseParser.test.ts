import { parseResponse } from '../../src/fetchWrapper/responseParser';

describe('parseResponse', () => {
  it('should parse JSON response', async () => {
    const mockResponse = {
      ok: true,
      headers: {
        get: () => 'application/json',
      },
      json: () => Promise.resolve({ message: 'Hello, World!' }),
    } as unknown as Response;

    const data = await parseResponse<{ message: string }>(mockResponse);
    expect(data.message).toBe('Hello, World!');
  });

  it('should parse text response', async () => {
    const mockResponse = {
      ok: true,
      headers: {
        get: () => 'text/plain',
      },
      text: () => Promise.resolve('Plain text response'),
    } as unknown as Response;

    const data = await parseResponse<string>(mockResponse);
    expect(data).toBe('Plain text response');
  });

  it('should parse HTML response', async () => {
    const mockResponse = {
      ok: true,
      headers: {
        get: () => 'text/html',
      },
      text: () => Promise.resolve('<html><body>Hello, World!</body></html>'),
    } as unknown as Response;

    const data = await parseResponse<string>(mockResponse);
    expect(data).toBe('<html><body>Hello, World!</body></html>');
  });

  it('should throw an error for non-OK responses', async () => {
    const mockResponse = {
      ok: false,
      status: 404,
      headers: {
        get: () => 'application/json',
      },
      json: () => Promise.resolve({}),
    } as unknown as Response;

    await expect(parseResponse<{ message: string }>(mockResponse)).rejects.toThrow('HTTP error! status: 404');
  });

  it('should throw an error for unsupported content type', async () => {
    const mockResponse = {
      ok: true,
      headers: {
        get: () => 'application/unsupported',
      },
      text: () => Promise.resolve('Unsupported content'),
    } as unknown as Response;

    await expect(parseResponse<any>(mockResponse)).rejects.toThrow('Unsupported content type: application/unsupported');
  });
});
