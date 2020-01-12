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
  accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZTE1MjJjN2I3MmY2Zjc4ZmU4ZGYyZWQiLCJpYXQiOjE1Nzg4NDI5NDIsImV4cCI6MTU3ODg3MTc0Mn0.M4y1Ch_2exRcbbWnfl-sN3AcBLRWY3Fyi2m9bfP4Lus"
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

            const tasks = currentTasks.concat('Voeg om de 2 dagen 1,25 cm groen afval toe', ' Voeg om de 2 dagen 1,25 cm bruin afval toe');
            const text = currentText.concat(groenafvalText, bruinafvalText);

            this.setState({ tasks: tasks, text: text})

        } else if(currentPhase == "phase3") {

            const currentTasks = this.state.tasks;
            const currentText = this.state.text;

            const groenafvalText = 'Voorbeelden: Aardappelschillen (beperkt, tenzij biologisch), Bagger uit plastic regengoot of tuinvijver, Bladeren (goed mengen), Citrusschillen (beperkt, tenzij biologisch)';
            const bruinafvalText = 'Voorbeelden: Fijngemaakt hout en takken, Koffiefilters en koffiedik, Stro(beperkt), Eierdozen'

            const tasks = currentTasks.concat('Voeg om de 3 dagen 1,25 cm groen afval toe', ' Voeg om de 3 dagen 1,25 cm bruin afval toe');
            const text = currentText.concat(groenafvalText, bruinafvalText);

            this.setState({ tasks: tasks, text: text})

        } else if(currentPhase == "phase4") {

            const currentTasks = this.state.tasks;
            const currentText = this.state.text;

            const groenafvalText = 'Voorbeelden: Aardappelschillen (beperkt, tenzij biologisch), Bagger uit plastic regengoot of tuinvijver, Bladeren (goed mengen), Citrusschillen (beperkt, tenzij biologisch)';
            const bruinafvalText = 'Voorbeelden: Fijngemaakt hout en takken, Koffiefilters en koffiedik, Stro(beperkt), Eierdozen'

            const tasks = currentTasks.concat('Voeg om de 4 dagen 1,25 cm groen afval toe', ' Voeg om de 4 dagen 1,25 cm bruin afval toe');
            const text = currentText.concat(groenafvalText, bruinafvalText);

            this.setState({ tasks: tasks, text: text})
        } else {
            console.log('errror')
        }

        if(humidity < 20) {
            const currentTasks = this.state.tasks;
            const currentText = this.state.text;

            const tasks = currentTasks.concat('Voeg 10 cl water toe aan de wormenbak');
            const text = currentText.concat('De vochtigheid in de wormenbak is op het moment te laag');

            this.setState({ tasks: tasks, text: text})

        } else if(humidity > 101) {
            const currentTasks = this.state.tasks;
            const currentText = this.state.text;

            const tasks = currentTasks.concat('Schep de wormenbak om');
            const text = currentText.concat('De vochtigheid van de wormenbak is op het moment te hoog');

            this.setState({ tasks: tasks, text: text})
        } else {
            console.log('errr')
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
