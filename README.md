# e-fetch

## 개요
e-fetch는 JavaScript의 'fetch' API를 편리하게 사용할 수 있도록 도와주는 TypeScript 기반의 라이브러리입니다. 이 라이브러리는 HTTP 요청을 다양한 메소드기반으로 사용할 수 있습니다.

## 특징
- 'GET', 'POST', 'PUT', 'DELETE' 메서드를 통한 HTTP 요청
- 다양한 응답 데이터 타입(JSON, HTML, text) 처리

## 설치방법
`npm install e-fetch`

## 사용방법

```javascript
import { fetchWrapper } from 'my-fetch-wrapper';

// GET 요청
fetchWrapper.get<{ message: string }>('https://api.example.com/message')
  .then(response => console.log(response.message))
  .catch(error => console.error('Error:', error));

// POST 요청
fetchWrapper.post<{ success: boolean }>('https://api.example.com/submit', { name: 'Test' })
  .then(response => console.log('Success:', response.success))
  .catch(error => console.error('Error:', error));
```

## 기여

예시 코드 작성
```typescript
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

```


## 라이센스
이 프로젝트는 MIT 라이센스를 따릅니다. 자세한 내용은 LICENSE 파일을 참조하십시오.

