import styled from 'styled-components';
import React from 'react';
import InputField from '../atoms/InputField'
import Checkbox from '../atoms/Checkbox'
import Button from '../../components/atoms/Button'
import SvgEmail from '../../components/svg/Email'
import SvgPassword from '../../components/svg/Password'
import SvgLogo from '../../components/svg/Logo'

const Anchor = styled.a`
  color: #FFC759;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: 500;
  &:hover {
      text-decoration: none;
      color: #FFC759;
  }
`
const P = styled.p`
  font-weight: 500;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: 500;
`

class LoginForm extends React.Component {

    constructor() {
        super()
    }

    render() {
        return (

            <div>
                <form method='POST' action='#'>
                    <SvgLogo/>
                    <InputField type="email" placeholder="E-mail" id="email" name="email"/>
                    <InputField type="password" placeholder="Wachtwoord" id="password" name="password"/>
                    <Checkbox/>
                    <SvgEmail></SvgEmail>
                    <SvgPassword></SvgPassword>
                    <P>Wachtwoord onthouden</P>
                    <P>Nog geen account?</P>
                    <Anchor href="#" value="test">Wachtwoord vergeten?</Anchor>
                    <Button value="Login"></Button>
                    <Anchor href="#" value="test">Registreer</Anchor>
                </form>
            </div>

        );
    }
}

export default LoginForm