import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import NavBar from "./NavBar.component";
import FilerHeaderNav from "./FilterHeaderNav.component";

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
        (filterActive ? " shadow-xl px-40 " : " px-44 ") +
        (sliderStatus ? "" : "z-50")
      }
      id="homeHeader"
    >
      {filterActive ? <div><FilerHeaderNav /></div> : <NavBar />}
    </div>
  );
};

export default Header;
