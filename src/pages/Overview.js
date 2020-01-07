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
    }
`;


class Overview extends React.Component {
  render() {
    return (
      <StyledContainer>

          <Row>

              <Measurements />
              <CurrentDay />

          </Row>

          <Row>
              <CompostTransition />
          </Row>


          <Row>
            <OverviewButton />
          </Row>


      </StyledContainer>
    )
  }
}


export default Overview;
