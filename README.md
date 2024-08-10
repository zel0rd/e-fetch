# e-fetch

## 개요
e-fetch는 JavaScript의 'fetch' API를 편리하게 사용할 수 있도록 도와주는 TypeScript 기반의 라이브러리입니다. 이 라이브러리는 HTTP 요청을 다양한 메소드기반으로 사용할 수 있습니다.

## 특징
- 'GET', 'POST', 'PUT', 'DELETE' 메서드를 통한 HTTP 요청
- 다양한 응답 데이터의 Content-Type에 따라 적절한 타입(JSON, HTML, text)으로 응답처리
- response status code에 따른 에러 메세지를 생성하고 오류반환
- requestOptions 객체를 통해 headers 옵션포함하여 요청

## 설치방법
`npm install @zelord/e-fetch`

## 사용방법 (JS)

GET요청  
fetchWrapper.get(url)
```javascript
fetchWrapper.get('https://jsonplaceholder.typicode.com/posts/1')
```

fetchWrapper.get(url, headers)
```javascript
fetchWrapper.get('https://jsonplaceholder.typicode.com/posts/1', {
  headers: {
    'Content-Type': 'application/json',  
    'Custom-Header': 'CustomValue',      
  }
})
```

POST요청  
fetchWrapper.post(url, body)
```javascript
fetchWrapper.post('https://jsonplaceholder.typicode.com/posts', {
  title: 'foo',
  body: 'bar',
  userId: 1,
});
```

fetchWrapper.post(url, body, header)
```javascript
fetchWrapper.post('https://jsonplaceholder.typicode.com/posts', {
  title: 'foo',
  body: 'bar',
  userId: 1,
}, {
  headers: {
    'Content-Type': 'application/json',  
    'Custom-Header': 'CustomValue',      
  }
});
```

PUT요청  
fetchWrapper.put(url, body)
```javascript
fetchWrapper.put('https://jsonplaceholder.typicode.com/posts/1', {
  id: 1,
  title: 'foo',
  body: 'bar',
  userId: 1,
});
```
fetchWrapper.put(url, body, headers)
```javascript
fetchWrapper.put('https://jsonplaceholder.typicode.com/posts/1', {
  id: 1,
  title: 'foo',
  body: 'bar',
  userId: 1,
}, {
  headers: {
    'Content-Type': 'application/json',  
    'Custom-Header': 'CustomValue',      
  }
});
```

DELETE요청  
fetchWrapper.delete(url)
```javascript
fetchWrapper.delete('https://jsonplaceholder.typicode.com/posts/1');
```

## 에러 정보
|status code|에러 내용|
|------|---|
|400|`Bad Request: ${errorText}`|
|401|`Unauthorized: ${errorText}`|
|403|`Forbidden: ${errorText}`|
|404|`Not Found: ${errorText}`|
|500|`Internal Server Error: ${errorText}`|
|502|`Bad Gateway: ${errorText}`|
|503|`Service Unavailable: ${errorText}`|
|etc|`HTTP error! status: ${response.status}, message: ${errorText}`|


## 예시 코드

```javascript
const { fetchWrapper } = require('@zelord/e-fetch')

async function runExample() {
  try {
    const getResponse = await fetchWrapper.get('https://jsonplaceholder.typicode.com/posts/1');
    console.log('GET response:', getResponse);

    const postResponse = await fetchWrapper.post('https://jsonplaceholder.typicode.com/posts', {
      title: 'foo',
      body: 'bar',
      userId: 1,
    });
    console.log('POST response:', postResponse);

    const putResponse = await fetchWrapper.put('https://jsonplaceholder.typicode.com/posts/1', {
      id: 1,
      title: 'foo',
      body: 'bar',
      userId: 1,
    });
    console.log('PUT response:', putResponse);

    const deleteResponse = await fetchWrapper.delete('https://jsonplaceholder.typicode.com/posts/1');
    console.log('DELETE response:', deleteResponse);
  } catch (error) {
    console.error('Error:', error);
  }
}

runExample();
```


## 라이센스
이 프로젝트는 MIT 라이센스를 따릅니다. 자세한 내용은 LICENSE 파일을 참조하십시오.

