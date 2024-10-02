import React from "react";

const Title = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <>
      <h1 className="text-3xl">{title}</h1>
      <p className="text-center w-2/3">{description}</p>
    </>
  );
};

export default Title;
