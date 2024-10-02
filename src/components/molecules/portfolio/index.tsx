import React from "react";
import Title from "@/components/atoms/title";
import CardProject from "@/components/molecules/cards_project";
import { dataPortfolio } from "@/utils/data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Portfolio = () => {
  return (
    <div className=" pt-10 flex flex-col items-center space-y-8">
      <Title
        title="Portfolio"
        description="Here are some of the projects I have worked on."
      />

      <div className="w-11/12 rounded-lg -space-y-10 h-full">
        <CardProject />
      </div>
    </div>
  );
};

export default Portfolio;
