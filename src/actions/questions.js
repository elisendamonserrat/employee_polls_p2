export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const VOTE_QUESTIONS = "VOTE_QUESTIONS";
export const ANSWER_QUESTION = "ANSWER_QUESTION";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

export function answerQuestion(answer, qid, authedUser) {
  return {
    type: ANSWER_QUESTION,
    answer,
    qid,
    authedUser
  };
}