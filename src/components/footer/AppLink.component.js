import React from "react";

import GooglePlay from "../utils/button/PlayStore.component";
import AppleStore from "../utils/button/AppleStore.component"
const AppLink = () => {
  return (
    <div className="bg-gray-400 flex justify-around p-5">
      <h1 className="font-bold text-2xl text-gray-900">
        For better experience,download <br /> the Fruit Vendor app now
      </h1>
      <div className="flex">
        <GooglePlay/>
        <AppleStore/>
      </div>
    </div>
  );
};

export default AppLink;
