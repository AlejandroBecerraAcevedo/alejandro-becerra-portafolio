import React from "react";
import Cards from "../cards";

const knowledge = () => {
  return (
    <div className="flex items-center flex-col h-full space-y-8 pt-10 w-11/12">
      <h1 className="text-3xl">My Knowledge</h1>
      <p className="text-center w-[400px]">
        Electronics Engineer from ITM | Systems Engineering Student at
        University of Antioquia | Passionate about Innovation and Technology
      </p>
      <Cards />
    </div>
  );
};

export default knowledge;
