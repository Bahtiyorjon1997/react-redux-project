import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productReducer";
import { Provider } from "react-redux";

const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
});

export default reducers;
