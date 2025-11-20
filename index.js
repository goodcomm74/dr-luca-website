import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './DrLucaWebsite.jsx'; // 메인 컴포넌트 임포트

// 1. index.html의 'root' 엘리먼트를 찾습니다.
const rootElement = document.getElementById('root');

// 2. React 18 방식의 루트를 생성합니다.
const root = ReactDOM.createRoot(rootElement);

// 3. App 컴포넌트(DrLucaWebsite.jsx)를 렌더링합니다.
root.render(
<React.StrictMode>
<App />
</React.StrictMode>
);