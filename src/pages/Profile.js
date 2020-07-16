import React from 'react'
import styled from 'styled-components';
import Navigation from '../components/organisms/Navigation'
import { Link, Router} from 'react-router-dom';
import axios from 'axios';

import {Bootstrap, Grid, Row, Col, Container, Nav} from 'react-bootstrap';

class Profile extends React.Component {
      constructor(props) {
          super(props);
          this.state = {
              firstName: '',
              lastName: '',
              compostPoints: '',
              totalActivity: ''
          }
      }

    componentDidMount() {
        this.getUserInfo();
    }

    getUserInfo = () => {
        const token = localStorage.getItem("decoded_token");
        const decodedToken = JSON.parse(token);

        const firstName = decodedToken.firstName;
        const lastName = decodedToken.lastName;
        const compostPoints = decodedToken.compostPoints;
        const totalActivity = decodedToken.totalActivity;

        this.setState({
          firstName: firstName, lastName: lastName, compostPoints: compostPoints, totalActivity: totalActivity
        })


        // DEZE HEB JE NODIG VOOR TASKS

        // let decodedToken = JSON.parse(localStorage.getItem("decoded_token"));
        // const token = decodedToken.id;
        //
        // const config = {
        //     headers: { Authorization: `Bearer ${token}` }
        // };
        //
        // axios({
        // method: 'get',
        // url: 'http://localhost:4000/users',
        // config
        // })
        // .then(response => {
        //
        //   console.log(response.data);
        //
        // })
        // .catch( err => {
        //   console.log(err)
        // })


    }

    // Als score hoger is dan zoveel, laat dan een achievement zien of laat alle achievements zien.

    render() {
      return (
          <Container>

          <ul>
          <li>{this.state.firstName}</li>
          <li>{this.state.compostPoints}</li>
          </ul>

          </Container>
      )
    }
}


export default Profile;
