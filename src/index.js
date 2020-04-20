import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { HashRouter as Router } from 'react-router-dom';
import createHashHistory from 'history/createHashHistory';

const hashHistory = createHashHistory({basename: process.env.PUBLIC_URL })


ReactDOM.render(
  <Router history={hashHistory}>
    <App />
  </Router>,
  document.getElementById('root')
);
