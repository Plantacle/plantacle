import React from 'react'
import styled from 'styled-components'
import moment from 'moment'

const Title = styled.h2`
  font-weight: 700;
  letter-spacing: 3px;
  color: #FFC759;
`;


class CurrentDay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      day: null
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
