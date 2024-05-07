import React from 'react'

import SubText from "./SubText.component";

const TitleList = ( props ) => {
  const { title, subTitle=[] } = props;
  return (
    <div>
      <h1 className="font-bold text-xl pb-5 pt-1" >{title}</h1>
      {subTitle.map( (title, index) => (
        <SubText key={index}>{title}</SubText>
      ) )}
    </div>
  )
}

export default TitleList