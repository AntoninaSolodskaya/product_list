import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import testReducer from '../testarea/testReducer';
import authReducer from '../auth/authReducer';
import productReducer from '../pages/product/productReducer';
import asyncReducer from '../async/asyncReducer';

const rootReducer = combineReducers({
    form: formReducer,
    test: testReducer,
    auth: authReducer,
    products: productReducer,
    async: asyncReducer
});

export default rootReducer;
