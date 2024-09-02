import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Image,
  Link,
} from "@nextui-org/react";
import Intro from "../components/Intro";
import Menu from "../components/Menu";
import CarouselHero from "../components/CarouselHero";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";

const images = [
  {
    src: "https://images.squarespace-cdn.com/content/v1/58bf61ea3a041163d873b4e8/1587422396891-RMWS0B51RBVJ53YO2HCM/combisteam-queen-bakedsalmonwithvegetables.jpeg",
    alt: "Slide 1",
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/58bf61ea3a041163d873b4e8/1587422396891-RMWS0B51RBVJ53YO2HCM/combisteam-queen-bakedsalmonwithvegetables.jpeg",

    alt: "Slide 2",
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/58bf61ea3a041163d873b4e8/1587422396891-RMWS0B51RBVJ53YO2HCM/combisteam-queen-bakedsalmonwithvegetables.jpeg",

    alt: "Slide 3",
  },
];

const Home = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <div className="text-center text-3xl font-bold text-black  flex-1">
        <section className="flex-1 justify-center h-screen ">
          <h1 className="size-lg">
            Welcome to
            <span className=" lobster-regular size-lg">Senior Delivery</span>!
          </h1>
          <h2>
            Our solution to food deserts affecting our elderly population.
          </h2>
          <div className="flex-1 justify-center">
            <Button color="primary" onPress={onOpen}>
              Get Started!
            </Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col gap-1">
                      Modal Title
                    </ModalHeader>
                    <ModalBody>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam pulvinar risus non risus hendrerit venenatis.
                        Pellentesque sit amet hendrerit risus, sed porttitor
                        quam.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam pulvinar risus non risus hendrerit venenatis.
                        Pellentesque sit amet hendrerit risus, sed porttitor
                        quam.
                      </p>
                      <p>
                        Magna exercitation reprehenderit magna aute tempor
                        cupidatat consequat elit dolor adipisicing. Mollit dolor
                        eiusmod sunt ex incididunt cillum quis. Velit duis sit
                        officia eiusmod Lorem aliqua enim laboris do dolor
                        eiusmod. Et mollit incididunt nisi consectetur esse
                        laborum eiusmod pariatur proident Lorem eiusmod et.
                        Culpa deserunt nostrud ad veniam.
                      </p>
                    </ModalBody>
                    <ModalFooter>
                      <Button color="danger" variant="light" onPress={onClose}>
                        Close
                      </Button>
                      <Button color="primary" onPress={onClose}>
                        Action
                      </Button>
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </Modal>
            <Image
              className="flex-1 justify-center w-screen"
              src="https://plus.unsplash.com/premium_photo-1664304395317-1f9ca7b4ab9a?q=80&w=2922&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
          <div className="">
            <Intro />
            <Menu />
          </div>
          <div className="flex justify-center">
            <CarouselHero images={images} />
          </div>
          <Link href="/check-out">
            <Button color="primary" variant="shadow">
              Check Out
            </Button>
          </Link>
        </section>
      </div>
    </>
  );
};

export default Home;
