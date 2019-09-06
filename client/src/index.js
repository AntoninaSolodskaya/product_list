import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from './store/configureStore';
import history from './history';
import './index.css';
import App from './app/App';
// import ScrollToTop from "./common/util/ScrollToTop";

import * as serviceWorker from './serviceWorker';

const store = configureStore();
// store.dispatch(loadCards());

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter history={history}>
            <App />
        </BrowserRouter>
    </Provider>,

    document.getElementById('root')
);

serviceWorker.unregister();
