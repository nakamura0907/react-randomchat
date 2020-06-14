import React from 'react';
import ReactDOM from 'react-dom';
import {createGlobalStyle} from "styled-components";
import './index.css';
import App from './App';
import Head from "./components/templates/Head"
import * as serviceWorker from './serviceWorker';

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
}

body {
  color: rgba(0, 0, 0, .65);
  font-size: 14px;
}

i {
  font-size: 32px;
}

ul {
  list-style-type: none;
}
`;

ReactDOM.render(
  <>
    <Head />
    <GlobalStyle />
    <App />
  </>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
