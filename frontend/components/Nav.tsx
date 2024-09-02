import React from "react";
import { Button, ButtonGroup } from "@nextui-org/button";
const Nav = () => {
  return (
    <div>
      <ButtonGroup color="primary">
        <Button>Menu</Button>
        <Button>Explore</Button>
        <Button>About Us</Button>
        <Button>Profile</Button>
      </ButtonGroup>
    </div>
  );
};

export default Nav;
