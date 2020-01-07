import React from 'react'
import Measurements from '../components/molecules/Measurements';
import CurrentDay from '../components/atoms/CurrentDay';
import CompostTransition from '../components/atoms/CompostTransition';
import OverviewButton from '../components/atoms/OverviewButton';
import styled from 'styled-components';

import {Bootstrap, Grid, Row, Col, Container} from 'react-bootstrap';

const StyledContainer = styled(Container)`
  && {
    padding-left: 25px;
    padding-right: 25px;
    padding-top: 25px;
  }
`;

const FirstRow = styled(Row)`
  && {

  }
`;

const SecondRow = styled(Row)`
  && {
    justify-content: center;
  }
`;

const ThirdRow = styled(Row)`
  && {
    justify-content: center;
  }
`;

const SecondCol = styled(Col)`
  && {
      margin-top: 20px;
  }
`;

const CompostTransitionWrapper = styled.div`
  margin-bottom: 30px;
`;

class Overview extends React.Component {
  render() {
    return (
        <StyledContainer>
            <FirstRow>
                <Col xs={4} md={4}>
                    <Measurements />
                </Col>

                <SecondCol xs={8} md={8}>
                    <CurrentDay />
                </SecondCol>
            </FirstRow>

          <SecondRow>
              <CompostTransitionWrapper>
                  <CompostTransition />
              </CompostTransitionWrapper>
          </SecondRow>

          <ThirdRow>
              <OverviewButton />
          </ThirdRow>
      </StyledContainer>
    )
  }
}


export default Overview;
