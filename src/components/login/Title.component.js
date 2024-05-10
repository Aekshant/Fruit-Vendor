import React from "react";

const Title = ( props ) => {
  const { title="", subTitle="", changeLoginState } = props
  return (
    <div className="flow-root mb-7">
      <div className="my-2 float-left">
        <h1 className="text-3xl">{title}</h1>
        <div className="flex mt-2 text-sm">
          or{" "}
          <p 
            className="text-[#FDA219] ml-2 font-semibold cursor-pointer"
            onClick={()=>{changeLoginState()}}
            >
            {subTitle}
          </p>
        </div>
        <h1 className="font-extrabold text-xl">____</h1>
      </div>
      <div className="bg-purple-100 rounded-full p-1 flex w-24 h-24 float-right">
        <div className="bg-purple-200 rounded-full px-4 py-2">
          <img alt="tomatoEmoji" src="./tomato.png" />
        </div>
      </div>
    </div>
  );
};

export default Title;
