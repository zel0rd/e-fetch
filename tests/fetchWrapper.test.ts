import { fetchWrapper } from '../src/fetchWrapper';

// Mock fetch function
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ message: 'Hello, World!' }),
  })
) as jest.Mock;

describe('fetchWrapper', () => {
  beforeEach(() => {
    (fetch as jest.Mock).mockClear();
  });

  it('should fetch JSON data with GET', async () => {
    const data = await fetchWrapper.get<{ message: string }>('https://api.example.com/message');
    expect(data.message).toBe('Hello, World!');
    expect(fetch).toHaveBeenCalledWith('https://api.example.com/message');
  });

  it('should post JSON data and receive response', async () => {
    (fetch as jest.Mock).mockImplementationOnce(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ success: true }),
      })
    );

    const response = await fetchWrapper.post<{ success: boolean }>('https://api.example.com/submit', { name: 'Test' });
    expect(response.success).toBe(true);
    expect(fetch).toHaveBeenCalledWith('https://api.example.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: 'Test' }),
    });
  });

  it('should throw an error for non-OK responses', async () => {
    (fetch as jest.Mock).mockImplementationOnce(() =>
      Promise.resolve({
        ok: false,
        status: 404,
        json: () => Promise.resolve({}),
      })
    );

    await expect(fetchWrapper.get<{ message: string }>('https://api.example.com/notfound')).rejects.toThrow('HTTP error! status: 404');
  });
});
