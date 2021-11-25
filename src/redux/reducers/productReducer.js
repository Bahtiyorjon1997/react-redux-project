import { ActionTypes } from "../contants/actionTypes";

const initialState = {
  products: [
    {
      id: 1,
      title: "bakhtee",
      category: "web_developer",
    },
  ],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    //the type is from  --> action.type
    case ActionTypes.SET_PRODUCTS:
      return state;
    default:
      return state;
  }
};
