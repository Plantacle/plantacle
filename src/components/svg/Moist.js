import React from "react";
import styled from "styled-components"

const SVG = styled.svg`
  && {
    width: 24px;
    height: auto;
    margin-bottom: 4px;
    margin-left: -1px;

    @media (min-width: 768px) { // Tablets
      width: 29px;
      margin-left: -0.5px;
      margin-bottom: -3px;
    }

    @media (min-width: 1024px) { // Tablets
      width: 35px;
      margin-left: -2px;
      margin-bottom: 0;
    }

  }
`;

const SvgMoist = props => (
  <SVG viewBox="-9 -5 22 22" {...props}> //"-9 -5 22 22"
    <path
      d="M9.087 4.5A39.945 39.945 0 006.013.171.463.463 0 005.654 0a.463.463 0 00-.359.171 39.992 39.992 0 00-3.074 4.33C.746 6.935-.001 8.948-.001 10.482a5.661 5.661 0 005.655 5.655 5.661 5.661 0 005.655-5.655c.001-1.536-.749-3.548-2.222-5.982zM6.43 14.054a4.116 4.116 0 01-1.019.127 3.707 3.707 0 01-3.831-3.559 4.549 4.549 0 01.371-1.645.242.242 0 01.277-.139.224.224 0 01.183.238 3.583 3.583 0 00-.022.385 4.3 4.3 0 004 4.16.23.23 0 01.211.2.223.223 0 01-.169.233z"
      fill="#324bb8"
    />
  </SVG>
);

export default SvgMoist;
