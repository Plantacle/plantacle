import React from "react";

const SvgWave = props => (
  <div
    style={{
      height: 150
    }}
    overflow="hidden"
  >
    <svg
      viewBox="0 0 500 150"
      preserveAspectRatio="none"
      style={{
        height: "100%",
        width: "100%",
        margin: "60px 0px 0px 0px"
      }}
      {...props}
    >
      <path
        d="M0 92.27c216.83 100.65 304.3-83.88 500 16.76V0H0z"
        fill="#f4f4f4"
      />
    </svg>
  </div>
);

export default SvgWave;
