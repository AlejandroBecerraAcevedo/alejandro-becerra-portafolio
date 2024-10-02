import React from "react";
import { knowledge } from "@/utils/data";
import Image from "next/image";

const Cards = () => {
  return (
    <div className="grid grid-cols-3 content-center w-11/12">
      {knowledge.map((el) => (
        <li key={el.title} className="flex flex-col">
          <div className="text-center">
            <div className="flex flex-col justify-center items-center bg-white m-1 p-1 rounded-lg shadow-md ">
              <Image
                src={el.path}
                alt=""
                width={60}
                height={60}
                className="rounded-lg"
              />
              <h3 className="text-xl font-bold pt-4">{el.title}</h3>
              <p className="text-gray-500">{el.words}</p>
            </div>
          </div>
        </li>
      ))}
    </div>
  );
};

export default Cards;
