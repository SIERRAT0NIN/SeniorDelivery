import "./style/App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Dashboard from "../pages/Dashboard";
import Explore from "../pages/Explore";
import NotFound from "../pages/NotFound";
import Signin from "../pages/Sign-in";
import Checkout from "../pages/Checkout";
import UserProfilePage from "../pages/UserProfilePage";

import { SignedIn, SignedOut } from "@clerk/clerk-react";

const ProtectedRoute = ({ element }) => {
  return (
    <>
      <SignedIn>{element}</SignedIn>
      <SignedOut>
        <Navigate to="/sign-in" />
      </SignedOut>
    </>
  );
};
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<ProtectedRoute element={<About />} />} />
        <Route
          path="/dashboard"
          element={<ProtectedRoute element={<Dashboard />} />}
        />
        <Route
          path="/explore"
          element={<ProtectedRoute element={<Explore />} />}
        />
        <Route
          path="/check-out"
          element={<ProtectedRoute element={<Checkout />} />}
        />
        <Route
          path="/user-profile"
          element={<ProtectedRoute element={<UserProfilePage />} />}
        />

        <Route path="/sign-in" element={<Signin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
