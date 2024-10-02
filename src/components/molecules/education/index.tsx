import React from "react";
import Image from "next/image";
import { education } from "@/utils/data";
import Title from "@/components/atoms/title";

const Education = () => {
  return (
    <div className="pt-10 flex flex-col items-center space-y-8">
      <Title
        title="Education"
        description="Studied Electronics Technology and Electronics Engineering at ITM
        (2012-2019), gaining expertise in electronic systems. Currently pursuing
        Systems Engineering at the University of Antioquia (2022-present) and
        completed a Blockchain course at Dfinity HubMexico (2024)."
      />
      <div className="bg-white w-11/12 rounded-lg -space-y-10">
        {education.map((el) => (
          <li key={el.title} className="flex flex-col">
            <div className="flex flex-row text-center justify-around p-10">
              <div className="w-2/5 flex flex-col space-y-3">
                <div className="flex flex-col">
                  <span className="font-bold">{el.institution}</span>
                  <div className="flex flex-row justify-between px-20 pt-5">
                    <div>Student</div>
                    <div className="bg-yellow-300 h-5 w-20 flex justify-center items-center rounded-xl">
                      <div className="text-[10px]">{el.date}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-3/5 flex flex-col space-y-3">
                <div className="font-bold text-left">{el.title}</div>
                <div className="text-justify text-slate-500">{el.description}</div>
              </div>
            </div>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Education;
