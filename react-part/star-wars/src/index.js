import React from 'react';
import ReactDOM from 'react-dom';
import ErrorBoundary from './components/ErrorBoundary';

import App from './components/App';

const app = (
  <ErrorBoundary>
    <App/>
  </ErrorBoundary>
)

ReactDOM.render(
  app
, document.getElementById('root'));