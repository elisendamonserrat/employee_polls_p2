import { _getQuestions, _getUsers } from "../utils/_DATA";
import { receiveQuestions } from "./questions";
import { receiveUsers } from "./users";
import { setAuthedUser } from "./authedUser";

export function handleInitialData() {
  return (dispatch) => {
    return Promise.all([_getQuestions(), _getUsers()])
      .then(([questions, users]) => {
        dispatch(receiveQuestions(questions));
        dispatch(receiveUsers(users));
        dispatch(setAuthedUser(null));
      })
      .catch((error) => console.log("Error: ", error.message));
  };
}
