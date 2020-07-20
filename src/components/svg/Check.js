import React from "react";
import styled from 'styled-components';

const SVG = styled.svg`
  && {
    width: 10px;
    height: auto;
    margin-bottom: 12px;
    margin-left: 2px;

    @media (min-width: 1024px) { // Tablets
      width: 16px;
      margin-left: 3px;
      margin-bottom: 5px;
    }

  }
`;

const SvgCheck = props => (
  <SVG viewBox="-100 -20 500 500" {...props}>
    <path
      d="M186.7 416.8c-7.2 0-14.4-2.7-19.8-8.2L45.2 287c-11-11-11-28.7 0-39.7 11-11 28.7-11 39.7 0L186.7 349l223.4-223.4c11-11 28.7-11 39.7 0s11 28.7 0 39.7L206.6 408.6c-5.6 5.5-12.7 8.2-19.9 8.2z"
      fill="#fff"
    />
  </SVG>
);

export default SvgCheck;
