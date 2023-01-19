import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from "axios"
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

axios.defaults.baseURL = "http://localhost:5000" // the url of our backend API

//If we intercept requst, it changes the request object before we hit the API
axios.interceptors.request.use((config) => {
  const token = localStorage.getItem("token")
  if(token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

//If we intercept response, it changes the response object after getting the response from 
// the API but before handing it to the frontend

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
