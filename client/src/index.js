import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux'
import store from './store'
import styles from './index.css'
import App from './App';

import Toast from './toast';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <App />
    </Provider>
);
