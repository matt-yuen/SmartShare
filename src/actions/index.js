// import api from "../api/api";

import { FETCH_CARS } from "./types";

// export const fetchCars = () => async dispatch => {
//   const response = await api.get("/carlist");
//   dispatch({ type: FETCH_CARS, payload: response });
// };

export const fetchCars = () => {
  return {
    type: FETCH_CARS,
    payload: {
      model: "Odyssey",
      make: "Honda",
      year: "2000",
      extra: "Test extra"
    }
  };
};
