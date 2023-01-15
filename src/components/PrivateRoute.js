import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";


export default function PrivateRoute({ children }) {
  const authedUser = useSelector((state) => state.authedUser);

  if (!authedUser) {
    // not logged in so redirect to login page with the return url
    return <Navigate to="/login" />;
  }

  // authorized so return child components
  return children;
}
