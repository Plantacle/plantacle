import React from 'react'
import styled from 'styled-components'
import {Row, Col, Container, Nav } from 'react-bootstrap';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import SvgLocation from '../svg/Location';
import SvgTask from '../svg/Task';
import SvgOverview from '../svg/Overview';
import SvgLogout from '../svg/Logout';
import SvgProfileDesktop from '../svg/ProfileDesktop';


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

        @media (min-width: 1024px) {
          margin-bottom: 40px;
        }
    }
`;

const NavLink = styled(Link)`
    && {
        font-size: 13px;
        color: #4e4e4e;
        font-weight: 500;
        font-family: 'Poppins', sans-serif;
        font-weight: 300;
        font-size: 10px;
        margin-top: 8px;
        letter-spacing: 1px;

        @media (min-width: 768px) { // Tablets
            font-size: 12px;
        }
    }
`
const NavWrapper = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #fff;

      overflow-y: auto;

    -webkit-box-shadow: -1px -3px 5px 0px rgba(235,235,235,1);
    -moz-box-shadow: -1px -3px 5px 0px rgba(235,235,235,1);
    box-shadow: -1px -3px 5px 0px rgba(235,235,235,1);

    padding-top: 15px;



    @media (min-width: 1024px) {

      bottom: auto;
      width: 100px;
      height: 100%;
      z-index: 99;
      top: 0;
      right: 0;
      overflow-x: hidden;

      -webkit-box-shadow: -1px 3px 5px 0px rgba(212,212,212,1);
-moz-box-shadow: -1px 3px 5px 0px rgba(212,212,212,1);
box-shadow: -1px 3px 5px 0px rgba(212,212,212,1);

    }
`

const NavRow = styled(Row)`
  margin-bottom: 20px;

  @media (min-width: 1024px) {
      flex-direction: column;
      margin-top: 20px;
  }
`


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
            <NavWrapper>
                <NavRow>
                    <Col className="nav_col">
                        <NavItem>
                            <NavLink to="/overview" className="nav_icon"><SvgLocation /></NavLink>
                            <NavLink to="/overview" className="nav_link">Locaties</NavLink>
                        </NavItem>
                    </Col>

                    <Col className="nav_col">
                        <NavItem>
                            <NavLink to="/tasks"  className="nav_icon"><SvgTask /></NavLink>
                            <NavLink to="/tasks" className="nav_link">Taken</NavLink>
                        </NavItem>
                    </Col>

                    <Col className="nav_col">
                        <NavItem>
                        <NavLink to="/overview"  className="nav_icon"><SvgOverview /></NavLink>
                          <NavLink to="/overview" className="nav_link">Overzicht</NavLink>
                        </NavItem>
                  </Col>
                  <Col className="nav_col d-md-block d-sm-none">
                        <NavItem>
                            <NavLink to="/profile"><SvgProfileDesktop fill="#D2D2D2"></SvgProfileDesktop></NavLink>
                            <NavLink to="/profile">Profiel</NavLink>
                        </NavItem>
                  </Col>
                  <Col className="nav_col">
                        <NavItem>
                            <NavLink to="/login"  className="nav_icon"><SvgLogout /></NavLink>
                            <NavLink to="/login" onClick={this.removeAccessToken} className="nav_link">Uitloggen</NavLink>
                        </NavItem>
                  </Col>
                </NavRow>
            </NavWrapper>
        );
    }
}

export default Navigation
