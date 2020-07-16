import React from 'react'
import styled from 'styled-components'
import SvgEmail from '../components/svg/Email'
import SvgPassword from '../components/svg/Password'
import logo from '../../src/img/logo.png'
import SvgWave from '../components/svg/Wave'
import { Row, Col, Container, Form } from 'react-bootstrap';
//import { authenticationApi, apiConfig, usersApi } from '../components/App'
import {Link} from 'react-router-dom';
import axios from 'axios';
import decode from "jwt-decode";


/* Styling */


const Anchor = styled.a`
  color: #FFC759 !important;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1px;
  &:hover {
      text-decoration: none;
      color: #FFC759;
  }
`

const P = styled.p`
  font-size: 12px;
  float: right;
  margin-top: 5px;
  color: #676767
  font-weight: 700;
  letter-spacing: 1px;
`

const Input = styled.input`

  width: 100%;
  height: 48px;
  border-radius: 5px;
  padding-left: 50px;
  border: none;
  letter-spacing: 2px;
  font-weight: 400;
  ::placeholder{
      color: #b6bab3;
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

const InputCheckBox = styled.input``


/* End Styling */


let emailError = ''
let passwordError = ''


class Login extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            emailError: '',
            passwordError: '',
            payload: null,
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    componentDidMount() {


    }

    // Sets the state of the input fields
    handleInputChange(event) {

        this.setState({ [event.target.name]: event.target.value })

    }

    // Validates the form
    validate(email, password) {

        // Checks if the user filled in a valid e-mail address
        if (this.state.email === '') {
            emailError = 'Geef een e-mailadres op'
        }

        // Checks if the password field is empty
        if (this.state.password === '') {
            passwordError = 'Geef een wachtwoord op'
        }

        // If there is an error set the state to that error
        if (emailError || passwordError) {
            this.setState({ emailError, passwordError })
            return false
        }

        return true

    }

    async handleSubmit(event) {

        // Prevent the default submit action
        event.preventDefault()

        const loginInfo = {
            email: this.state.email,
            password: this.state.password
        }

        // axios.post('http://localhost:4000/login', loginInfo, {
        //   headers: {
        //       "Content-Type": "application/json"
        //   },
        // })
        // .then(response => {
        //     alert(response.data.message)
        // })
        // .catch( err => {
        //   console.log(err)
        // })

        axios({
        method: 'post',
        url: 'http://localhost:4000/login',
        data: {
          email: this.state.email,
          password: this.state.password
          }
        })
        .then(response => {
            //alert(response.data.message)
            //console.log(response.data.token)
            //this.setToken(response.data.token)
            //return Promise.resolve(response);
            this.getConfirm(response.data.token);
            console.log(localStorage)

        })
        .catch( err => {
          console.log(err)
        })
    }

    setToken = idToken => {
        localStorage.setItem("id_token", idToken)
    };

    getToken = () => {
        return localStorage.getItem("id_token");
    }

    getConfirm = token => {
      let answer = decode(token);
      localStorage.setItem("decoded_token", JSON.stringify(answer.user))
    }

    render() {
        return (
            <div>
                <Container className="text-center container-top">
                    <img src={logo} className="logo" />
                    {/*<h5>Plantacle</h5>*/}
                </Container>
                <Container className="waveContainer">
                <SvgWave className="wave"></SvgWave>
                </Container>
                <Form onSubmit={this.handleSubmit}>
                    <Container className="container-bottom">
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
                                    <P className="error-messages">{this.state.emailError}</P>
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
                                    <P className="error-messages">{this.state.passwordError}</P>
                                </Form.Group>
                            </Col>
                        </Row>
                        {/*
                        <Row>
                            <Col className="text-left">
                            <InputCheckBox id="input" type="checkbox" />
                                <P className="remember-password">Wachtwoord onthouden</P>
                            </Col>
                            <Col className="text-right mb-5 forgotpassword">
                                <Anchor href="register" className="anchor">Wachtwoord vergeten?</Anchor>
                            </Col>
                        </Row>
                        */}
                        <BigButton type="submit" className="mb-4" value="Login"></BigButton>
                        <Row>
                            <Col>
                                <P>Nog geen account?</P>
                            </Col>
                            <Col>
                                <Link to="/register" className="extra-link anchor">Registreer</Link>
                            </Col>
                        </Row>
                    </Container>
                </Form>
            </div>
        );
    }
}

export default Login
