import React from 'react'
import styled from 'styled-components'
import SvgEmail from '../components/svg/Email'
import SvgPassword from '../components/svg/Password'
import logo from '../../src/img/logo.png'
import { Bootstrap, Grid, Row, Col, Container, Form } from 'react-bootstrap';

/* Styling */

const StyledContainer = styled(Container)`
    background: linear-gradient(5deg, #efefef 65%, #fff 35%);
    height: 90vh;
    width: 400px;
    border: 1px solid #d9d9d9;
`;

const Anchor = styled.a`
  color: #FFC759 !important;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: 500;
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
  color: grey;
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

const FormGroupContainer = styled.div`
  margin-top: 300px;

`

/* End Styling */

class Register extends React.Component {
    constructor(props) {

        super(props);
        this.state = {
            email: '',
            password: '',
            verify_password: ''
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
    }

    render() {
        return (
            <StyledContainer>
                <img src={logo} id="logo" className="ml-5"/>
                <form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <SvgEmail />
                        <Input
                            type='text'
                            name='email'
                            placeholder="Email"
                            value={this.state.email}
                            onChange={this.handleInputChange}
                        ></Input>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <SvgPassword />
                        <Input
                            type='password'
                            name='password'
                            placeholder="Wachtwoord"
                            value={this.state.password}
                            onChange={this.handleInputChange}
                        ></Input>
                    </Form.Group>
                    <SvgPassword />
                    <Form.Group controlId="formBasicPassword">
                        <Input
                            type='password'
                            name='verify_password'
                            placeholder="Bevestig wachtwoord"
                            value={this.state.verify_password}
                            onChange={this.handleInputChange}
                        ></Input>
                    </Form.Group>
                    <BigButton type="submit"></BigButton>
                    <Row>
                    <Col>
                    <P>Al een account?</P>
                    </Col>
                    <Col>
                    <Anchor href="login">Log dan hier in</Anchor>
                    </Col>
                    </Row>
                </form>
            </StyledContainer>
        );
    }
}

export default Register