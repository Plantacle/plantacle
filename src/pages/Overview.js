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
    position: relative;
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
    position: absolute;
    top: 30%;  /* position the top  edge of the element at the middle of the parent */
    left: 82%; /* position the left edge of the element at the middle of the parent */
    transform: translate(-50%, -50%); /* This is a shorthand of
                                       translateX(-50%) and translateY(-50%) */
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
                <Col>
                    <Measurements />
                </Col>

                <SecondCol>
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
