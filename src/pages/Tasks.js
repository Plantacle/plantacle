import React from 'react'
import styled from 'styled-components';
import {Bootstrap, Grid, Row, Col, Container} from 'react-bootstrap';
import TaskList from './../components/molecules/TaskList.js';
import { MeasurementsApi, Configuration } from 'plantacle-api-client';
import { GlobalStyles } from '../components/App'
import SvgBackArrow from '../components/svg/BackArrow';
import { Link } from 'react-router-dom';

const StyledContainer = styled(Container)`
  && {
    padding-left: 25px;
    padding-right: 25px;
    padding-top: 25px;
  }
`;

const TaskTitle = styled.p`
    font-weight: 500;
    font-size: 19px;
    color: #324BB8;
    letter-spacing: 2px;
    margin-left: 20px;
    @import url('https://fonts.googleapis.com/css?family=Poppins:300,500,700&display=swap');
    font-family: Poppins;
`;

const BackWrapper = styled.div`
    display: flex;
    margin-bottom: 20px;
`;


export const apiConfig = new Configuration({
  basePath: "https://app.plantacle.com",
  accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZTE1MjJjN2I3MmY2Zjc4ZmU4ZGYyZWQiLCJpYXQiOjE1Nzg5Mzc0MzUsImV4cCI6MTU3ODk2NjIzNX0.3Rm_Gqq34fgM9N0tBIQ2CI8Nrq4w899aEZ8mz-muIoo"
})


export const measurementsApi = new MeasurementsApi(apiConfig);

class Tasks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        tasks: [],
        text: [],
        //taskInfo: [],
        phase: props.currentPhase,
        humidity: props.humidity,
    }

    this.removeTask = this.removeTask.bind(this);
    this.addTasks = this.addTasks.bind(this);
    this.addWater = this.addWater.bind(this);

  }

  removeTask(name, i) {
      let tasks = this.state.tasks.slice();
      tasks.splice(i, 1);
      this.setState({
        tasks
      })
  }

  componentWillReceiveProps(nextProps){
       if(nextProps.currentPhase == this.props.currentPhase) {
           this.addTasks(nextProps);
       }
       if(nextProps.humidity == this.props.humidity) {
         this.addWater(nextProps);
       }
  }

 addTasks = async (props) => {
  //this.setState({tasks: test});

  const result = await measurementsApi.getLatest()

  let currentPhase = props.currentPhase;

  if(currentPhase == "phase1") {

      const currentTasks = this.state.tasks;
      const currentText = this.state.text;

      const groenafvalText = 'Bijvoorbeeld: Aardappelschillen (beperkt, tenzij biologisch)';
      const bruinafvalText = 'Bijvoorbeeld: Eierdozen'
      const tipsText = 'Zorg voor voldoende doorluchting, vochtigheid en variatie van de composthoop.'

      const tasks = currentTasks.concat('Instructie groenafval', 'Instructie bruinafval', 'Tips & tricks');
      const text = currentText.concat(groenafvalText, bruinafvalText, tipsText);

      this.setState({ tasks: tasks, text: text})

  } else if(currentPhase == "phase2") {

      const currentTasks = this.state.tasks;
      const currentText = this.state.text;

      const groenafvalText = 'Bijvoorbeeld: Aardappelschillen (beperkt, tenzij biologisch)';
      const bruinafvalText = 'Bijvoorbeeld: Eierdozen'

      const tasks = currentTasks.concat('Voeg om de 2 dagen 1,25 cm groen afval toe', ' Voeg om de 2 dagen 1,25 cm bruin afval toe');
      const text = currentText.concat(groenafvalText, bruinafvalText);

      this.setState({ tasks: tasks, text: text})

  } else if(currentPhase == "phase3") {

      const currentTasks = this.state.tasks;
      const currentText = this.state.text;

      const groenafvalText = 'Bijvoorbeeld: Aardappelschillen (beperkt, tenzij biologisch)';
      const bruinafvalText = 'Bijvoorbeeld: Eierdozen'

      const tasks = currentTasks.concat('Voeg om de 3 dagen 1,25 cm groen afval toe', ' Voeg om de 3 dagen 1,25 cm bruin afval toe');
      const text = currentText.concat(groenafvalText, bruinafvalText);

      this.setState({ tasks: tasks, text: text})

  } else if(currentPhase == "phase4") {

      const currentTasks = this.state.tasks;
      const currentText = this.state.text;

      const groenafvalText = 'Bijvoorbeeld: Aardappelschillen (beperkt, tenzij biologisch)';
      const bruinafvalText = 'Bijvoorbeeld: Eierdozen'

      const tasks = currentTasks.concat('Voeg om de 4 dagen 1,25 cm groen afval toe', ' Voeg om de 4 dagen 1,25 cm bruin afval toe');
      const text = currentText.concat(groenafvalText, bruinafvalText);

      this.setState({ tasks: tasks, text: text})
  } else {
      console.log('errror')
  }
}

addWater = async (props) => {

const result = await measurementsApi.getLatest()
let humidity = result.data.humidity; // can't use this.props.humidity because of asynchronous function

// SHOW
//let humidity = 101;

if(humidity) {
     if(humidity < 20) {
           const currentTasks = this.state.tasks;
           const currentText = this.state.text;

           const tasks = currentTasks.concat('Voeg 10 cl water toe aan de wormenbak');
           const text = currentText.concat('De vochtigheid in de wormenbak is op het moment te laag');

           this.setState({ tasks: tasks, text: text})

     } else if(humidity > 100) {
           const currentTasks = this.state.tasks;
           const currentText = this.state.text;

           const tasks = currentTasks.concat('Schep de wormenbak om');
           const text = currentText.concat('De vochtigheid van de wormenbak is op het moment te hoog');

           this.setState({ tasks: tasks, text: text})
     }

} else {
      console.log('There is no humidity!')
      const currentTasks = this.state.tasks;
      const currentText = this.state.text;

      const tasks = currentTasks.concat('Er word niets doorgegeven');
      const text = currentText.concat('niks niks niks');

      this.setState({ tasks: tasks, text: text})
}

}

  render() {
    return (
      <div>
      <StyledContainer>
          <BackWrapper>
              <Link to="/overview">
                  <SvgBackArrow />
              </Link>
              <TaskTitle> Taken </TaskTitle>
          </BackWrapper>
          <TaskList tasks={this.state.tasks} text={this.state.text} removeTask={this.removeTask}> </TaskList>
      </StyledContainer>
      <GlobalStyles />
      </div>
    )
  }


}

export default Tasks;
