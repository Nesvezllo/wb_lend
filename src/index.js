import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/index.scss';
import App from './App';

import { Context } from './context/StateContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

