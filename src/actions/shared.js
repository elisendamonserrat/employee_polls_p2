import { _getQuestions, _getUsers } from "../utils";
import { receiveQuestions } from "./questions";
import { receiveUsers } from "./users";

export function handleInitialData() {
  return (dispatch) => {
    return Promise.all([_getQuestions(), _getUsers()])
      .then((questions, users) => {
        dispatch(receiveQuestions(questions));
        dispatch(receiveUsers(users));
      })
      .catch((error) => console.log("Error: ", error.message));
  };
}
