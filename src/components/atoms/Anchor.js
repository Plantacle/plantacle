import React from 'react'
import styled from 'styled-components';

const Anchor = styled.a`
  color: #FFC759;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: 500;
  &:hover {
      text-decoration: none;
      color: #FFC759;
  }
`;

const AnchorLink = () => {
         return <Anchor href="">Log hier in</Anchor>
}

export default AnchorLink;
