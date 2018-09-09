import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import './styles/index.css';
import { App } from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import rootReducer from './reducers';
import middleware from './middleware';

const store = createStore(rootReducer, middleware);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
