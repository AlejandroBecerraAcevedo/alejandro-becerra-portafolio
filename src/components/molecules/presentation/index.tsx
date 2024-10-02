import React from "react";
import Image from "next/image";
import Alert from "@/components/atoms/alert";

const Presentation = () => {
  return (
    <div className="flex flex-row bg-white px-14 pt-5 pb-10 w-11/12 rounded-lg">
      <div className="flex flex-col space-y-8 w-3/5">
        <div className="w-full">
          <h1 className="font-bold text-3xl pt-8">
            I'm <span className="text-orange-400">ALEJANDRO BECERRA</span> Full
            Stack Developer
          </h1>
        </div>
        <div className="flex justify-center w-[400px] text-justify">
          Personally, I believe the importance of knowledge lies in sharing it.
          This is my ideal in any work environment. My greatest passion is
          acquiring knowledge, and I am a strong advocate for sharing what I
          have learned while enriching myself with the knowledge of those around
          me.
        </div>
        <div>
          <Alert
            description="This portfolio showcases a series of innovative projects aimed at demonstrating expertise in artificial intelligence, decentralized applications, and backend development. The AI Project Saber Tests Kaggle leverages machine learning to predict academic test outcomes, focusing on model accuracy using precision and recall metrics. The Decentralized Application Development ICP with Motoko project highlights the use of blockchain technology for secure storage and smart contract functionality, offering a decentralized app on the Internet Computer platform. Similarly, the ICP with Azle project explores decentralized applications using TypeScript, providing trustless interactions in a blockchain environment. Additionally, the Backend Development with Spring Boot project showcases robust backend infrastructure, featuring scalable REST APIs and database integration. These projects demonstrate a diverse range of skills, from AI and data analysis to decentralized web technologies and backend solutions, with the goal of providing cutting-edge solutions in modern software development."
            title="About me"
          />
        </div>
      </div>
      <div className="w-2/5">
        <Image src="/photos/recort.png" alt="hero" width={310} height={310} />
      </div>
    </div>
  );
};

export default Presentation;
