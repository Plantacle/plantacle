import React from 'react'
import styled from 'styled-components';
import Navigation from '../components/organisms/Navigation';
import AchievementBadge from '../components/molecules/AchievementBadge';
import { Link, Router} from 'react-router-dom';
import axios from 'axios';
import SvgProfilePicture from '../components/svg/ProfilePicture';
import waveImg from '../assets/images/wave.png';
import waveImgTablet from '../assets/images/wave--tablet.png';


import {Bootstrap, Grid, Row, Col, Container, Nav} from 'react-bootstrap';

const ProfileContainer = styled(Container)`
    && {

    }
`;

const ContainerTest = styled(Container)`
&& {
  min-height: 500px;
  width: 100%;
  @media (min-width: 1024px) { // Tablets
    max-width: 1024px;
  }

  @media (min-width: 1200px) { // Tablets
    height: 1000px;
  }
}
`

const ProfileRow = styled(Row)`
    && {

    }
`;

const ProfileRow3 = styled(Row)`
    && {

    }
`;

const Col1 = styled(Col)`
    && {
      display: flex;
      justify-content: center;
      height: 350px;
      background-image: url(${waveImg});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: 50% 100%;
      position: relative;
      margin-bottom: 50px;

      @media (min-width: 768px) { // Tablets
          background-image: url(${waveImgTablet});
          height: 500px;
      }
    }
`;

const Col2 = styled(Col)`
    && {
    }
`;

const Col3 = styled(Col)`
    && {
        display: flex;
        flex-direction: column;
        margin-top: 50px;
    }
`;

const Circle = styled.div`
    margin-bottom: 20px;
`;

const UserWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 170px;
    position: absolute;
    top: 50%; right: 50%;
    transform: translate(50%,-50%);
`;

const UserName = styled.h2`
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-size: 17px;
    letter-spacing: 1px;
    color: #fff;
`;

const UserBio = styled.p`
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-size: 13px;
    letter-spacing: 1px;
    margin-top: -5px;
    color: #fff;
`;

const ActivityStyle = styled.h2`
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-size: 17px;
    color: #4368D1;
    letter-spacing: 2px;
    margin-bottom: 15px;
`;

const ResultStyle = styled.h2`
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-size: 35px;
    color: #FFC759;
    letter-spacing: 2px;
`;

const AchievementTitle = styled.h2`
    font-family: 'Poppins', sans-serif;
    font-size: 17px;
    color: #4368D1;
    letter-spacing: 2px;
    margin-bottom: 30px;
`;

const AchievementTitleWrapper = styled.div`
    position: absolute;
`;

class Profile extends React.Component {
      constructor(props) {
          super(props);
          this.state = {
              firstName: '',
              lastName: '',
              bio: '',
              //points: 0,
              totalActivity: 0,
              compostPoints: 0,
          }

      }

    componentDidMount() {
        this.getUserInfo();
    }

    getUserInfo = () => {
        const token = localStorage.getItem("decoded_token");
        const decodedToken = JSON.parse(token);

        const id = decodedToken.id;

        axios.get(`http://localhost:4000/users/${id}`)
        .then(response => {
            let userData = response.data;
            userData.forEach(data => {
                this.setState({ firstName: data.first_name, lastName: data.last_name, compostPoints: data.compost_points, totalActivity: data.total_activity, bio: data.bio});
            });
        })
        .catch(error => {
          console.log(error);
        });

    }
    // Als score hoger is dan zoveel, laat dan een achievement zien of laat alle achievements zien.

    render() {

      let activity = this.state.totalActivity;
      let achievement;

      let test;

      if(activity >= 336 && activity < 1344) {
          achievement = <AchievementBadge achievement="bronze" />;
              console.log(activity + 'bronze')
      } else if(activity >= 1344 && activity < 2688) {
          achievement = <AchievementBadge achievement="silver" />;
            console.log(activity + 'silver')
      } else if(activity >= 2688) {
          achievement = <AchievementBadge achievement="platinum" />;
      } else {
          achievement = <AchievementBadge achievement="none" />;
      }


      return (
      <div>
          <ProfileContainer fluid>
              <ProfileRow>
                  <Col1>
                      <UserWrapper>
                          <Circle>
                              <SvgProfilePicture />
                          </Circle>
                          <UserName>{this.state.firstName} {this.state.lastName}</UserName>
                          <UserBio>{this.state.bio}</UserBio>
                      </UserWrapper>
                  </Col1>
              </ProfileRow>
              <ContainerTest>
              <ProfileRow>
                  <Col2>
                      <ActivityStyle>
                         COMPOST POINTS
                      </ActivityStyle>
                      <ResultStyle>
                          {this.state.compostPoints}
                      </ResultStyle>
                  </Col2>
                  <Col2>
                      <ActivityStyle>
                          TOTAL ACTIVITY
                      </ActivityStyle>
                      <ResultStyle>
                          {this.state.totalActivity}H
                      </ResultStyle>
                  </Col2>
                  </ProfileRow>
                  <ProfileRow3>
                      <Col3 xs={12}>
                          <AchievementTitle> Achievements </AchievementTitle>
                          {achievement}
                      </Col3>
                  </ProfileRow3>
                  </ContainerTest>
          </ProfileContainer>
          <Navigation/>

      </div>
      )
    }
}


export default Profile;
