import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';  // ตรวจสอบให้แน่ใจว่าเส้นทางไฟล์ App ถูกต้อง
import 'SMARTLAB/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);