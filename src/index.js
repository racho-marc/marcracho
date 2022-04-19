import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import App from './App';

import "./index.scss";

const rootElement = document.getElementById('root');

render(
  <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
  </React.StrictMode>,
  rootElement
);

