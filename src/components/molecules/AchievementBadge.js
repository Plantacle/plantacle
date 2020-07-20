import React from 'react';
import styled from 'styled-components';

const AchievementWrapper = styled.div`
    display: flex;
    width: 300px;
    background-color: yellow;
    text-align: center;
`;

const AchievementBadge = (props) => {

  if (props.achievement == "bronze") {
      return (
          <AchievementWrapper>
              dsadhas
          </AchievementWrapper>
      )
  }

  return null;

}


export default AchievementBadge;
