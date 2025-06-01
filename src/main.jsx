// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import './icons';
import './i18n';

// import Font Awesome core
import { library } from '@fortawesome/fontawesome-svg-core';
// import brand icons
import { faInstagram, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';
// register icon
library.add(faInstagram, faYoutube, faLinkedin);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);







