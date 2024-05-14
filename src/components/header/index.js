import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Logo from "./Logo.component";
import Sign from "./Sign.component";
import FilterNavComponent from "../home/body/Heading/Index";
import SearchButton from "../utils/button/SearchButton.component"

const Header = () => {
  const [filterActive, setFilter] = useState(false);
  const sliderStatus = useSelector((store) => store.profile.slider);

  useEffect(() => {
    const handleScroll = () => {
      const homeHeader = document
        .getElementById("homeHeader")
        .getBoundingClientRect();
      const filterBody = document
        .getElementById("filterBody")
        .getBoundingClientRect();

      if (homeHeader.bottom > filterBody.top) setFilter(true);
      else setFilter(false);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={
        "flex justify-between place-items-center h-20 sticky top-0 bg-white " +
        ( filterActive ? " px-40 " : " px-44 " ) +
        (sliderStatus ? "" : "z-50")
      }
      id="homeHeader"
    >
      {filterActive ? (
        <div className="flex justify-between place-items-center w-full">
        <FilterNavComponent/>
        <SearchButton/>
      </div>
      ) : (
        <div className="flex justify-between place-items-center w-full">
          <Logo />
          <Sign />
        </div>
      )}
    </div>
  );
};

export default Header;
