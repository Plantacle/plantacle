import React from "react";

import styled from "styled-components"

const SVG = styled.svg`
  && {
    width: 24px;
    height: auto;

    @media (min-width: 768px) { // Tablets
      width: 29px;
      margin-top: 2px;
      margin-left: 1px;
    }

    @media (min-width: 1024px) { // Tablets
      width: 33px;
      margin-top: 3px;
      margin-left: 0;
    }

  }
`;

const SvgMethane = props => (
  <SVG viewBox="-4 -2 20 23" {...props}> //"-4 -2 20 22"
    <path
      d="M8.553 5.398V4.043a.55.55 0 00-.3-.512 1.89 1.89 0 01-.6-2.713A1.9 1.9 0 0110.39.401a1.9 1.9 0 01-.179 3.1.65.65 0 00-.368.668c.043.822.055 1.646.081 2.469.009.3.1.414.4.484a4.237 4.237 0 012.311 1.363 4.172 4.172 0 011.039 3.146 4.2 4.2 0 01-.205 1 .417.417 0 00.208.574c.176.117.361.221.529.348a.506.506 0 00.587.039 1.875 1.875 0 011.857.059 1.937 1.937 0 01.885 1.99 1.949 1.949 0 01-1.585 1.516 1.9 1.9 0 01-2.176-2.033.452.452 0 00-.226-.46c-.2-.123-.39-.256-.588-.378a.4.4 0 00-.572.056 4.243 4.243 0 01-2.374 1.156 4.2 4.2 0 01-2.1-.24c-.533-.2-.538-.178-.881.261a.985.985 0 00-.154 1.2 1.816 1.816 0 01-.668 2.252 1.88 1.88 0 01-2.408-.209 1.792 1.792 0 01-.46-1.971 1.8 1.8 0 011.6-1.266 1.521 1.521 0 01.262-.014.468.468 0 00.453-.244c.161-.251.333-.5.5-.74a.412.412 0 00-.014-.542 4.452 4.452 0 01-.843-1.686.413.413 0 00-.428-.333c-.284-.007-.569-.007-.852-.022a.487.487 0 00-.482.262 1.9 1.9 0 01-2.2.835A1.906 1.906 0 01.01 11.102a1.906 1.906 0 011.531-1.737 1.89 1.89 0 012.014.943.543.543 0 00.549.342c.232-.011.466.02.7.024a.434.434 0 00.489-.369 4.281 4.281 0 012.924-3.1c.353-.12.412-.2.409-.567V5.392z"
      fill="#324bb8"
    />
  </SVG>
);

export default SvgMethane;
