import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Link,
} from "@nextui-org/react";
import StripeCheckOut from "../components/StripeCheckOut";
import StripeEx from "../components/StripeEx";

const Checkout = () => {
  return (
    <div className="bg-secondary w-screen h-screen justify-center flex">
      <Card className="w-fit h-fit justify-center ">
        <CardHeader>
          <h2 className="text-2xl text-center flex-1 font-bold">Checkout</h2>
        </CardHeader>
        <CardBody>
          <StripeEx />
        </CardBody>
        <CardFooter>
          <ButtonGroup className=" ">
            <Link href="/success-checkout"></Link>
            {/* <StripeCheckOut /> */}
          </ButtonGroup>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Checkout;
