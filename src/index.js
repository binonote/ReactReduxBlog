import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router'
import routes from './routes';
import reducers from './reducers';
import promise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes} />

  </Provider>
  , document.querySelector('.container'));



/*
  import Router, and browserHistory from react-router
  import the routes that you set for your application
  Inside the provider component, include Router as child component
  pass in 2 props: history and routes
  history value is browserHistory that you import above
  routes is the routes.js that you import above
*/
