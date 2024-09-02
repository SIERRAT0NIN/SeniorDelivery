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
      ></NavbarContent>
      <NavbarItem isActive>
        <Link color="foreground" href="/">
          Menu
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link color="foreground" href="about">
          About
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link color="foreground" href="explore">
          Explore
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link color="foreground" href="/user-profile">
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
