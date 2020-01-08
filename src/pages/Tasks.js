import React from 'react'
import styled from 'styled-components';
import {Bootstrap, Grid, Row, Col, Container} from 'react-bootstrap';
//import TaskList from './../components/molecules/Tasks.js';

window.id = 0;

const StyledContainer = styled(Container)`
  && {
    padding-left: 25px;
    padding-right: 25px;
    padding-top: 25px;
  }
`;

class Tasks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        tasks: ['Compost water geven', 'Groen toevoegen', 'Test']
    }

    //this.getTemperature = this.getTemperature.bind(this);
    //this.getDays = this.getDays.bind(this);

    this.removeTask = this.removeTask.bind(this);

  }

  removeTask(name, i) {
      let tasks = this.state.tasks.slice();
      tasks.splice(i, 1);
      this.setState({
        tasks
      })
  }



  render() {
    return (
      <StyledContainer>
          <p> Taken </p>
          <TaskList tasks={this.state.tasks} removeTask={this.removeTask}> </TaskList>
      </StyledContainer>
    )
  }
}

class TaskList extends React.Component {

    removeItem(item, i) {
        this.props.removeTask(item, i)
    }

    render() {
      return(
          <ul>
              { this.props.tasks.map((task, i) => {
                   return <li onClick={() => { this.removeItem(task, i)}} key={i}>{ task }</li>
               })}
          </ul>
      )
    }
}


export default Tasks;
