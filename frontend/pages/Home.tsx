import { Image } from "@nextui-org/react";

const Home = () => {
  return (
    <div className="text-center text-3xl font-bold text-black w-screen h-screen flex-1">
      <section className="flex-1 justify-center ">
        <h1 className="">Welcome to Senior Delivery!</h1>
        <h2>Our solution to food deserts affecting our elderly population.</h2>

        <div className="flex justify-center">
          <Image src="https://www.eatright.org/-/media/images/eatright-landing-pages/foodgroupslp_804x482.jpg?as=0&w=967&rev=d0d1ce321d944bbe82024fff81c938e7&hash=E6474C8EFC5BE5F0DA9C32D4A797D10D" />
        </div>
      </section>
    </div>
  );
};

export default Home;
