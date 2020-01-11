import React from 'react'
import styled from 'styled-components';
import {Bootstrap, Grid, Row, Col, Container} from 'react-bootstrap';
import TaskList from './../components/molecules/TaskList.js';
import TaskTransmitter from './../components/atoms/TaskTransmitter';

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
        tasks: [''],
        text: ['Doe hier 15 ml bij', 'Fruit, Aardapschillen', 'Gras', 'Test', 'Kartonnen dozen']
    }

    console.log(this.state.tasks)

    this.removeTask = this.removeTask.bind(this);
    this.testCallBack = this.addTasks.bind(this);
  }

  componentDidMount() {
      this.addTasks();
  }

  removeTask(name, i) {
      let tasks = this.state.tasks.slice();
      tasks.splice(i, 1);
      this.setState({
        tasks
      })
  }

  addTasks() {
        const test = ['Groen afval toevoegen', 'Bruin afval toevoegen']
        //this.setState({tasks: test});
  }

  render() {
    return (
      <StyledContainer>
          <p> Taken </p>
          <TaskList tasks={this.state.tasks} text={this.state.text} removeTask={this.removeTask}> </TaskList>

          {this.props.test}

      </StyledContainer>
    )
  }
}

export default Tasks;
