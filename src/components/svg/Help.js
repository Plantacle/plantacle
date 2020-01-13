import React from "react";
import styled from "styled-components";

const SVG = styled.svg`
  && {
    width: 25px;
    height: 25px
    margin-bottom: -5px;

    @media (min-width: 991.98px) { // Tablets
    }

  }
`;


const SvgHelp = props => (
  <SVG
    id="help_svg__Laag_1"
    x={0}
    y={0}
    viewBox="0 0 512 512"
    xmlSpace="preserve"
    {...props}
  >
    <style>{".help_svg__st0{fill:#4368D1}"}</style>
    <path
      className="help_svg__st0"
      d="M283.5 416.5V220.6c0-20-16.2-36.3-36.3-36.3S211 200.6 211 220.6v195.8c0 20 16.2 36.3 36.3 36.3s36.2-16.2 36.2-36.2zM247.3 59.3c-20 0-36.3 16.2-36.3 36.3 0 20 16.2 36.3 36.3 36.3s36.3-16.2 36.3-36.3c-.1-20.1-16.3-36.3-36.3-36.3z"
    />
  </SVG>
);

export default SvgHelp;
