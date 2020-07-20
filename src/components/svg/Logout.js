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

const SvgLogout = props => (
  <SVG viewBox="-3 0.2 25 25" {...props}>
    <path
      d="M9.794 17.957H2.448a.817.817 0 01-.816-.816V2.449a.817.817 0 01.816-.817h7.346a.817.817 0 100-1.633H2.448A2.452 2.452 0 000 2.449v14.692a2.451 2.451 0 002.448 2.448h7.346a.817.817 0 100-1.633z"
      fill="#d2d2d2"
    />
    <path
      d="M19.414 9.213l-4.963-4.9a.816.816 0 00-1.146 1.162l3.546 3.5h-9.5a.817.817 0 000 1.633h9.5l-3.546 3.5a.816.816 0 101.146 1.162l4.963-4.9a.817.817 0 000-1.163z"
      fill="#d2d2d2"
    />
  </SVG>
);

export default SvgLogout;
