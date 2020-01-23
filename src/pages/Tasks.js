import React from 'react'
import styled from 'styled-components';
import {Bootstrap, Grid, Row, Col, Container} from 'react-bootstrap';
import TaskList from './../components/molecules/TaskList.js';
import Navigation from '../components/organisms/Navigation'

import { MeasurementsApi, Configuration } from 'plantacle-api-client';
import { measurementsApi } from '../components/App';
import { GlobalStyles } from '../components/App'
import SvgBackArrow from '../components/svg/BackArrow';
import { Link } from 'react-router-dom';
import moment from 'moment';

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
    const result = await measurementsApi.getLatest()

    let currentPhase = props.currentPhase;

    if(currentPhase == "phase1") {

        const currentTasks = this.state.tasks;
        const currentText = this.state.text;
        const currentDescription = this.state.description;

        const groenafvalText = 'Bijvoorbeeld: Aardappelschillen (beperkt, tenzij biologisch)';
        const bruinafvalText = 'Bijvoorbeeld: Eierdozen'
        const tipsText = 'Hou de wormen goed in de gaten, want zij zijn de basis van de wormenbak'
        const descriptionGroenAfval = 'Niet al het groenafaval mag op de composthoop. Zie hieronder wat je over het algemeen wel en niet mag zelf composteren. Voorbeelden- Rauwe groenten en fruit- Aardappelschillen (beperkt, tenzij biologisch), - Bagger uit plastic regengoot of tuinvijver- Bladeren (goed mengen)- Citrusschillen (beperkt, tenzij biologisch)'
        const descriptionBruinAfval = 'Niet al het bruinafval mag op de composthoop. Zie hieronder wat je over het algemeen wel en niet mag zelf composteren. Voorbeelden:* Snoeiafval in kleine stukjes* Grasmaaisel* Eierschalen* Koffiefilters en theezakjes* Houtsnippers'
        const descriptionTips = 'Elke wormenbak is anders omdat er verschillende variabelen zijn zoals de voedselfrequentie, de aard van het voedsel, de vochtigheid en de standplaats van de wormenbak alsook de omgevingstemperatuur. Een wormenbak in stand houden vraagt dus een beetje ervaring, noem het kunst, maar vooral een flinke dosis gezond verstand.Het is inderdaad zo dat een wormenbak heel weinig onderhoud vraagt maar toch is alles sterk afhankelijk van de gezondheid van de compostwormen. Deze dienen dus geregeld eens kort geinspecteerd te worden.Ga eens om de vier weken met een kleine woelvork of een stokje door de compost en controleer de vitaliteit van de compostwormen om er zeker van te zijn dat de compostproductie op volle toeren draait. In dezelfde handeling controleer je ook meteen het vochtgehalte en de zuurtegraad van jouw compostbak.Voeg bij twijfel genoeg versnipperd krantenpapier toe en een handvol kalk. Leeg de drainage schaal tijdig om overvloedig vocht en condens geen kans te geven.Composteren met wormen is een eenvoudig, efficient en natuurlijk proces. Een klein beetje zorg en aandacht zorgt reeds voor een geweldig succes. Hoewel er maar weinig problemen zijn, zijn ze eenvoudig te vermijden en meestal eenvoudig te verhelpen. Onthoud dat de conditie van de wormen allesbepalend is voor de snelheid en de kwaliteit van het composteringsproces.'

        const tasks = currentTasks.concat('Instructie groenafval', 'Instructie bruinafval', 'Tips & tricks');
        const text = currentText.concat(groenafvalText, bruinafvalText, tipsText);
        const description = currentDescription.concat(descriptionGroenAfval, descriptionBruinAfval, descriptionTips);

        if(accessObject ==! null) {  //localStorage.length == 0
             let data = {
                status: 0,
                deleted_date: null,
            }

            const stringifyData = JSON.stringify(data);
            localStorage.setItem('data', stringifyData);

            this.setState({ tasks: tasks, text: text, description: description})

            console.log('null')

        } else if(localStorage.length > 0 && accessObject.status == 0 && accessObject.deleted_date == null) {
            this.setState({ tasks: tasks, text: text, description: description})

        } else if(localStorage.length > 0 && accessObject.status == 1 && differenceDate >= 1 ) {
             this.setState({ tasks: tasks, text: text, description: description})
             console.log('Al 24 uur verstreken');
        } else {
            console.log('24 uur is nog niet verstreken')
            this.setState(initialState);

        }

        console.log('er gaat wat mis')


    } else if(currentPhase == "phase2") {

        const currentTasks = this.state.tasks;
        const currentText = this.state.text;
        const currentDescription = this.state.description;

        const descriptionGroenAfval = 'Niet al het groenafaval mag op de composthoop. Zie hieronder wat je over het algemeen wel en niet mag zelf composteren. Voorbeelden- Rauwe groenten en fruit- Aardappelschillen (beperkt, tenzij biologisch), - Bagger uit plastic regengoot of tuinvijver- Bladeren (goed mengen)- Citrusschillen (beperkt, tenzij biologisch)'
        const descriptionBruinAfval = 'Niet al het bruinafval mag op de composthoop. Zie hieronder wat je over het algemeen wel en niet mag zelf composteren. Voorbeelden:* Snoeiafval in kleine stukjes* Grasmaaisel* Eierschalen* Koffiefilters en theezakjes* Houtsnippers'
        const groenafvalText = 'Bijvoorbeeld: Aardappelschillen (beperkt, tenzij biologisch)';
        const bruinafvalText = 'Bijvoorbeeld: Eierdozen'


        const tasks = currentTasks.concat('Voeg 1,25 cm groen afval toe', ' Voeg 1,25 cm bruin afval toe');
        const text = currentText.concat(groenafvalText, bruinafvalText);
        const description = currentDescription.concat(descriptionGroenAfval, descriptionBruinAfval);

        if(localStorage.length == 0) {
             let data = {
                status: 0,
                deleted_date: null,
            }

            const stringifyData = JSON.stringify(data);
            localStorage.setItem('data', stringifyData);

            this.setState({ tasks: tasks, text: text, description: description})

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

        const currentTasks = this.state.tasks;
        const currentText = this.state.text;
        const currentDescription = this.state.description;

        const descriptionGroenAfval = 'Niet al het groenafaval mag op de composthoop. Zie hieronder wat je over het algemeen wel en niet mag zelf composteren. Voorbeelden- Rauwe groenten en fruit- Aardappelschillen (beperkt, tenzij biologisch), - Bagger uit plastic regengoot of tuinvijver- Bladeren (goed mengen)- Citrusschillen (beperkt, tenzij biologisch)'
        const descriptionBruinAfval = 'Niet al het bruinafval mag op de composthoop. Zie hieronder wat je over het algemeen wel en niet mag zelf composteren. Voorbeelden:* Snoeiafval in kleine stukjes* Grasmaaisel* Eierschalen* Koffiefilters en theezakjes* Houtsnippers'
        const groenafvalText = 'Bijvoorbeeld: Aardappelschillen (beperkt, tenzij biologisch)';
        const bruinafvalText = 'Bijvoorbeeld: Eierdozen'

        const tasks = currentTasks.concat('Voeg 1,25 cm groen afval toe', ' Voeg 1,25 cm bruin afval toe');
        const text = currentText.concat(groenafvalText, bruinafvalText);
        const description = currentDescription.concat(descriptionGroenAfval, descriptionBruinAfval);

        if(localStorage.length == 0) {
             let data = {
                status: 0,
                deleted_date: null,
            }

            const stringifyData = JSON.stringify(data);
            localStorage.setItem('data', stringifyData);

            this.setState({ tasks: tasks, text: text, description: description})

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

        const currentTasks = this.state.tasks;
        const currentText = this.state.text;
        const currentDescription = this.state.description;

        const descriptionGroenAfval = 'Niet al het groenafaval mag op de composthoop. Zie hieronder wat je over het algemeen wel en niet mag zelf composteren. Voorbeelden- Rauwe groenten en fruit- Aardappelschillen (beperkt, tenzij biologisch), - Bagger uit plastic regengoot of tuinvijver- Bladeren (goed mengen)- Citrusschillen (beperkt, tenzij biologisch)'
        const descriptionBruinAfval = 'Niet al het bruinafval mag op de composthoop. Zie hieronder wat je over het algemeen wel en niet mag zelf composteren. Voorbeelden:* Snoeiafval in kleine stukjes* Grasmaaisel* Eierschalen* Koffiefilters en theezakjes* Houtsnippers'
        const groenafvalText = 'Bijvoorbeeld: Aardappelschillen (beperkt, tenzij biologisch)';
        const bruinafvalText = 'Bijvoorbeeld: Eierdozen'

        const tasks = currentTasks.concat('Voeg 1,25 cm groen afval toe', 'Voeg 1,25 cm bruin afval toe');
        const text = currentText.concat(groenafvalText, bruinafvalText);
        const description = currentDescription.concat(descriptionGroenAfval, descriptionBruinAfval);

        if(localStorage.length == 0) {
             let data = {
                status: 0,
                deleted_date: null,
            }

            const stringifyData = JSON.stringify(data);
            localStorage.setItem('data', stringifyData);

            this.setState({ tasks: tasks, text: text, description: description})

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

    console.log(localStorage);
}

    addWater = async (props) => {

    const result = await measurementsApi.getLatest()
    //let humidity = result.data.humidity;
    let humidity = 15;

    // SHOW

    if(humidity) {
         if(humidity <= 20) {
               const currentTasks = this.state.tasks;
               const currentText = this.state.text;
               const currentDescription = this.state.description;

               const tasks = currentTasks.concat('Voeg 10 cl water toe aan de wormenbak');
               const text = currentText.concat('De vochtigheid in de wormenbak is op het moment te laag');
               const description = currentDescription.concat('De composthoop mag niet te nat of te droog worden. Af en toe een beetje water is prima, maar bij te veel regen spoelen de voedingsstoffen uit, of kan een tekort aan lucht ontstaan in de composthoop.')

               if(localStorage.length == 0) {
                    let data = {
                       status: 0,
                       deleted_date: null,
                   }

                   const stringifyData = JSON.stringify(data);
                   localStorage.setItem('data', stringifyData);

                   this.setState({ tasks: tasks, text: text, description: description})

               } else if(localStorage.length > 0 && accessObject.status == 0 && accessObject.deleted_date == null) {
                   this.setState({ tasks: tasks, text: text, description: description})

               } else if(localStorage.length > 0 && accessObject.status == 1 && differenceDate >= 1 ) {
                    this.setState({ tasks: tasks, text: text, description: description})
                    console.log('Al 48 uur verstreken');
               } else {
                   console.log('48 uur is nog niet verstreken')
                   this.setState(initialState);
                   //localStorage.clear();
               }



         } else if(humidity >= 102) {
               const currentTasks = this.state.tasks;
               const currentText = this.state.text;
               const currentDescription = this.state.description;

               const tasks = currentTasks.concat('Schep de wormenbak om');
               const text = currentText.concat('De vochtigheid van de wormenbak is op het moment te hoog');
               const description = currentDescription.concat('De wormenbak is op het moment te vochtig waardoor de compost gaat beschimmelen.');

               if(localStorage.length == 0) {
                    let data = {
                       status: 0,
                       deleted_date: null,
                   }

                   const stringifyData = JSON.stringify(data);
                   localStorage.setItem('data', stringifyData);

                   this.setState({ tasks: tasks, text: text, description: description})

               } else if(localStorage.length > 0 && accessObject.status == 0 && accessObject.deleted_date == null) {
                   this.setState({ tasks: tasks, text: text, description: description})

               } else if(localStorage.length > 0 && accessObject.status == 1 && differenceDate >= 1 ) {
                    this.setState({ tasks: tasks, text: text, description: description})
                    console.log('Al 48 uur verstreken');
               } else {
                   console.log('48 uur is nog niet verstreken')
                   this.setState(initialState);
                   //localStorage.clear();
               }
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
            <TaskList tasks={this.state.tasks} text={this.state.text} description={this.state.description} removeTask={this.removeTask}> </TaskList>
            <Navigation/>
        </StyledContainer>
        <GlobalStyles />
    </div>
    )
  }
}

export default Tasks;
