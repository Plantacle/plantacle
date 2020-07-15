import React from 'react'
import styled from 'styled-components'
import SvgEmail from '../components/svg/Email'
import SvgPassword from '../components/svg/Password'
import logo from '../../src/img/logo.png'
import SvgWave from '../components/svg/Wave'
import { Row, Col, Container, Form } from 'react-bootstrap';
//import { usersApi } from '../components/App'
import {Link} from 'react-router-dom'

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

/* End Styling */

const initializeState = {
    email: '',
    password: '',
    verifyPassword: '',
    emailError: '',
    passwordError: '',
    verifyPasswordError: ''
}

class Register extends React.Component {

    constructor(props) {

        super(props);
        this.state = initializeState
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value }) // [name='']: value of the field
        console.log(event.target.value)
    }

    validate(password, email, verifyPassword) {

        let emailError = ''
        let passwordError = ''
        let verifyPasswordError = ''

        if (this.state.email === '') {
            emailError = 'Geef een e-mailadres op'
        } else if (!this.state.email.includes('@')) {
            emailError = 'Het moet een geldig e-mailadres zijn'
        } else if (!this.state.email.includes('.')){
            emailError = 'Het moet een geldig e-mailadres zijn'
        }

        if (this.state.password === '') {
            passwordError = 'Geef een wachtwoord op'
        }

        if (this.state.password.length < 8){
            passwordError = 'Het wachtwoord moet minstens 8 tekens bevatten'
        }

        if (this.state.verifyPassword === '') {
            verifyPasswordError = 'Geef het wachtwoord opnieuw op'
        }

        if (this.state.verifyPassword.length < 8){
            passwordError = 'Het wachtwoord moet minstens 8 tekens bevatten'
        }

        if(this.state.password !== this.state.verifyPasswordError){
            passwordError = 'De wachtwoorden komen niet met elkaar overeen!'
            verifyPasswordError = 'De wachtwoorden komen niet met elkaar overeen!'
        }

        if (emailError || passwordError || verifyPasswordError) {
            this.setState({ emailError, passwordError, verifyPasswordError })
            return false
        }

        return true

    }


    async handleSubmit(event) {

        // // Prevent the default submit action
        // event.preventDefault()
        //
        // // Validates the form
        // const isValid = this.validate()
        // if (isValid) {
        //
        //     console.log(this.state)
        //     this.setState(initializeState)
        //
        // }
        //
        // try {
        //
        // // Creates a new user with an username and password
        // const registerNewUser = await usersApi.addUser({email: this.state.email, password: this.state.password,})
        //
        // } catch (error) {
        //     if (error.response.status === 400) {
        //
        //         console.log('Er zijn nog velden vergeten')
        //
        //     } else {
        //         throw error
        //     }
        //     return
        // }
        //
        //
        // // Redirects the user to the login page after being succesfully registered
        // this.props.history.push('overview')

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
                        <Row className="mb-4">
                            <Col>
                                <SvgPassword className="icons icon-3" />
                                <Form.Group controlId="formBasicPassword">
                                    <Input
                                        type='password'
                                        name='verifyPassword'
                                        placeholder="Bevestig wachtwoord"
                                        value={this.state.verifyPassword}
                                        onChange={this.handleInputChange}
                                        className="mb-3"
                                    ></Input>
                                    <P className="error-messages">{this.state.verifyPasswordError}</P>
                                </Form.Group>
                            </Col>
                        </Row>
                        <BigButton type="submit" className="mb-4" value="Registreer"></BigButton>
                        <Row>
                            <Col>
                                <P>Al een account?</P>
                            </Col>
                            <Col>
                                <Link to="/login" className="extra-link anchor">Log hier in</Link>
                            </Col>
                        </Row>
                    </Container>
                </Form>
            </div>
        );
    }
}

export default Register
