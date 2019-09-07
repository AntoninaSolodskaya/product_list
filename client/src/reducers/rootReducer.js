import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from '../auth/authReducer';
import productReducer from '../pages/product/productReducer';
import asyncReducer from '../async/asyncReducer';
import commentsReducer from '../pages/comments/commentsReducer';

const rootReducer = combineReducers({
    form: formReducer,
    auth: authReducer,
    products: productReducer,
    async: asyncReducer,
    comments: commentsReducer
});

export default rootReducer;
