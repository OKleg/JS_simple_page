import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/layouts/Header.jsx'
import Router from './components/router/Router.jsx'
import { store } from './store/store.js';
import { Provider } from 'react-redux';

import './assets/styles/global.css'
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Header/>
    <Router/>
  </Provider>,
)
