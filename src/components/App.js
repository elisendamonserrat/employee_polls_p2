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
import PrivateRoute from "./PrivateRoute";
import ErrorMessage from "./ErrorMessage";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleInitialData());
  }, []);

  const loading = useSelector((state) => state.loadingBar);

  return (
    <div className="">
      <LoadingBar style={{ backgroundColor: "lightblue", height: "10px" }} />
      <Navbar />
      {loading?.default === 1 ? null : (
        <Routes>
          <Route
            path="/"
            exact
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            }
          />
          <Route path="/login" exact element={<Login />} />
          <Route
            path="/questions/:question_id"
            element={
              <PrivateRoute>
                <QuestionPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/add"
            exact
            element={
              <PrivateRoute>
                <NewPollPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/leaderboard"
            exact
            element={
              <PrivateRoute>
                <LeaderBoardPage />
              </PrivateRoute>
            }
          />
          <Route
            path="*"
            exact
            element={
              <PrivateRoute>
                <ErrorMessage />
              </PrivateRoute>
            }
          />
          <Route component={<ErrorMessage />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
