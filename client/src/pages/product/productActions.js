import { FETCH_PRODUCTS } from "./productConstants";
import { asyncActionStart, asyncActionFinish, asyncActionError } from '../../async/asyncActions';
import instance from '../../utils/api';

export const fetchProducts = products => {
  return {
    type: FETCH_PRODUCTS,
    payload: {
      products
    }
  }
};

export const loadProducts = () => {
  return async dispatch => {
    try {
      dispatch(asyncActionStart())
      await instance.get('/products')
      .then(products => {
        dispatch(fetchProducts(products))
      })
      dispatch(asyncActionFinish());
    } catch (error) {
      console.log(error);
      dispatch(asyncActionError());
    }
  }
}