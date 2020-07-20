import React from "react";

import styled from "styled-components"

const SVG = styled.svg`
  && {
    width: 25px;

    @media (min-width: 768px) { // Tablets
      width: 29px;
    }

  }
`;


const SvgTask = props => (
  <SVG viewBox="-3 0.2 22 22" {...props}>
    <path
      d="M18.261 10.39c0 2.525-.037 5.051.019 7.573a2.065 2.065 0 01-2.062 2.045 897.075 897.075 0 00-13.428-.009 1.957 1.957 0 01-2.045-2q-.018-7.682 0-15.361A1.9 1.9 0 012.678.749h13.643a1.84 1.84 0 011.94 1.965q.005 3.837 0 7.676z"
      fill="none"
      stroke="#d2d2d2"
      strokeMiterlimit={10}
      strokeWidth={1.489}
    />
    <path
      d="M9.391 8.028H4.883a1.339 1.339 0 01-1.158-.4c-.157-.234.061-.4.374-.533a2.075 2.075 0 01.806-.123q4.59-.008 9.179 0c.85 0 1.264.193 1.272.518.007.27-.257.434-.77.488a11.369 11.369 0 01-1.17.053c-1.34-.006-2.679-.003-4.025-.003zM9.391 5.643H4.883a1.343 1.343 0 01-1.158-.4c-.157-.234.061-.4.374-.534a2.1 2.1 0 01.806-.121q4.59-.008 9.179 0c.85 0 1.264.193 1.272.518.007.269-.257.434-.77.486a11 11 0 01-1.17.053c-1.34-.005-2.679-.002-4.025-.002z"
      fill="#d2d2d2"
    />
  </SVG>
);

export default SvgTask;
