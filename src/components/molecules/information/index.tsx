import React from "react";
import { info } from "@/utils/data";

const Information = () => {
  return (
    <div className="w-3/4">
      <div className="flex justify-around h-24 flex-col ">
        <div className="flex justify-center">ALEJANDRO BECERRA</div>
        <div className="flex justify-center">Full-Stack Developer</div>
      </div>

      <div className="pt-10">
        {info.map((el) => (
          <li key={el.title} className="flex flex-col h-10">
            <div className="flex justify-between">
              <div className="text-sm font-semibold">{el.title}:</div>

              <div
                className={`text-sm font-semibold 
                ${el.value === "Available" ? "text-green-500" : "text-black"}`}
              >
                {el.value}
              </div>
            </div>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Information;
