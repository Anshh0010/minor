import { Navigate } from "react-router-dom";
import useAuthStatus from "../hooks/useAuthStatus";
import PathConstants from "../routes/PathConstants";

function PrivateRoute({ children }) {
  const { loggedIn, isLoading } = useAuthStatus();

  if (isLoading) {
    return <h1>Loading..</h1>;
  }

  return loggedIn ? children : <Navigate to={PathConstants.LOGIN} />;
}

export default PrivateRoute;
