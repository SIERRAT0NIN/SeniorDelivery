import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";

const Intro = () => {
  return (
    <div className="m-10 container">
      <div className="p-20 flex gap-20">
        <Card className="flex-1 align-middle">
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
        <Image src="https://media.gettyimages.com/id/139468977/photo/grocer-carrying-a-box-of-strawberries.jpg?s=612x612&w=gi&k=20&c=yYfY6M7F6ya6vK8Yw4rKhri9CIJatLc5mPK7JewCXAE=" />
      </div>
    </div>
  );
};

export default Intro;
