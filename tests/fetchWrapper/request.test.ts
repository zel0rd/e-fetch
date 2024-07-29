import { FetchWrapper } from '../../src/fetchWrapper/request';
import { parseResponse } from '../../src/fetchWrapper/responseParser';

jest.mock('../../src/fetchWrapper/responseParser');

const fetchWrapper = new FetchWrapper();

// Mock fetch function
global.fetch = jest.fn();

describe('FetchWrapper', () => {
  beforeEach(() => {
    (fetch as jest.Mock).mockClear();
    (parseResponse as jest.Mock).mockClear();
  });

  it('should fetch JSON data with GET', async () => {
    (parseResponse as jest.Mock).mockResolvedValue({ message: 'Hello, World!' });

    const data = await fetchWrapper.get<{ message: string }>('https://api.example.com/message');
    expect(data.message).toBe('Hello, World!');
    expect(fetch).toHaveBeenCalledWith('https://api.example.com/message');
    expect(parseResponse).toHaveBeenCalled();
  });

  it('should post JSON data and receive JSON response', async () => {
    (parseResponse as jest.Mock).mockResolvedValue({ success: true });

    const response = await fetchWrapper.post<{ success: boolean }>('https://api.example.com/submit', { name: 'Test' });
    expect(response.success).toBe(true);
    expect(fetch).toHaveBeenCalledWith('https://api.example.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: 'Test' }),
    });
    expect(parseResponse).toHaveBeenCalled();
  });

  // 나머지 테스트들
});
