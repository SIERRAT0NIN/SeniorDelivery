import React from "react";
import {
  SignedIn,
  SignIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
const ClerkAvi = () => {
  return (
    <div className="flex justify-end m-30 p-10 ">
      <header className="">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </header>
    </div>
  );
};

export default ClerkAvi;
