import React from 'react'
import Measurements from '../components/molecules/Measurements';
import CurrentDay from '../components/atoms/CurrentDay';
import CompostTransition from '../components/atoms/CompostTransition';
import OverviewButton from '../components/atoms/OverviewButton';


import {Bootstrap, Grid, Row, Col, Container} from 'react-bootstrap';


class Overview extends React.Component {
  render() {
    return (
      <Container>
          <Row>

            <Measurements />

          </Row>

          <br />
          <br />
          <br />

          <Row>

            <CurrentDay />

          </Row>

          <br />
          <br />
          <br />

          <Row>
            <CompostTransition />
          </Row>


          <br />

          <Row>
            <OverviewButton />
          </Row>


      </Container>
    )
  }
}


export default Overview;
