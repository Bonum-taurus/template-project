import React from 'react';
import ReactDOM from 'react-dom/client';

import { HashRouter as Router } from 'react-router-dom';

import './index.css';

import { RootRouter } from './RootRouter';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Router>
      <RootRouter/>
    </Router>
  </React.StrictMode>
);

