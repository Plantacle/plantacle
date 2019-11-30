import React from 'react'
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


export const Styleguide2 = () => (
  <div>
    <SvgEmail/>
    <SvgPassword/>
    <SvgPerson/>
    <SvgLogo/>
    <EmailField/>
    <PasswordField/>
    <AnchorLink/>
    <Button/>
    <Paragraph/>
    <Checkbox/>
  </div>
)

export default Styleguide2;
