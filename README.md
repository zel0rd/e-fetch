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

## 라이센스
이 프로젝트는 MIT 라이센스를 따릅니다. 자세한 내용은 LICENSE 파일을 참조하십시오.