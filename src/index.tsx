import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/scss/style.scss';
import './assets/scss/normalize.scss';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { Provider } from 'react-redux';
import { store } from './Store';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode> 
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>   
  </React.StrictMode>
);