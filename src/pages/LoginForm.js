import React from 'react'
import styled from 'styled-components'
import SvgEmail from '../components/svg/Email'
import SvgPassword from '../components/svg/Password'
import logo from '../../src/img/logo.png'
import SvgWave from '../components/svg/Wave'
import { Row, Col, Container, Form } from 'react-bootstrap';
import { authenticationApi, apiConfig, usersApi } from '../components/App'


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

const InputCheckBox = styled.input``


/* End Styling */


const intitialState = {
    email: '',
    password: '',
    emailError: '',
    passwordError: ''
}

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = intitialState
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    componentDidMount() {

        console.log('Page loaded!')

    }

    // Sets the state of the input fields
    handleInputChange(event) {

        this.setState({ [event.target.name]: event.target.value })

    }

    // Validates the form
    validate(email, password) {

        let emailError = ''
        let passwordError = ''

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

        // Validates the input fields after
        const isValid = this.validate()
        if (isValid) {
            console.log(this.state)
            this.setState(intitialState)
        }

        // Authenticates the user trying to log in
        const authenticateLogin = await authenticationApi.login({ email: this.state.email, password: this.state.password })

        // Generates an accessToken 
        apiConfig.accessToken = authenticateLogin.data.accessToken

        console.log(apiConfig.accessToken)

        // Add the accessToken to the localStorage
        localStorage.setItem("accessToken", apiConfig.accessToken);

        // Checks if the username and password are both correct (comes from api/auth)
        if (authenticateLogin.status == 201) {
            console.log('Naam en wachtwoord zijn allebei correct!')
        }

        // Finds the registred user 
        const getAuthenticatedUser = await usersApi.getUser()
        console.log(getAuthenticatedUser)

        // Checks if the input value is equal to data from the database (comes from api/users/me)
        if (getAuthenticatedUser.data.email == this.state.email) {
            console.log('De ingevulde e-mail door de gebruiker komt overeen met die uit de database!')
        }

        // Checks if value in the inputtext field matches the database information (does not work at the moment)
        //if (getAuthenticatedUser.data.email !== this.state.email) {
        //     console.log('Deze gebruiker bestaat niet!')
        //}

        // Redirect the user to the overview page
        window.location.href = "/";

    }

    render() {
        return (
            <div>
                <Container fluid={true} className="text-center container-top">
                    <img src={logo} className="logo" />
                    <h5>Plantacle</h5>
                </Container>
                <SvgWave className="wave"></SvgWave>
                <Form onSubmit={this.handleSubmit}>
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
                                <Anchor href="register" className="anchor">Registreer</Anchor>
                            </Col>
                        </Row>
                    </Container>
                </Form>
            </div>
        );
    }
}

export default Login