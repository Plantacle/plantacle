import React from 'react'
import styled from 'styled-components'
import {Row, Col, Container, Nav } from 'react-bootstrap';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'

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

const Circle = styled.div`
    height: 70px;
    margin-top: -33px !important;
    width: 70px;
    border-radius: 50%;
    border-color:  #4368d1;
    border-style: solid;
    background:  #4368d1;
    border-width: 2px;
    position: absolute;
    z-index: 999999;
    left: calc(50% - 45px);
    cursor: pointer;
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
            <div className="mt-5">
            <Link to="/overview"><Circle><i className="fas fa-home home-glyph fa-2x"></i></Circle></Link>
                    <Nav>
                        <Row className="nav-row">
                                <Nav.Item>
                                    <Link><i className="fas fa-map-marker-alt glyph location-glyph"></i></Link>
                                    <Link className="nav-link">Locaties</Link>
                                </Nav.Item>
                                
                                <Nav.Item>
                                    <Link to="/tasks"><i className="fas fa-tasks glyph task-icon"></i></Link>
                                    <Link to="/tasks" className="nav-link">Taken</Link>
                                </Nav.Item>

                                <Nav.Item>
                                <Link to="/overview"><i className="fas fa-chart-line glyph"></i></Link>
                                    <Link to="/login" onClick={this.removeAccessToken} className="nav-link">Overzicht</Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Link to="/login"><i className="fas fa-sign-out-alt glyph"></i></Link>                               
                                    <Link to="/login" className="nav-link">Uitloggen</Link>
                                </Nav.Item>
                        </Row>
                    </Nav>
            </div>
        );
    }
}

export default Navigation