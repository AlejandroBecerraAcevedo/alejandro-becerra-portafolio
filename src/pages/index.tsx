import React from "react";
import LeftMenu from "@/components/organisms/leftMenu";
import Hero from "@/components/organisms/hero";


const Index = () => {
  return (
    <div className="relative flex flex-row">
      <div className="h-full w-3/12 sticky top-0">
        <LeftMenu />
      </div>
      <div className="flex justify-center w-4/6 bg-slate-200">
        <Hero />
      </div>
      <div className="flex justify-center h-screen w-1/12 bg-slate-200">
       
      </div>
    </div>
  );
};

export default Index;
