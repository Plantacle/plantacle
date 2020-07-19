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
              //points: 0,
              totalActivity: 0
          }

      }

    componentDidMount() {
        this.getUserInfo();
    }

    getUserInfo = () => {
        const token = localStorage.getItem("decoded_token");
        const decodedToken = JSON.parse(token);

        const id = decodedToken.id;

        axios.get(`http://localhost:4000/users/${id}`)
        .then(response => {
            let userData = response.data.results;
            userData.forEach(data => {
                this.setState({ firstName: data.first_name, lastName: data.last_name, compostPoints: data.compost_points, totalActivity: data.total_activity});
            });
        })
        .catch(error => {
          console.log(error);
        });
        //
        // const firstName = decodedToken.firstName;
        // const lastName = decodedToken.lastName;
        // const compostPoints = decodedToken.compostPoints;
        // const totalActivity = decodedToken.totalActivity;
        // this.setState({
        //   firstName: firstName, lastName: lastName, compostPoints: compostPoints, totalActivity: totalActivity
        // })



    }
    // Als score hoger is dan zoveel, laat dan een achievement zien of laat alle achievements zien.

    render() {
      return (
          <Container>

          <p>{this.state.firstName}</p>
          <p>{this.state.compostPoints}</p>

          </Container>
      )
    }
}


export default Profile;
