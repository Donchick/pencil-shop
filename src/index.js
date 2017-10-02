import React from 'react';
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/App'
import reducer from './reducers'
import { getAllPencils } from './actions';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom'
import './index.css';

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);

render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);
