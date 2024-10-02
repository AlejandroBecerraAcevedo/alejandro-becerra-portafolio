import React from "react";
import LeftMenu from "@/components/organisms/leftMenu";
import Hero from "@/components/organisms/hero";

const Index = () => {
  return (
    <div className="flex flex-row">
      <div className="h-full w-3/12 bg-yellow-200 sticky">
        <LeftMenu />
      </div>
      <div className="flex justify-center w-4/6 bg-slate-400">
        <Hero />
      </div>
      <div className="flex justify-center h-screen w-1/12 bg-red-200">tres</div>
      
    </div>
  );
};

export default Index;
