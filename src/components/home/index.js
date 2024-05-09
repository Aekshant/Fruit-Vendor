import React, { useState } from "react";

import Carousel from "./carousel";
import SubCarousel from "./subCarousel";
import VendorCarousel from "./vendorCarousel";
import Body from "./body";
import Login from "../login"

const Index = () => {

  return (
    <div>
      <Login/>
      <Carousel />
      <SubCarousel />
      <VendorCarousel />
      <Body />
    </div>
  );
};

export default Index;
