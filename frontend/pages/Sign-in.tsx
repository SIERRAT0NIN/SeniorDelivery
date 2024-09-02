import { SignIn } from "@clerk/clerk-react";
import React from "react";

const Signin = () => {
  return (
    <div className="flex justify-center p-10 h-screen">
      <SignIn />
    </div>
  );
};

export default Signin;
