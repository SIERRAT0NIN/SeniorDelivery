import {
  Button,
  Card,
  CardFooter,
  CardHeader,
  Image,
  Link,
} from "@nextui-org/react";
import React from "react";

const ReusableCard = ({ headerText, imageSrc, footerContent, title }) => {
  return (
    <Card className="mt-10 p-md justify-evenly w-full gap-x-5 hover:bg-accent hover:text-white hover:shadow-2xl hover:shadow-accent hover:cursor-pointer m-5 transform hover:scale-105 transition duration-300 ease-in-out ">
      <CardHeader className="justify-center">
        <div>
          <h1 className="text-2xl font-bold text-center">{headerText}</h1>
          <h2>{title}</h2>
        </div>
      </CardHeader>
      <Image
        height={250}
        width="100%"
        src={imageSrc}
        className="object-cover rounded-lg mb-4"
      />
      <CardFooter className="justify-center flex">
        <div>
          {footerContent}
          <Link href="/check-out" className="">
            <Button color="primary" variant="shadow" className="">
              Check Out
            </Button>
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

const CarouselHero = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      headerText: "Pescatarian",
      title: "A Seafood oriented meal plan",
    },
    {
      src: "https://images.unsplash.com/photo-1704081312020-23e46aea6537?q=80&w=3027&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      headerText: "Red Meat Diet",
      title:
        "A meal plan oriented around red meats, such as beef, pork and lamb",
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1664648119278-15e9133714c4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      headerText: "Vegan",
      title: "Gourmet vegan dinners, free from any animal produces",
    },
  ];

  return (
    <div className="flex w-screen">
      {images.map((image, index) => (
        <ReusableCard
          key={index}
          headerText={image.headerText}
          imageSrc={image.src}
          footerContent={
            <span className="justify-center flex">Meal Plan {index + 1}</span>
          }
          title={image.title}
        />
      ))}
    </div>
  );
};

export default CarouselHero;
