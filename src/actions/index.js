// import api from "../api/api";

import { FETCH_CARS } from "./types";
import * as firebase from "firebase";

// var app = firebase.initializeApp({
//   apiKey: "AIzaSyDg0ZjuvjlJK8X4Mr7BR6JxzJIg4RNYqEc",
//   authDomain: "smartshare-db7de.firebaseapp.com",
//   databaseURL: "https://smartshare-db7de.firebaseio.com",
//   projectId: "smartshare-db7de",
//   storageBucket: "smartshare-db7de.appspot.com",
//   messagingSenderId: "521172786419"
// });

var db = firebase.database();

export const fetchCars = () => async dispatch => {
  let array = [];

  const response = await db
    .ref("/Vehicles")
    .once("value")
    .then(snapshot => {
      let i;

      for (i = 0; i < 4; i++) {
        array[i] = snapshot.val()[i];
      }
    });

  dispatch({ type: FETCH_CARS, payload: array });
};

// export const fetchCars = () => {
//   db.ref("/mattyuen")
//     .once("value")
//     .then(snapshot => {
//       console.log(snapshot.val());
//     });
//   return {
//     type: FETCH_CARS,
//     payload: {
//       model: "Odyssey",
//       make: "Honda",
//       year: "2000",
//       extra: "Test extra",
//       lat: "43.6596426",
//       lng: "-79.3998563"
//     }
//   };
// };
