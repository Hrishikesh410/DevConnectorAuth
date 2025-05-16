/* eslint-disable import/no-anonymous-default-export */
import { SET_ALERT, REMOVE_ALERT } from "../actions/types";
const initialState = [];

//Create a anonymus function which contains all the ACTION TYPES which will return the payload and state
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_ALERT:
      return [...state, payload];

    case REMOVE_ALERT:
      return state.filter((alert) => alert.id !== payload);
    default:
      return state;
  }
}
