import React from "react";
import styled from "styled-components"

const SVG = styled.svg`
  && {
    width: 25px;
    background-color: yellow;
    @media (min-width: 991.98px) { // Tablets

    }
  }
`;


const SvgLocation = props => (
  <SVG  viewBox="-3 0.2 22 22" {...props}>
    <path
      d="M7.957 0a7.958 7.958 0 00-6.769 12.141L7.504 22.32a.663.663 0 00.563.313h.005a.663.663 0 00.564-.322l6.155-10.277A7.959 7.959 0 007.956.001zm5.7 11.353l-5.6 9.344-5.742-9.254a6.635 6.635 0 1111.339-.09z"
      fill="#d2d2d2"
    />
    <path
      d="M7.954 3.979a3.979 3.979 0 103.979 3.978 3.983 3.983 0 00-3.979-3.978zm-.035 6.639a2.661 2.661 0 112.692-2.626 2.663 2.663 0 01-2.69 2.625z"
      fill="#d2d2d2"
    />
  </SVG>
);

export default SvgLocation;
