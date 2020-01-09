import React from 'react'
import styled from 'styled-components'
import SvgEmail from '../svg/Email'
import SvgPassword from '../svg/Password'
import logo from '../../img/logo.png'
import SvgWave from '../svg/Wave'
import { Bootstrap, Grid, Row, Col, Container, Form, Navbar, Nav } from 'react-bootstrap';

/* Styling */

const Anchor = styled.a`
  color: #FFC759 !important;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: 700;
  &:hover {
      text-decoration: none;
      color: #FFC759;
  }
`

const P = styled.p`
  font-size: 12px;
  letter-spacing: 1px;
  float: right;
  margin-top: 5px;
  color: #545454
  font-weight: 700;
`

const Input = styled.input`

  width: 100%;
  height: 48px;
  border-radius: 5px;
  padding-left: 50px;
  border: none;
  letter-spacing: 2px;
  font-weight: 100;
  ::placeholder{
      color: lightgrey;
      font-weight: 400;
  }
`

const BigButton = styled.input`
  background: #FFC759;
  width: 100%;
  height: 48px;
  color: #FFFFFF;
  border: none;
  border-radius: 6px;
  font-weight: 500;
`

const Circle = styled.div`
    height: 80px;
    margin: 0 auto;
    width: 80px;
    border-radius: 50%;
    border-color: #266db9;
    border-style: solid;
    background: #266db9;
    border-width: 2px;
    position: absolute;
    left: 50%;
    z-index: 999999;
    left: calc(50% - 45px);
    cursor: pointer;
`;

/* End Styling */

class Navigation extends React.Component {

    constructor(props) {

        super(props);
        this.state = {

        };

    }

    render() {
        return (
            <div>
                <Container fluid={true} className="text-center container-top">
                    <img src={logo} className="logo" />
                    <h5>Plantacle</h5>
                </Container>
                <SvgWave className="wave"></SvgWave>
                <form onSubmit={this.handleSubmit}>
                    <Container fluid={true} className="container-bottom">
                        <Row>
                            <Col>
                                <Form.Group controlId="formBasicEmail">
                                    <SvgEmail className="icons icon-1" />
                                    <Input
                                        type='text'
                                        name='email'
                                        placeholder="Email"
                                        value={this.state.email}
                                        onChange={this.handleInputChange}
                                        className="mb-3 mt-3"
                                    ></Input>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group controlId="formBasicPassword">
                                    <SvgPassword className="icons icon-2" />
                                    <Input
                                        type='password'
                                        name='password'
                                        placeholder="Wachtwoord"
                                        value={this.state.password}
                                        onChange={this.handleInputChange}
                                        className="mb-3"
                                    ></Input>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="mb-4">
                            <Col>
                                <SvgPassword className="icons icon-3" />
                                <Form.Group controlId="formBasicPassword">
                                    <Input
                                        type='password'
                                        name='verify_password'
                                        placeholder="Bevestig wachtwoord"
                                        value={this.state.verify_password}
                                        onChange={this.handleInputChange}
                                        className="mb-3"
                                    ></Input>
                                </Form.Group>
                            </Col>
                        </Row>
                        <BigButton type="submit" className="mb-4" value="Registreer"></BigButton>
                        <Row>
                            <Col>
                                <P>Al een account?</P>
                            </Col>
                            <Col>
                                <Anchor href="login">Log hier in</Anchor>
                            </Col>
                        </Row>
                        <a href="overview"><Circle><i class="fas fa-home home-glyph fa-2x"></i></Circle></a>
                    </Container>
                    <Nav>
                        <Row className="nav-row">
                            <Col className="nav-col">
                                <Nav.Item>
                                    <i class="fas fa-map-marker-alt glyph"></i>
                                    <Nav.Link href="" className="nav-link">Locaties</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <i class="fas fa-tasks glyph task-icon"></i>
                                    <Nav.Link href="" className="nav-link">Taken</Nav.Link>
                                </Nav.Item>
                            </Col>

                            <Col className="nav-col">
                                <Nav.Item>
                                    <i class="fas fa-sign-out-alt glyph"></i>
                                    <Nav.Link href="" className="nav-link">Uitloggen</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <i class="fas fa-chart-line glyph"></i>
                                    <Nav.Link href="1" className="nav-link">Overzicht</Nav.Link>
                                </Nav.Item>
                            </Col>
                        </Row>
                    </Nav>
                </form>
            </div>
        );
    }
}

export default Navigation