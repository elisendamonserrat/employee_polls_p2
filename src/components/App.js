import Login from "../pages/Login";
import "../styles/index.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="container">
        <Routes>
          <Route path="/login" exact element={<Login />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
