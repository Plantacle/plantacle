import React from "react";
import styled from "styled-components"

const SVG = styled.svg`
  && {
    width: 24px;
    height: auto;

    @media (min-width: 768px) { // Tablets
      width: 29px;
      margin-left: 1px;
      margin-top: 2px;
    }

    @media (min-width: 1024px) { // Tablets
      width: 35px;
      margin-left: 0;
      margin-top: 0;
    }
  }
`;

const SvgTemperature = props => (
  <SVG width={9.453} height={18.905} viewBox="-9 -3 22 22" {...props}>  //"-9 -3 22 22"
    <path
      d="M3.781 11.207a.529.529 0 01-.258.443 3.158 3.158 0 00-1.633 2.529 2.836 2.836 0 105.672 0 3.178 3.178 0 00-1.635-2.528.529.529 0 01-.256-.442V7.562s-1.418-.911-1.891 0 .001 3.645.001 3.645zM0 14.179a4.726 4.726 0 107.562-3.781V2.834a2.836 2.836 0 00-5.672 0V10.4A4.719 4.719 0 000 14.179z"
      fill="#324bb8"
      fillRule="evenodd"
    />
  </SVG>
);

export default SvgTemperature;
