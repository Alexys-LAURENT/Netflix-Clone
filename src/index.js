import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './Components/App';

import { profil } from './data/profil.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App profil={profil} />
  </React.StrictMode>
);

