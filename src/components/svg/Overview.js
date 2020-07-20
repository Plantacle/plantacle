import React from "react";
import styled from "styled-components"

const SVG = styled.svg`
  && {
    width: 25px;
    background-color: yellow;

    @media (min-width: 768px) { // Tablets
      width: 29px;
    }
  }
`;


const SvgOverview = props => (
  <SVG  viewBox="0 0.2 25 25" {...props}>
    <path
      d="M24.557 4.862h-1.468a3.651 3.651 0 00-3.638-3.4 3.721 3.721 0 00-.464.03A3.649 3.649 0 0014.345.424a3.65 3.65 0 00-3.4 0 3.649 3.649 0 00-4.642 1.068 3.721 3.721 0 00-.464-.03 3.651 3.651 0 00-3.638 3.4H.729A.73.73 0 000 5.596v3.889a.73.73 0 00.729.73h1.538l1.236 10.7a2.189 2.189 0 002.173 1.938H19.61a2.189 2.189 0 002.173-1.938l1.236-10.7h1.538a.73.73 0 00.729-.73V5.596a.73.73 0 00-.729-.734zM5.835 2.918a2.184 2.184 0 01.611.086.73.73 0 00.851-.364 2.187 2.187 0 013.217-.77.726.726 0 00.852 0 2.189 2.189 0 012.552 0 .726.726 0 00.852 0 2.187 2.187 0 013.217.77.73.73 0 00.851.364 2.191 2.191 0 012.786 1.858H3.66a2.191 2.191 0 012.175-1.944zm14.5 17.832a.73.73 0 01-.724.646H5.676a.73.73 0 01-.724-.646L3.737 10.212H21.55zm3.492-12H1.459V6.318h22.367z"
      fill="#d2d2d2"
    />
  </SVG>
);

export default SvgOverview;
