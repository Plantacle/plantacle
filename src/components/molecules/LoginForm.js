import React from 'react';
import EmailField from '../components/atoms/EmailField'
import PasswordField from '../components/atoms/PasswordField'
import AnchorLink from '../components/atoms/Anchor'
import Button from '../components/atoms/Button'
import Paragraph from '../components/atoms/Paragraph'
import Checkbox from '../components/atoms/Checkbox'
import SvgEmail from '../components/svg/Email'
import SvgPassword from '../components/svg/Password'
import SvgPerson from '../components/svg/Person'
import SvgLogo from '../components/svg/Logo'

class LoginFormComponent extends React.Component {
  constructor (props) {

      super(props)

    this.state = {
      email: '',
      password: ''
    }

    this.changeHandler = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  changeHandler = event => {
    this.setState({
      email: event.target.value,
      password: event.target.value
    });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
          <SvgLogo/>
          <SvgPerson/>
          <EmailField type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.changeHandler}>
          <SvgEmail/>
          </EmailField>
          <PasswordField type="password" name="email" placeholder="Wachtwoord" value={this.state.password} onChange={this.changeHandler}>
          <SvgPassword/>
          </PasswordField>
          <Checkbox>Wachtwoord onthouden?</Checkbox><AnchorLink>Wachtwoord vergeten?</AnchorLink>
          <Button type="submit" value="Submit">Login</Button>
          <Paragraph>Nog geen account?</Paragraph><AnchorLink>Registreer</AnchorLink>
      </form>
    );        
  }
}

export default LoginFormComponent;