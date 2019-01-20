import { FETCH_CARS } from "../actions/fetchCars";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_CARS:
      return [...state, action.payload];
    default:
      return state;
  }
};
