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
    <div className=" justify-center flex m-10">
      <Card className="h-fit justify-center flex w-full">
        <CardHeader>
          <h2 className="text-2xl text-center flex-1 font-bold">Checkout</h2>
        </CardHeader>
        <CardBody>
          <StripeEx />
        </CardBody>
        <CardFooter>
          <ButtonGroup className="justify-center flex w-full ">
            <Link href="/success-checkout"></Link>
            {/* <StripeCheckOut /> */}
          </ButtonGroup>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Checkout;
