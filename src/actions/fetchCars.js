import api from "../api/api";

export const FETCH_CARS = "fetch_cars";

export const fetchCars = () => async dispatch => {
  const response = await api.get("/carlist");
  dispatch({ type: FETCH_CARS, payload: response });
};
