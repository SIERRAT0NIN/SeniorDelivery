import { Route, Navigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const { isSignedIn } = useUser();

  return isSignedIn ? (
    <Route {...rest} element={<Component />} />
  ) : (
    <Navigate to="/sign-in" />
  );
};

export default ProtectedRoute;
