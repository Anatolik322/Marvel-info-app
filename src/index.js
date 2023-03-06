import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import MarvelServise from './services/MarvelService'
import './style/style.scss';

let ser = new MarvelServise;
ser.getAllChar().then(res => console.log(res.data.results));
ser.getChar(1011196).then(res => console.log(res.data.results));
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

