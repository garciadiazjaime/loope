import React from 'react';
import { render } from 'react-dom';
import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { devTools } from 'redux-devtools';
import { DebugPanel, DevTools } from 'redux-devtools/lib/react';
import DiffMonitor from 'redux-devtools-diff-monitor';

import App from './src/components/App.js';
import appReducer from './src/state';

const initialState = {};

const store = compose(
  applyMiddleware(thunk),
  devTools()
)(createStore)(appReducer, initialState);

render(
  <div>
    <DebugPanel top right bottom>
      <DevTools store={store} monitor={DiffMonitor} />
    </DebugPanel>
    <Provider store={store}>
      <App />
    </Provider>
  </div>,
  document.querySelector('main')
);
