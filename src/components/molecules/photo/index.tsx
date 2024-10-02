import React from "react";
import Image from "next/image";
import { info } from "@/utils/data";

const Photo = () => {
  return (
    <div className="flex justify-center pt-14 pb-10">
      <Image
        className="rounded-full"
        src="/photos/photo.jpg"
        alt="photo"
        width={150}
        height={240}
        priority={true}
      />
    </div>
  );
};

export default Photo;
