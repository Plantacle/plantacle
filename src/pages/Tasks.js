import React from 'react'
import styled from 'styled-components';
import {Bootstrap, Grid, Row, Col, Container} from 'react-bootstrap';
import TaskList from './../components/molecules/TaskList.js';
import { MeasurementsApi, Configuration } from 'plantacle-api-client';

window.id = 0;

const StyledContainer = styled(Container)`
  && {
    padding-left: 25px;
    padding-right: 25px;
    padding-top: 25px;
  }
`;


export const apiConfig = new Configuration({
  basePath: "https://app.plantacle.com",
  accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZTE1MjJjN2I3MmY2Zjc4ZmU4ZGYyZWQiLCJpYXQiOjE1Nzg3NTI3NTgsImV4cCI6MTU3ODc4MTU1OH0.c63N0mRtwMNZgnZUUr2Gc8YrVoK5PUJ_VQh4FUaIb_Y"
})

export const measurementsApi = new MeasurementsApi(apiConfig);

class Tasks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        tasks: [],
        text: [],
    }

    console.log(this.state.tasks)

    this.removeTask = this.removeTask.bind(this);
    this.addTasks = this.addTasks.bind(this);
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

  async addTasks() {
        //this.setState({tasks: test});

        const result = await measurementsApi.getLatest()

        let humidity = this.props.humidity;
        let currentPhase = this.props.currentPhase;

        if(currentPhase == "phase1") {

            const currentTasks = this.state.tasks;
            const currentText = this.state.text;

            const groenafvalText = 'Voorbeelden: Aardappelschillen (beperkt, tenzij biologisch), Bagger uit plastic regengoot of tuinvijver, Bladeren (goed mengen), Citrusschillen (beperkt, tenzij biologisch)';
            const bruinafvalText = 'Voorbeelden: Fijngemaakt hout en takken, Koffiefilters en koffiedik, Stro(beperkt), Eierdozen'
            const tipsText = 'Zorg voor voldoende doorluchting, vochtigheid en variatie van de composthoop. Dan krijg je geen last van ongewenste gassen en stank.'

            const tasks = currentTasks.concat('Instructie groenafval', 'Instructie bruinafval', 'Tips & tricks');
            const text = currentText.concat(groenafvalText, bruinafvalText, tipsText);

            this.setState({ tasks: tasks, text: text})

        } else if(currentPhase == "phase2") {

            const currentTasks = this.state.tasks;
            const currentText = this.state.text;

            const groenafvalText = 'Voorbeelden: Aardappelschillen (beperkt, tenzij biologisch), Bagger uit plastic regengoot of tuinvijver, Bladeren (goed mengen), Citrusschillen (beperkt, tenzij biologisch)';
            const bruinafvalText = 'Voorbeelden: Fijngemaakt hout en takken, Koffiefilters en koffiedik, Stro(beperkt), Eierdozen'

            const tasks = currentTasks.concat('Voeg groen 1,25 cm groen afval toe', ' Voeg 1,25 cm bruin afval toe');
            const text = currentText.concat(groenafvalText, bruinafvalText);

            this.setState({ tasks: tasks, text: text})

        } else if(currentPhase == "phase3") {

            const currentTasks = this.state.tasks;
            const currentText = this.state.text;

            const groenafvalText = 'Voorbeelden: Aardappelschillen (beperkt, tenzij biologisch), Bagger uit plastic regengoot of tuinvijver, Bladeren (goed mengen), Citrusschillen (beperkt, tenzij biologisch)';
            const bruinafvalText = 'Voorbeelden: Fijngemaakt hout en takken, Koffiefilters en koffiedik, Stro(beperkt), Eierdozen'

            const tasks = currentTasks.concat('Voeg groen 1,25 cm groen afval toe', ' Voeg 1,25 cm bruin afval toe');
            const text = currentText.concat(groenafvalText, bruinafvalText);

            this.setState({ tasks: tasks, text: text})
        }
  }

  render() {
    return (
      <StyledContainer>
          <p> Taken </p>
          <TaskList tasks={this.state.tasks} text={this.state.text} removeTask={this.removeTask}> </TaskList>

      </StyledContainer>
    )
  }
}

export default Tasks;
