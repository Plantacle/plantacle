import React from 'react'
import styled from 'styled-components'
import {Row, Col, Container, Nav } from 'react-bootstrap';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import SvgLocation from '../svg/Location';
import SvgTask from '../svg/Task';
import SvgOverview from '../svg/Overview';
import SvgLogout from '../svg/Logout';


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

const NavItem = styled(Nav.Item)`
    && {
        display: flex;
        flex-direction: column;
        text-align: center;
    }
`;


/* End Styling */

class Navigation extends React.Component {

    constructor(props) {

        super(props);
        this.state = {};

    }

    // Removes the access token when the user is logging out
    removeAccessToken(){
        localStorage.removeItem('accessToken')
        //window.location.href = "login";
    }

    render() {
        return (
            <div className="nav_wrapper">
                <Row className="nav_row">
                    <Col className="nav_col">
                        <NavItem>
                            <Link to="/overview" className="nav_icon"><SvgLocation /></Link>
                            <Link to="/overview" className="nav_link">Locaties</Link>
                        </NavItem>
                    </Col>

                    <Col className="nav_col">
                        <NavItem>
                            <Link to="/tasks"  className="nav_icon"><SvgTask /></Link>
                            <Link to="/tasks" className="nav_link">Taken</Link>
                        </NavItem>

                    </Col>

                    <Col className="nav_col">
                        <NavItem>
                        <Link to="/overview"  className="nav_icon"><SvgOverview /></Link>
                          <Link to="/overview" className="nav_link">Overzicht</Link>
                        </NavItem>
                  </Col>
                  <Col className="nav_col">
                        <NavItem>
                            <Link to="/login"  className="nav_icon"><SvgLogout /></Link>
                            <Link to="/login" onClick={this.removeAccessToken} className="nav_link">Uitloggen</Link>
                        </NavItem>
                  </Col>
                </Row>
            </div>
        );
    }
}

export default Navigation
