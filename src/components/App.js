import Login from "../pages/Login";
import "../styles/index.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import QuestionPage from "../pages/QuestionPage";
import NewPollPage from "../pages/NewPollPage";
import LeaderBoardPage from "../pages/LeaderBoardPage";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleInitialData } from "../actions/shared";
import LoadingBar from "react-redux-loading-bar";
import Navbar from "./Navbar";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleInitialData());
  }, []);

  const loading = useSelector((state) => state.loadingBar);
  console.log("laoding", loading?.default);

  return (
    <div className="container">
      <LoadingBar style={{ backgroundColor: "lightblue", height: "10px" }} />
      <Navbar />
      {loading?.default === 1 ? null : (
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/questions/:question_id" element={<QuestionPage />} />
          <Route path="/add" exact element={<NewPollPage />} />
          <Route path="/leaderboard" exact element={<LeaderBoardPage />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
