import React from "react";
import { dataPortfolio } from "@/utils/data";
import Alert from "@/components/atoms/alert";

import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const CardsProjects= () => {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {dataPortfolio.map((el) => (
          <CarouselItem key={el.title} className="basis-72">
            <div className="w-60 h-60 bg-white rounded-lg flex flex-col justify-center items-center p-2">
              <div className="h-1/2 w-11/12 flex justify-center items-center">
                <Image
                  src={el.image}
                  alt={el.title}
                  width={150}
                  height={100}
                />
              </div>
              <div className="pb-4">{el.title}</div>
              <div className="text-[10px] text-center pb-4">{el.description}</div>
              <div>
                <Alert description={el.description} url={el.urlDemo} title="More"/>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default CardsProjects;
