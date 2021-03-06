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

const SvgProfile = props => (
  <SVG viewBox="3 0.2 22 22" {...props}>
    <path
      d="M2.461 18.445v1.669c.43.263 3.87 2.03 9.843 2.03s9.413-1.766 9.843-2.028v-1.671c0-2.111-4.682-3.754-5.02-3.879-1.046 1.881-2.6 3.276-4.823 3.276s-3.778-1.394-4.823-3.273c-.332.123-5.02 1.76-5.02 3.876zM5.537 6.372a6.78 6.78 0 0113.535 0 20.185 20.185 0 01-.966 5.928c2.461.942 6.5 2.466 6.5 6.145v2.469c0 1.36-5.309 3.694-12.3 3.694s-12.3-2.339-12.3-3.694v-2.469c0-3.691 4.042-5.2 6.5-6.142a20.209 20.209 0 01-.969-5.931zm6.768 9.008c2.424 0 4.306-4.451 4.306-9.008a4.326 4.326 0 00-8.613 0C8 10.929 9.88 15.38 12.3 15.38z"
      fill={props.fill}
      fillRule="evenodd"
    />
  </SVG>
);

export default SvgProfile;
