import { Button, Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import Intro from "../components/Intro";
import Menu from "../components/Menu";
import CarouselHero from "../components/CarouselHero";

const images = [
  { src: "https://via.placeholder.com/800x400?text=Slide+1", alt: "Slide 1" },
  { src: "https://via.placeholder.com/800x400?text=Slide+2", alt: "Slide 2" },
  { src: "https://via.placeholder.com/800x400?text=Slide+3", alt: "Slide 3" },
];

const Home = () => {
  return (
    <>
      <div className="text-center text-3xl font-bold text-black  flex-1">
        <section className="flex-1 justify-center h-screen ">
          <h1 className="">Welcome to Senior Delivery!</h1>
          <h2>
            Our solution to food deserts affecting our elderly population.
          </h2>
          <div className="flex-1 justify-center">
            <Button color="primary">Get Started!</Button>
            <Image
              className="flex-1 justify-center w-screen"
              src="https://www.eatright.org/-/media/images/eatright-landing-pages/foodgroupslp_804x482.jpg?as=0&w=967&rev=d0d1ce321d944bbe82024fff81c938e7&hash=E6474C8EFC5BE5F0DA9C32D4A797D10D"
            />
          </div>
          <div className="">
            <Intro />
            <Menu />
          </div>
          <div className="flex justify-center">
            <CarouselHero images={images} />
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
