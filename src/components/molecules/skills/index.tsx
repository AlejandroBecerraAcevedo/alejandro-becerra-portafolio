import React from "react";
import { Progress } from "@/components/ui/progress";
import { languageSkills, programmingSkills, extraSkills } from "@/utils/data";

const Skills = () => {
  return (
    <div className="w-3/4 pt-10">
      <h1 className="font-bold text-lg">Languages</h1>

      {languageSkills.map((el) => (
        <li key={el.title} className="flex flex-col h-10 pt-5">
          <div className="flex flex-col">
            <div className="flex flex-row justify-between">
              <div className="text-sm font-semibold">{el.title}:</div>
              <div>{el.percent}%</div>
            </div>
            <div className="text-sm font-semibold text-black">
              <Progress value={el.percent} />
            </div>
          </div>
        </li>
      ))}

      <h1 className="font-bold text-lg pt-10">Programming Skills</h1>

      {programmingSkills.map((el) => (
        <li key={el.title} className="flex flex-col h-10 pt-5">
          <div className="flex flex-col">
            <div className="flex flex-row justify-between">
              <div className="text-sm font-semibold">{el.title}:</div>
              <div>{el.percent}%</div>
            </div>
            <div className="text-sm font-semibold text-black">
              <Progress value={el.percent} />
            </div>
          </div>
        </li>
      ))}
      <h1 className="font-bold text-lg pt-10">Extra Skills</h1>

      <div className="flex-col ">

      {extraSkills.map((el) => (
        <li key={el.title} className="flex pt-5">
          <div className="flex flex-col pt-5">
            
              <div className="text-sm font-semibold">{el.title}:</div>
              <div className="text-sm">{el.description}</div>
           
          </div>
        </li>
      ))}
      </div>
    </div>
  );
};

export default Skills;
