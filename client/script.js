import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';

import 'babel-polyfill';

// IMPORT STYLES
import css from './styles/app.scss';

// IMPORT COMPONENTS
import App from './components/App';
import ArticleGrid from './components/ArticleGrid';
import ArticleSingle from './components/ArticleSingle';

// IMPORT STORE
import configureStore from './store';
const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);
// import { history } from './store';

const router = (
   <Provider store={store}>
      <Router history={history}>
         <Route path="/" component={App}>
            <IndexRoute component={ArticleGrid}></IndexRoute>
            <Route path="/article/:articleId" component={ArticleSingle}></Route>
         </Route>
      </Router>
   </Provider>
);

render(router, document.getElementById('root'));
