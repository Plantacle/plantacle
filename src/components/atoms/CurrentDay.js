import React from 'react'
import styled from 'styled-components';
import moment from 'moment'


class CurrentDay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      day: ""
    }

    this.getCurrentDay = this.getCurrentDay.bind(this)
  }

  componentDidMount() {
      this.getCurrentDay()
  }

  getCurrentDay() {

      let startDate = moment('2019-11-25'); // Dummy data
      let currentDate = moment();

      const newDate = currentDate.diff(startDate, 'days');

      this.setState({day: newDate})
  }

  render() {
    return(
      <div>
        <h2> Dag {this.state.day} </h2>
      </div>
    )
  }
}


export default CurrentDay;
