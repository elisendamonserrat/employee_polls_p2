import React, { useState } from "react";
import { HiOutlineSwitchVertical } from "react-icons/hi";
import { useSelector } from "react-redux";
import QuestionCard from "../components/QuestionCard/QuestionCard";
import QuestionsContainer from "../components/QuestionCard/QuestionsContainer";

const HomePage = () => {
  let [toggleNewQuestions, setToggleNewQuestions] = useState(true);
  let [toggleDoneQuestions, setToggleDoneQuestions] = useState(false);
  const users = useSelector((state) => state.users);
  const authedUser = useSelector((state) => state.authedUser);
  const questionsObj = useSelector((state) => state.questions);

  const authedUserInfo = users[authedUser];

  const sortedQuestionsArr = Object.values(questionsObj).sort(function (x, y) {
    return y.timestamp - x.timestamp;
  });

  const answeredQuestionsIDs = Object.keys(authedUserInfo.answers);
  const answeredQuestionsArr = sortedQuestionsArr.filter((question) =>
    answeredQuestionsIDs.includes(question?.id)
  );

  const newQuestionsArr = sortedQuestionsArr.filter(
    (question) => !answeredQuestionsIDs.includes(question?.id)
  );

  return (
    <div className="content-container">
      <div className="flex flex-col items-center justify-end">
        <p className="text-sm mb-2 opacity-70">
          Select the questions you want to see
        </p>
        <div>
          <button
            onClick={() => setToggleNewQuestions(!toggleNewQuestions)}
            className={`w-24 mr-2 ${toggleNewQuestions ? "btn-accent" : "btn"}`}
          >
            NEW
          </button>
          <button
            onClick={() => setToggleDoneQuestions(!toggleDoneQuestions)}
            className={`w-24 ${toggleDoneQuestions ? "btn-accent" : "btn"}`}
          >
            DONE
          </button>
        </div>
      </div>
      <div className="flex flex-col">
        {toggleNewQuestions && (
          <QuestionsContainer headline={"New Questions"}>
            {newQuestionsArr &&
              newQuestionsArr.map((question) => {
                return <QuestionCard question={question} key={question.id} />;
              })}
          </QuestionsContainer>
        )}
        {toggleDoneQuestions && (
          <QuestionsContainer headline={"Done"}>
            {answeredQuestionsArr &&
              answeredQuestionsArr.map((question) => {
                return <QuestionCard question={question} key={question.id} />;
              })}
          </QuestionsContainer>
        )}
      </div>
    </div>
  );
};

export default HomePage;
