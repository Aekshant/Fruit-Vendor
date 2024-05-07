import React from "react";

import AppLink from "./AppLink.component";
import TitleList from "./TitleList.component";
const Footer = () => {
  return (
    <div>
      <AppLink />
      <div className="bg-black pt-16 text-white flex justify-around px-32 pb-28">
        <div>
          <div className="flex items-center">
            <img className="w-10 p-1 rounded-xl" src="/logo.png" alt="image1" />
            <span className="font-bold text-xl ml-1">Fruit Vendor</span>
          </div>
          <div>
            &#169; 2024 Aekshant <br /> Technologies Pvt. Ltd
          </div>
        </div>
        <TitleList title="Company" subTitle={[ "About", "Careers", "Team","Vendor One", "Vendor Instamart", "Vendor Genie" ]}/>
        <div>
          <TitleList title="Contact Us" subTitle={[ "Help & Support", "Partner with us", "Ride with us" ]}/>
          <TitleList title="Legal" subTitle={[ "Terms & Conditions", "Cookie Policy", "Privacy Policy" ]}/>
        </div>
        <TitleList title="We deliver to:" subTitle={[ "Bangalore", "Gurgaon", "Hyderabad", "Delhi", "Mumbai", "Pune" ]}/>
      </div>
    </div>
  );
};

export default Footer;
