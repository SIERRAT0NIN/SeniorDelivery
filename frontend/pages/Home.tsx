import { Button, Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import Intro from "../components/Intro";
import Menu from "../components/Menu";
import CarouselHero from "../components/CarouselHero";

const images = [
  {
    src: "https://images.squarespace-cdn.com/content/v1/58bf61ea3a041163d873b4e8/1587422396891-RMWS0B51RBVJ53YO2HCM/combisteam-queen-bakedsalmonwithvegetables.jpeg",
    alt: "Slide 1",
  },
  {
    src: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Slide 2",
  },
  {
    src: "https://images.unsplash.com/photo-1516100882582-96c3a05fe590?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Slide 3",
  },
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
