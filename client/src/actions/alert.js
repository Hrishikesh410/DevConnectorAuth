import { v4 as uuidv4 } from "uuid";
import { SET_ALERT, REMOVE_ALERT } from "./types";

//Create functions which handles actions and dispatches the data to specfic action that is called in the page
export const setAlert =
  (msg, alertType, timout = 5000) =>
  (dispatch) => {
    const id = uuidv4();
    dispatch({
      type: SET_ALERT,
      payload: { msg, alertType, id },
    });
    setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timout);
  };
