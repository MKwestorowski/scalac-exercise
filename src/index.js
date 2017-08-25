import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './style/style.css'
import 'react-select/dist/react-select.css';


import store from './store'


import App from './components/App'


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);