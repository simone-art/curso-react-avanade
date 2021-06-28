import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//const que usa {} serve pra "desestructurar" a mesma
const person = {name: "Simone", lastName: "Santos"};

//document.getElementById injeta o HMTL na div root que está na pasta public index.html
ReactDOM.render(
  <React.StrictMode>
    <App />
    <App name={person.name}  lastName={person.lastName}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
