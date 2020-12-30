import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import createLogger from 'redux-logger';
import rootReducer from './reducers/index';

import { getAllProducts } from './actions/index';


// const middleware = [thunk];

// if (process.env.NODE_ENV !== 'production') {
//     middleware.push(createLogger());
// }

const store = createStore(
    rootReducer, 
    applyMiddleware(thunk)
);

store.dispatch(getAllProducts());

export default store;

