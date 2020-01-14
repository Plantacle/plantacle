import React from "react";
import styled from "styled-components"

const SVG = styled.svg`
  && {
    width: 10px;
    height: 20px
    margin-top: 5px;
    margin-left: 10px;

    @media (min-width: 991.98px) { // Tablets
    }

  }
`;


const SvgBackArrow = props => (
  <SVG {...props}>
    <path
      data-name="Path 157"
      d="M9.478 1.858A1.088 1.088 0 007.939.319l-7.62 7.62a1.089 1.089 0 000 1.539l7.62 7.62a1.088 1.088 0 001.539-1.539l-6.85-6.85z"
      fill="#4368d1"
    />
  </SVG>
);

export default SvgBackArrow;
