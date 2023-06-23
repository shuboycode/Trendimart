import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import '../src/styles/main.scss';
import reportWebVitals from './reportWebVitals';
// import "../src/Fonts/libre-baskerville/LibreBaskerville-Bold.Woff";
// import '../src/Fonts/libre-baskerville/LibreBaskerville-Bold.Woff';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
