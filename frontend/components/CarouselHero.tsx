import { Button, Image } from "@nextui-org/react";
import React, { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="flex-shrink-0 w-full max-h-96">
            <Image
              src={image.src}
              alt={image.alt}
              width={400}
              height={400}
              className="w-full h-1/2 object-cover"
            />
          </div>
        ))}
      </div>
      {currentIndex > 0 && (
        <div
          className="absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer"
          onClick={prevSlide}
        >
          <AiOutlineLeft
            size={30}
            className="text-gray-800 hover:text-gray-600"
          />
        </div>
      )}
      {currentIndex < images.length - 1 && (
        <div
          className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
          onClick={nextSlide}
        >
          <AiOutlineRight
            size={30}
            className="text-gray-800 hover:text-gray-600"
          />
        </div>
      )}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`block w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-gray-800" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
