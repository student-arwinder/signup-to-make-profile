import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import {Provider} from "react-redux";
import countStore from './store/index.js';




ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <Provider store={countStore}>
    <App />
    </Provider>
   
  </React.StrictMode>,
)
