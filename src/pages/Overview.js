import React from 'react'
import Measurements from '../components/molecules/Measurements';
import CurrentDay from '../components/atoms/CurrentDay';
import CompostTransition from '../components/atoms/CompostTransition';
import OverviewButton from '../components/atoms/OverviewButton';
import styled from 'styled-components';
import Navigation from '../components/organisms/Navigation'
import { Link, Router} from 'react-router-dom';

import SvgProfile from '../components/svg/Profile';

import {Bootstrap, Grid, Row, Col, Container, Nav} from 'react-bootstrap';

const StyledContainer = styled(Container)`
    && {
    padding-top: 20px;

    padding-left: 40px;
    padding-right: 40px;
    }
`;

const FirstRow = styled(Row)`
  && {

  }
`;

const SecondRow = styled(Row)`
    && {
      justify-content: center;
      min-width: 400px;
      position: relative;
    }
`;

const ThirdRow = styled(Row)`
    && {
      justify-content: center;
    }
`;

const FirstCol = styled(Col)`
    && {
        padding: 0;
    }
`;

const SecondCol = styled(Col)`
    && {
      display: flex;
      justify-content: center;

      @media (min-width: 1024px) { // Tablets
        margin-top: 20px;
      }
    }
`;

const ThirdCol = styled(Col)`
    && {

      @media (min-width: 1024px) { // Tablets

      }
    }
`;

const CompostTransitionWrapper = styled.div`
    @media (min-width: 1024px) { // Tablets
        margin-bottom: 50px;
    }
`;

class Overview extends React.Component {
    render() {

      return (
        <div>
          <StyledContainer>
              <FirstRow>
                  <FirstCol xs={3} md={4}>
                      <Measurements temperature={this.props.temperature} humidity={this.props.humidity} methane={this.props.methane}/>
                  </FirstCol>
                  <SecondCol xs={7} md={4}>
                      <CurrentDay day={this.props.day} />
                  </SecondCol>
                  <ThirdCol xs={1} md={4}>

                  </ThirdCol>
              </FirstRow>
            <SecondRow>
                <CompostTransitionWrapper>
                    <CompostTransition currentPhase={this.props.currentPhase} status={this.props.status} warning={this.props.warning}/>
                </CompostTransitionWrapper>
            </SecondRow>
            <ThirdRow>
                <a href="/tasks">
                    <OverviewButton />
                </a>
            </ThirdRow>
        </StyledContainer>
        <Navigation/>
        </div>
      )
    }
}


export default Overview;
