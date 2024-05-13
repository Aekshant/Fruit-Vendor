import React from "react";
import { useSelector, useDispatch } from "react-redux";

import CrossSvg from "../utils/svg/Cross.svg";
import Login from "./Login.component";
import { slider } from "../redux/login/profileSlice.redux";

const Index = () => {
  const dispatch = useDispatch();
  const sliderStatus = useSelector((store) => store.profile.slider);

  const handleLogin = () => {
    dispatch(slider());
  };
  return (
    <div
      className={
        "w-full h-full fixed inset-0 " + (sliderStatus ? "" : "invisible")
      }
    >
      <div
        className={
          "w-full h-full duration-500 ease-out transition-all inset-0 absolute bg-gray-900 " +
          (sliderStatus ? "opacity-50" : "opacity-0")
        }
      />
      <div
        className={
          "w-96 bg-white h-full absolute right-0 duration-300 ease-out transition-all " +
          (sliderStatus ? "" : "translate-x-full")
        }
      >
        <div
          className="flex cursor-pointer text-gray-600 w-7 h-7 items-center justify-center m-5"
          onClick={handleLogin}
        >
          <CrossSvg />
        </div>
        <Login/>
      </div>
    </div>
  );
};

export default Index;
