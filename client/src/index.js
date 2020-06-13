import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import Loader from './components/loader/Loader';
const App = lazy(() => import('./App'));

ReactDOM.render(
  <Suspense fallback={<Loader />}>
    <Router>
      <App />
    </Router>
  </Suspense>,
  document.getElementById('root')
);
