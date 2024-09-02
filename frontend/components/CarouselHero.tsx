import { Button, Card, CardFooter, CardHeader, Image } from "@nextui-org/react";
import React from "react";

const ReusableCard = ({ headerText, imageSrc, footerContent }) => {
  return (
    <Card className="mt-10 p-md justify-evenly w-full gap-x-5 hover:bg-accent hover:text-white hover:shadow-2xl ">
      <CardHeader className="justify-center">
        <h1>{headerText}</h1>
      </CardHeader>
      <Image
        height={300}
        width={300}
        src={imageSrc}
        className="flex-shrink-0"
      />
      <CardFooter className="j justify-center">{footerContent}</CardFooter>
    </Card>
  );
};

const CarouselHero = () => {
  const images = [
    "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1704081312020-23e46aea6537?q=80&w=3027&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1664648119278-15e9133714c4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
    <div className="flex w-screen bg-secondary">
      {images.map((image, index) => (
        <ReusableCard
          key={index}
          headerText={`Header ${index + 1}`}
          imageSrc={image}
          footerContent={
            <span className="justify-center flex">
              Meal Plan {index + 1} <br />
            </span>
          }
        />
      ))}
    </div>
  );
};

export default CarouselHero;
