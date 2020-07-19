import React from 'react'
import styled from 'styled-components';
import {Bootstrap, Grid, Row, Col, Container} from 'react-bootstrap';
import TaskList from './../components/molecules/TaskList.js';
import Navigation from '../components/organisms/Navigation'

//import { MeasurementsApi, Configuration } from 'plantacle-api-client';
//import { measurementsApi } from '../components/App';
import { GlobalStyles } from '../components/App'
import SvgBackArrow from '../components/svg/BackArrow';
import { Link } from 'react-router-dom';
import moment from 'moment';
import axios from 'axios';

window.id = 0;

// Current day
let currentDate = moment();

// Access object in local storage
const accessObject = JSON.parse(localStorage.getItem('data'));

//Days between new date and deleted date
const differenceDate = currentDate.diff(currentDate, 'days');

//Reset startDate
const initialState = {
  /* etc */
};

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

class Tasks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      text: [],
      description: [],
      //taskInfo: [],
      phase: '',
      humidity: props.humidity,
    }

    this.removeTask = this.removeTask.bind(this);
    this.addTasks = this.addTasks.bind(this);
    this.addWater = this.addWater.bind(this);

  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if(nextProps.currentPhase!==prevState.phase){
      return { phase: nextProps.currentPhase};
    }
    else return null;
  }

  removeTask(name, i) {
    let tasks = this.state.tasks.slice();
    tasks.splice(i, 1);
    this.setState({
      tasks
    })
  }

  componentDidMount() {
    this.addTasks();
    this.addWater();
  }

  addTasks = async (props) => {
    let phase1 = 'http://localhost:4000/tasks/1';
    let phase2= 'http://localhost:4000/tasks/2';
    let phase3 ='http://localhost:4000/tasks/3';
    let phase4 ='http://localhost:4000/tasks/4';

    const requestPhase1 = axios.get(phase1);
    const requestPhase2 = axios.get(phase2);
    const requestPhase3 = axios.get(phase3);
    const requestPhase4 = axios.get(phase4);

    axios
    .all([requestPhase1, requestPhase2, requestPhase3, requestPhase4])
    .then(
      axios.spread((...responses) => {
        const responsePhase1 = responses[0];
        const responsePhase2 = responses[1];
        const responsePhase3 = responses[2];
        const responsePhase4 = responses[3];

        // use/access the results
        //console.log(responsePhase1, responsePhase2, responsePhase3);

        this.addPhaseText(responsePhase1, responsePhase2, responsePhase3, responsePhase4);

      })
    )
    .catch(errors => {
      // react on errors.
      console.error(errors);
    });

  }

  addPhaseText = (phase1, phase2, phase3, phase4) => {
    let currentPhase = this.state.phase;

    if(currentPhase == "phase1") {

      const tasks = [];
      const text = [];
      const description = [];

      phase1.data.forEach(element => {
        tasks.push(element.title);
        text.push(element.preview_description);
        description.push(element.description);
      });

      if(accessObject == null) {  //localStorage.length == 0
        let data = {
          status: 0,
          deleted_date: null,
        }

        const stringifyData = JSON.stringify(data);
        localStorage.setItem('data', stringifyData);

        this.setState({ tasks: tasks, text: text, description: description})

      } else if(localStorage.length > 0 && accessObject == null) {
        console.log('Accesobject has not been made')
      } else if(localStorage.length > 0 && accessObject.status == 0 && accessObject.deleted_date == null) {
        this.setState({ tasks: tasks, text: text, description: description})
      } else if(localStorage.length > 0 && accessObject.status == 1 && differenceDate >= 1 ) {
        this.setState({ tasks: tasks, text: text, description: description})
        console.log('Al 24 uur verstreken');
      } else {
        this.setState({ initialState });
        //localStorage.clear();
      }


    } else if(currentPhase == "phase2") {

      const tasks = [];
      const text = [];
      const description = [];

      phase2.data.forEach(element => {
        tasks.push(element.title);
        text.push(element.preview_description);
        description.push(element.description);
      });

      if(accessObject == null) {
        let data = {
          status: 0,
          deleted_date: null,
        }

        const stringifyData = JSON.stringify(data);
        localStorage.setItem('data', stringifyData);

        this.setState({ tasks: tasks, text: text, description: description})

      } else if(localStorage.length > 0 && accessObject == null) {
        console.log('Accesobject has not been made')
      } else if(localStorage.length > 0 && accessObject.status == 0 && accessObject.deleted_date == null) {
        this.setState({ tasks: tasks, text: text, description: description})

      } else if(localStorage.length > 0 && accessObject.status == 1 && differenceDate >= 2 ) {
        this.setState({ tasks: tasks, text: text, description: description})
        console.log('Al 48 uur verstreken');
      } else {
        console.log('48 uur is nog niet verstreken')
        this.setState(initialState);
        //localStorage.clear();
      }

    } else if(currentPhase == "phase3") {

      const tasks = [];
      const text = [];
      const description = [];

      phase3.data.forEach(element => {
        tasks.push(element.title);
        text.push(element.preview_description);
        description.push(element.description);
      });

      if(accessObject == null) {
        let data = {
          status: 0,
          deleted_date: null,
        }

        const stringifyData = JSON.stringify(data);
        localStorage.setItem('data', stringifyData);

        this.setState({ tasks: tasks, text: text, description: description})

      } else if(localStorage.length > 0 && accessObject == null) {
        console.log('Accesobject has not been made')
      } else if(localStorage.length > 0 && accessObject.status == 0 && accessObject.deleted_date == null) {
        this.setState({ tasks: tasks, text: text, description: description})

      } else if(localStorage.length > 0 && accessObject.status == 1 && differenceDate >= 3 ) {
        this.setState({ tasks: tasks, text: text, description: description})
        console.log('Al 72 uur verstreken');
      } else {
        console.log('72 uur is nog niet verstreken')
        this.setState(initialState);
        //localStorage.clear();
      }

    } else if(currentPhase == "phase4") {

      const tasks = [];
      const text = [];
      const description = [];

      phase4.data.forEach(element => {
        tasks.push(element.title);
        text.push(element.preview_description);
        description.push(element.description);
      });

      if(accessObject == null) {
        let data = {
          status: 0,
          deleted_date: null,
        }

        const stringifyData = JSON.stringify(data);
        localStorage.setItem('data', stringifyData);

        this.setState({ tasks: tasks, text: text, description: description})

      } else if(localStorage.length > 0 && accessObject == null) {
        console.log('Accesobject has not been made')
      } else if(localStorage.length > 0 && accessObject.status == 0 && accessObject.deleted_date == null) {
        this.setState({ tasks: tasks, text: text, description: description})

      } else if(localStorage.length > 0 && accessObject.status == 1 && differenceDate >= 4 ) {
        this.setState({ tasks: tasks, text: text, description: description})
        console.log('Al 96 uur verstreken');
      } else {
        console.log('96 uur is nog niet verstreken')
        this.setState(initialState)
      }

    } else {
      console.log('errror')
    }
  }

  addWater = async (props) => {
    console.log("blub")

  }
  
  render(props) {
    return (
      <div>
      <StyledContainer>
      <BackWrapper>
      <Link to="/overview">
      <SvgBackArrow />
      </Link>
      <TaskTitle> Taken </TaskTitle>
      </BackWrapper>
      <TaskList tasks={this.state.tasks} text={this.state.text} description={this.state.description} removeTask={this.removeTask}> </TaskList>
      <Navigation/>
      </StyledContainer>
      <GlobalStyles />
      </div>
    )
  }
}

export default Tasks;
