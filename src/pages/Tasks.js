import React from 'react'
import styled from 'styled-components';
import {Bootstrap, Grid, Row, Col, Container} from 'react-bootstrap';
import TaskList from './../components/molecules/TaskList.js';
import Navigation from '../components/organisms/Navigation'

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
        tasks: ['Compost water geven', 'Groen toevoegen', 'Test', 'Bruin toevoegen'],
        text: ['Doe hier 15 ml bij', 'Fruit, Aardapschillen', 'Gras', 'Test', 'Kartonnen dozen']
    }

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
          <TaskList tasks={this.state.tasks} text={this.state.text} removeTask={this.removeTask}> </TaskList>
          <Navigation/>
      </StyledContainer>
    )
  }
}

export default Tasks;
