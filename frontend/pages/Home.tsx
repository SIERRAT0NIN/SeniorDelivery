import React from "react";
import DisplayCard from "../components/DisplayCard";
const Home = () => {
  return (
    <div className="text-center text-3xl font-bold text-black bg-secondary w-screen h-screen flex-1">
      <h1>Welcome to my website</h1>
      <section className="flex justify-center">
        <DisplayCard />
      </section>
    </div>
  );
};

export default Home;
