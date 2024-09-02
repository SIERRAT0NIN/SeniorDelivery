import React from "react";
import { UserProfile } from "@clerk/clerk-react";

const UserProfilePage = () => {
  return (
    <div className="flex justify-center w-screen h-screen pt-10">
      <UserProfile path="/user-profile" />
    </div>
  );
};

export default UserProfilePage;
