import React from "react";

import Logo from "./Logo.component";
import Sign from "./Sign.component";

const NavBar = () => {
  return (
    <div className="flex justify-between place-items-center w-full">
      <Logo />
      <Sign />
    </div>
  );
};

export default NavBar;
