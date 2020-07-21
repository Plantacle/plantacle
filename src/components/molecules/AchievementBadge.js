import React from 'react';
import styled from 'styled-components';
import SvgBronze from '../svg/Bronze';
import SvgSilver from '../svg/Silver';
import SvgPlatinum from '../svg/Platinum';

const AchievementWrapper = styled.div`
    display: flex;
    width: 300px;
    flex-wrap: wrap;
    flex-direction: column;
    text-align: center;
    height: 100px;
`;

const AchievementTitle = styled.h2`
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    color: #4368D1;
    font-weight: 700;
    letter-spacing: 2px;
    flex: 0 10% 50%;
    width: calc(100% - 100px);
    order: 3
    margin-left: -130px;
    text-align: left;
`;

const AchievementHours = styled.p`
    font-family: 'Poppins', sans-serif;
    font-size: 11px;
    color: #4368D1;
    font-weight: 300;
    letter-spacing: 2px;
    flex: 0 0 50%;
    order: 2
    margin-left: 50px;
    text-align: left;
`;

const EmptyAchievements = styled.p`
    font-family: 'Poppins', sans-serif;
    font-size: 11px;
    color: #4368D1;
    font-weight: 300;
    letter-spacing: 2px;
    text-align: left;
`;

const AchievementLogo = styled.div`
  width: 31px;
  height: 31px;
  border-radius: 50%;
  background-color: #EFF2FA;
  flex: 0 20% 40%;
  order: 1;
  display: flex;
  justify-content: center;
`;



const AchievementBadge = (props) => {

  if (props.achievement == "bronze") {
      return (
          <AchievementWrapper>
              <AchievementLogo>
                  <SvgBronze />
              </AchievementLogo>
              <AchievementTitle>Bronze Gardener</AchievementTitle>
              <AchievementHours>336+ HOURS</AchievementHours>
          </AchievementWrapper>
      )
  } else if (props.achievement == "silver") {
      return (
          <AchievementWrapper>
              <AchievementLogo>
                  <SvgSilver />
              </AchievementLogo>
              <AchievementTitle>Silver Gardener</AchievementTitle>
              <AchievementHours>1344+ HOURS</AchievementHours>
          </AchievementWrapper>
      )
  } else if (props.achievement == "platinum") {
      return (
          <AchievementWrapper>
              <AchievementLogo>
                  <SvgPlatinum />
              </AchievementLogo>
              <AchievementTitle>Platinum gardener</AchievementTitle>
              <AchievementHours>2688+ HOURS</AchievementHours>
          </AchievementWrapper>
      )
  } else if (props.achievement == "none") {
      return (
          <AchievementWrapper>
              <AchievementLogo>
                  <SvgSilver />
              </AchievementLogo>
              <EmptyAchievements />
          </AchievementWrapper>
      )
  }

  return null;

}


export default AchievementBadge;
