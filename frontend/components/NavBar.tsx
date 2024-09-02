import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import ClerkAvi from "./ClerkAvi";

export default function App() {
  return (
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
        <p className="font-bold lobster-regular  text-xl">Senior Delivery</p>
      </NavbarBrand>
      <NavbarContent
        className="hidden sm:flex gap-4 text-black"
        justify="center"
      >
        <NavbarItem></NavbarItem>
      </NavbarContent>
      <NavbarItem isActive>
        <Link color="foreground" href="#">
          Menu
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link color="foreground" href="#">
          About
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link color="foreground" href="#">
          Explore
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link color="foreground" href="#">
          Profile
        </Link>
      </NavbarItem>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <ClerkAvi />
        </NavbarItem>
        <NavbarItem>
          {/* <Button as={Link} color="primary" variant="shadow" className=""> */}
          <ClerkAvi />
          {/* </Button> */}
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
