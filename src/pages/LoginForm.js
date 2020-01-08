import React from 'react'
import styled from 'styled-components'
import SvgEmail from '../components/svg/Email'
import SvgPassword from '../components/svg/Password'
import logo from '../../src/img/logo.png'
import SvgWave from '../components/svg/Wave'
import { Bootstrap, Grid, Row, Col, Container, Form } from 'react-bootstrap';

/* Styling */


const Anchor = styled.a`
  color: #FFC759 !important;
  font-size: 12px;
  font-weight: 700;
  &:hover {
      text-decoration: none;
      color: #FFC759;
  }
`

const P = styled.p`
  font-size: 12px;
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

/* End Styling */

class Login extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
            email: '',
            password: '',
        };

        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value }) // [name='']: value of the field
        console.log(event.target.value)
    }

    handleSubmit = (event) => {
        event.preventDefault()
        window.location.href = 'overview'

        // fetch here
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
                        <Row>
                            <Col className="text-left">
                                <div class="round"><input type="checkbox" id="checkbox" />
                                <label for="checkbox"></label>
                                </div>
                                <P className="remember-password">Wachtwoord onthouden</P>
                            </Col>
                            <Col className="text-right mb-5 forgotpassword">
                                <Anchor href="register" className="anchor">Wachtwoord vergeten?</Anchor>
                            </Col>
                        </Row>
                        <BigButton type="submit" className="mb-4" value="Login"></BigButton>
                        <Row>
                            <Col>
                                <P>Nog geen account?</P>
                            </Col>
                            <Col>
                                <Anchor href="register" className="anchor">Registreer</Anchor>
                            </Col>
                        </Row>
                    </Container>
                </form>
            </div>
        );
    }
}

export default Login