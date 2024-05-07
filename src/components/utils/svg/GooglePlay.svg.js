import React from "react";

const GooglePlay = ( props ) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      enable-background="new 0 0 24 24"
      viewBox="0 0 24 24"
      id="google-play"
      {...props}
    >
      <path
        fill="#ffc107"
        d="m23 12c0 .75-.42 1.41-1.03 1.75l-5.2 2.89-4.4-4.64 4.4-4.64 5.2 2.89c.61.34 1.03 1 1.03 1.75z"
      ></path>
      <path
        fill="#03a9f4"
        d="m12.37 12-10.8 11.39c-.36-.36-.57-.85-.57-1.39v-20c0-.54.21-1.03.57-1.39z"
      ></path>
      <path
        fill="#f44336"
        d="m12.37 12 4.4 4.64-12.8 7.11c-.29.16-.62.25-.97.25-.56 0-1.07-.23-1.43-.61z"
      ></path>
      <path
        fill="#4caf50"
        d="m16.77 7.36-4.4 4.64-10.8-11.39c.36-.38.87-.61 1.43-.61.35 0 .68.09.97.25z"
      ></path>
    </svg>
  );
};

export default GooglePlay;