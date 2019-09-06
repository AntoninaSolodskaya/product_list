import { createReducer } from "../../utils/reducerUtil";
import { FETCH_PRODUCTS } from "./productConstants";

const initialState = [];

export const fetchProducts = (state, payload) => {
  return payload.products;
};

export default createReducer(initialState, {
  [FETCH_PRODUCTS]: fetchProducts
});