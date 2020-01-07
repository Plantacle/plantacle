import React from 'react'
import styled from 'styled-components'
import moment from 'moment'

const Title = styled.h2`
  color: #FFC759;
  letter-spacing: 3px;
  font-weight: 700;
  font-size: 30px;

  @media (min-width: 991.98px) { // Tablets
    font-size: 35px;
  }

`;


class CurrentDay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      day: ''
    }

    this.getCurrentDay = this.getCurrentDay.bind(this)
  }

  componentDidMount() {
      this.getCurrentDay()
  }

  getCurrentDay() {
      let startDate = moment('2019-11-22') // Dummy data
      let currentDate = moment()
      const newDate = currentDate.diff(startDate, 'days');
      this.setState({day: newDate})
  }

  render() {
    return(
      <div>
        <Title> DAG {this.state.day} </Title>
      </div>
    )
  }
}


export default CurrentDay;
