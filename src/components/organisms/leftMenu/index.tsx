import React from "react";
import Photo from "@/components/molecules/photo";
import Information from "@/components/molecules/information";
import Skills from "@/components/molecules/skills";


const leftMenu = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Photo />
      <Information />
      <Skills />
    </div>    
  );
};

export default leftMenu;
