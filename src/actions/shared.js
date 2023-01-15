import { _getQuestions, _getUsers, _saveQuestion } from "../utils/_DATA";
import { receiveQuestions, addQuestion } from "./questions";
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

// ASYNC ACTION THAT WILL UPDATE THE QUESTIONS AND USERS STATE
export function handleAddQuestion(question) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    dispatch(showLoading());
    return _saveQuestion({
      optionOneText: question.optionOne,
      optionTwoText: question.optionTwo,
      author: authedUser,
    })
      .then((question) => {
        dispatch(addQuestion(question));
      })
      .then(() => dispatch(hideLoading()))
      .catch((error) => console.log("Error: ", error));
  };
}
