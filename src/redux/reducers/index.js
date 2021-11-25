import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
import { Provider } from "react-redux";

const reducers = combineReducers({
  allProducts: productReducer,
});

export default reducers;
