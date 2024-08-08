import { fetchWrapper } from '../fetchWrapper';

async function runExample() {
  try {
    fetchWrapper.setDefaultHeaders({
      'Authorization': 'Bearer your-token',
    });

    const getResponse = await fetchWrapper.get<any>('https://jsonplaceholder.typicode.com/posts/1');
    console.log('GET response:', getResponse);

    const postResponse = await fetchWrapper.post<any>('https://jsonplaceholder.typicode.com/posts', {
      title: 'foo',
      body: 'bar',
      userId: 1,
    });
    console.log('POST response:', postResponse);

    const putResponse = await fetchWrapper.put<any>('https://jsonplaceholder.typicode.com/posts/1', {
      id: 1,
      title: 'foo',
      body: 'bar',
      userId: 1,
    });
    console.log('PUT response:', putResponse);

    const deleteResponse = await fetchWrapper.delete<any>('https://jsonplaceholder.typicode.com/posts/1');
    console.log('DELETE response:', deleteResponse);
  } catch (error) {
    console.error('Error:', error);
  }
}

runExample();
