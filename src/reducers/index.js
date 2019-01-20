import { combineReducers } from "redux";

import { FETCH_CARS } from "../actions/types";

const carsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_CARS:
      console.log("carsReducer");
      return [...state, action.payload];
    default:
      return state;
  }
};

export default combineReducers({
  cars: carsReducer
});
