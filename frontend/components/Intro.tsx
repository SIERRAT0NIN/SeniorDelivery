import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";

const Intro = () => {
  return (
    <div className="">
      <div className="flex gap-20">
        <Card className="flex w-screen  align-middle">
          <CardHeader>
            <h2>Our Mission</h2>
          </CardHeader>
          <CardBody className=" align-middle">
            <p>
              At <span className="lobster-regular">Senior Delivery</span>, our
              mission is to bridge the gap in food access and security for
              seniors by delivering nutritious, affordable, and accessible food
              solutions. We are committed to empowering our elderly community
              with the resources they need to lead healthier, happier lives.
              Through innovative distribution networks, community partnerships,
              and a deep understanding of senior nutritional needs, we strive to
              eliminate food deserts and ensure that every senior has access to
              the quality food they deserve.
            </p>
          </CardBody>
        </Card>
        <Image
          className="mx-5"
          width={600}
          src="https://plus.unsplash.com/premium_photo-1661631031232-111e22263760?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
    </div>
  );
};

export default Intro;
