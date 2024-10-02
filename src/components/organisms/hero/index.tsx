import React from "react";
import Image from "next/image";
import Presentation from "@/components/molecules/presentation";
import Knowledge from "@/components/molecules/knowledge";
import Education from "@/components/molecules/education";
import Portfolio from "@/components/molecules/portfolio";

const Hero = () => {
  return (
    <div className="flex flex-col items-center">
      <Presentation />
      <Knowledge />
      <div className="h-full">
        <Education />
      </div>
      <div className="h-full">
        <Portfolio />
      </div>

      <div className="pt-10 w-full">
        <footer className="bg-gray-800 text-white py-6 ">
          <div className="container mx-auto text-center">
            <p className="text-sm">
              &copy; 2024 Sitio Web Alejandro Becerra. Todos los derechos
              reservados.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Hero;
