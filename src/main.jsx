import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './styles/main.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC50Pl6BOH0Lj0H1xxu-wOkoKY85lmjIM4",
  authDomain: "coder-ecommerce-7bdea.firebaseapp.com",
  projectId: "coder-ecommerce-7bdea",
  storageBucket: "coder-ecommerce-7bdea.appspot.com",
  messagingSenderId: "536406747471",
  appId: "1:536406747471:web:923011ebc8f34b7cbbfd3a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

