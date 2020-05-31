import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Loader from './components/loader/Loader';
const App = lazy(() => import('./App'));

ReactDOM.render(
  <Suspense fallback={<Loader />}>
    <App />
  </Suspense>,
  document.getElementById('root')
);
