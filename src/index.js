import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB-5uatTH5hRfmbEtmavWgO77EPh7lGafE",
  authDomain: "fixar-b871b.firebaseapp.com",
  projectId: "fixar-b871b",
  storageBucket: "fixar-b871b.appspot.com",
  messagingSenderId: "914789306254",
  appId: "1:914789306254:web:ae5422e7ae0468b2fd9edf"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
); 

reportWebVitals();
