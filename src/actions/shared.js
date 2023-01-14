import { _getQuestions, _getUsers } from "../utils/_DATA";
import { receiveQuestions } from "./questions";
import { receiveUsers } from "./users";
import { setAuthedUser } from "./authedUser";
import { showLoading, hideLoading } from "react-redux-loading-bar";

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return Promise.all([_getQuestions(), _getUsers()])
      .then(([questions, users]) => {
        dispatch(receiveQuestions(questions));
        dispatch(receiveUsers(users));
        dispatch(setAuthedUser(null));
        dispatch(hideLoading());
      })
      .catch((error) => {
        console.log("Error: ", error.message);
        dispatch(hideLoading());
      });
  };
}
