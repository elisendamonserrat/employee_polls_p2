import Login from "../pages/Login";
import "../styles/index.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import QuestionPage from "../pages/QuestionPage";
import NewPollPage from "../pages/NewPollPage";
import LeaderBoardPage from "../pages/LeaderBoardPage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { handleInitialData } from "../actions/shared";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleInitialData());
  }, []);

  return (
    <>
      <div className="container">
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/questions/:question_id" element={<QuestionPage />} />
          <Route path="/add" exact element={<NewPollPage />} />
          <Route path="/leaderboard" exact element={<LeaderBoardPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
