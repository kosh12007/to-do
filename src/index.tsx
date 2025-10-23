import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { Provider } from 'react-redux';
import { store } from './Store';
import { GlobalStyle } from './styles/GlobalSyle';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode> 
    <Provider store={store}>
      <GlobalStyle />
    <RouterProvider router={router} />
    </Provider>   
  </React.StrictMode>
);