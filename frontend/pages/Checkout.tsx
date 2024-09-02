import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Link,
} from "@nextui-org/react";

const Checkout = () => {
  return (
    <div className="bg-secondary w-screen h-screen justify-center flex">
      <Card className="w-fit h-fit justify-center ">
        <CardHeader>
          <h2 className="text-2xl text-center flex-1 font-bold">Checkout</h2>
        </CardHeader>
        <CardBody></CardBody>
        <CardFooter>
          <ButtonGroup className=" ">
            <Link href="/success-checkout">
              <Button className="text-white" color="success">
                Checkout
              </Button>
            </Link>
            <Link href="/">
              <Button color="primary">Cancel</Button>
            </Link>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Checkout;
