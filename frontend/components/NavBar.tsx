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
        <p className="font-bold text-inherit">Senior Delivery</p>
      </NavbarBrand>
      <NavbarContent
        className="hidden sm:flex gap-4 text-black"
        justify="center"
      >
        <NavbarItem></NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <ClerkAvi />
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" variant="ghost" className="pt-2">
            <ClerkAvi />
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
