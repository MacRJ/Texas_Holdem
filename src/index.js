import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import Store from './Store';
import 'bootstrap/dist/css/bootstrap.min.css';

let store = new Store()

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>
  , document.getElementById('root'));
