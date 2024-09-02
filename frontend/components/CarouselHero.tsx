import { Image } from "@nextui-org/react";
import React from "react";

const CarouselHero = () => {
  return (
    <div className="flex  justify-center space-x-10 justify-between w-screen bg-secondary">
      <Image
        height={400}
        src="https://images.unsplash.com/photo-1704081312020-23e46aea6537?q=80&w=3027&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="flex-shrink-0"
      />
      <Image
        height={400}
        src="https://images.unsplash.com/photo-1704081312020-23e46aea6537?q=80&w=3027&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="flex-shrink-0"
      />
      <Image
        height={400}
        src="https://images.unsplash.com/photo-1704081312020-23e46aea6537?q=80&w=3027&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="flex-shrink-0"
      />
      <Image
        height={400}
        src="https://images.unsplash.com/photo-1704081312020-23e46aea6537?q=80&w=3027&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="flex-shrink-0"
      />
    </div>
  );
};

export default CarouselHero;
