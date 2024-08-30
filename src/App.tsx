import "./style/App.css";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Dashboard from "../pages/Dashboard";
import Explore from "../pages/Explore";
import NotFound from "../pages/NotFound";

import {
  SignedIn,
  SignIn,
  SignedOut,
  SignInButton,
  UserButton,
  SignOutButton,
  useUser,
} from "@clerk/clerk-react";

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
      <header>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </header>

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
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
