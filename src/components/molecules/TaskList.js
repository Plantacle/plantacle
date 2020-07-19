import React from 'react'
import styled from 'styled-components';
import Checkbox from '../atoms/Checkbox';
import SvgHelp from '../svg/Help';
import { Link } from 'react-router-dom';
import Modal from "react-bootstrap/Modal";
import SvgCheck from '../svg/Check';
import moment from 'moment';
import axios from 'axios';

const TaskBlock = styled.div`
width: 100%;
height: 150px;
border-radius: 5px;
box-shadow: 2px 12px 16px #F7F7F7;
margin-bottom: 10px;
padding-top: 25px;
padding-left: 20px;
display: flex;
position: relative;
justify-content: space-between;

@media (min-width: 390px) { // Tablets
  height: 130px;
  padding-top: 30px;
  padding-left: 25px;
}
`;

const TaskTitle = styled.p`
font-weight: 500;
font-size: 15px;
color: #324BB8;
letter-spacing: 2px;
@import url('https://fonts.googleapis.com/css?family=Poppins:300,500,700&display=swap');
font-family: Poppins;
`;

const HeadTitle = styled.h2`
font-weight: 500;
font-size: 23px;
color: #FFC759;
@import url('https://fonts.googleapis.com/css?family=Poppins:300,500,700&display=swap');
font-family: Poppins;
`;

const HeadTitleWrapper = styled.div`
padding-left: 10px;
`;

const TaskDescription = styled.p`
font-size: 12px;
margin-top: -10px;
color: #A5A5A5;
letter-spacing: 1px;
@import url('https://fonts.googleapis.com/css?family=Poppins:300,500,700&display=swap');
font-family: Poppins;
font-weight: 300;

@media (min-width: 991.98px) { // Tablets
  width: 300px;
}
`;

const ListItem = styled.li`
list-style-type: none;
`;

const Info = styled.div`
width: 34px;
height: 34px;
border: 1px solid #4368D1;
border-radius: 50%;
margin-top: -12px;
`;

const CheckWrapper = styled.div`
display: flex;
justify-content: space-between;
`;

const InfoButton = styled.button`
background: none;
border: none;
margin-left: -10px;

@media (min-width: 390px) { // Tablets
  margin: 0;
}
`;

const SubmitButton = styled.button`
font-weight: 700;
font-size: 18px;
color: #ffffff;
width: 179px;
letter-spacing: 1px;
height: 41px;
border-radius: 6px;
border: none;
margin: 0;
text-decoration: none;
background: #324BB8;
font-size: 1rem;
cursor: pointer;
text-align: center;
`;

const ModalHeader = styled(Modal.Header)`
@import url('https://fonts.googleapis.com/css?family=Poppins:300,500,700&display=swap');
color: #324BB8;
font-family: Poppins;
font-weight: 700;
text-indent: 4px;
`;

const ModalBody = styled(Modal.Body)`
@import url('https://fonts.googleapis.com/css?family=Poppins:300,500,700&display=swap');
color: #717171;
font-family: Poppins;
font-weight: 300;
text-indent: 4px;
`;

const Ul = styled.ul`
margin-bottom: 30px;
`;

const Button = styled.button`
border: none;
width: 34px;
height: 34px;
background-color: #E8E8E8;
border-radius: 50%;
display: inline-block;
line-height:1em;
position:relative;
outline: none;
overflow: visible;
cursor: pointer;
margin-top: 39px;

&:active {
  background-color: #4368D1;
}

&:focus {
  outline: 0;
}

@media (min-width: 390px) { // Tablets
  margin-top: 27px;
}

`;

const BackButton = styled.button`
font-weight: 700;
font-size: 18px;
color: #ffffff;
width: 100px;
letter-spacing: 1px;
height: 41px;
border-radius: 6px;
border: none;
margin: 0;
text-decoration: none;
background: #324BB8;
font-size: 1rem;
cursor: pointer;
text-align: center;
`;

const Test = styled.div`
width: 20px;
height: 15px;
display: flex;
justify-content: center;
`;

const Image = styled.img`
max-width: 100%;
max-height:100%;
margin-right: 16px;

@media (min-width: 390px) { // Tablets
  margin: 0;
}
`;

const TextWrapper = styled.div`
max-width: 200px;

@media (min-width: 390px) { // Tablets
  max-width: 400px;
}
`;

class TaskList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      checked: true,
      modalShow: false,
      activeTitle: '',
      activeDescription: '',

      // Profile
      points: ''
    }

    this.addPoints = this.addPoints.bind(this);
  }

  removeItem = (item, i) => {
    this.props.removeTask(item, i)
    const currentDate = moment();

    let data = {
      status: 1,
      deleted_date: currentDate,
    }

    const stringifyData = JSON.stringify(data);
    localStorage.setItem('data', stringifyData);

    // Profile
    this.addPoints();
  }

  onHide = () => this.setState({ modalShow: false });

  showModal = (task, description) => {
    this.setState({activeTitle: task, activeDescription: description}, ()=> this.setState({ modalShow: true }));
  }

  addPoints = () => {

    // Add points to this.state
    const points = this.state.points + 1


    // // Change the state with the points in localstorage, so they won't disappear.
    // this.setState((state) => ({
    //     points: getScore
    // }))
    //
    // //Get decoded token, take id and pass into Bearer for authorization.
    // let decodedToken = JSON.parse(localStorage.getItem("decoded_token"));
    // const token = decodedToken.id;
    //
    // // Bearer tokens to execute requests
    // const config = {
    //     headers: { Authorization: `Bearer ${token}` }
    // };
    //
    //
    // // Update compost points (also in back-end)
    // axios({
    // method: 'put',
    // url: 'http://localhost:4000/login',
    // data: {
    //   compost_points: getScore
    // },
    // config
    // })
    // .then(response => {
    //
    // })
    // .catch( err => {
    //   console.log(err)
    // })

  }

  render() {

    return(
      <div>
      <HeadTitleWrapper>
      <HeadTitle> Mijn taken </HeadTitle>
      </HeadTitleWrapper>

      <Ul className="noPadding">
      { this.props.tasks.map((task, i) => {
        const linkText = this.props.text[i];
        const description = this.props.description[i];

        return (

          //<ListItem onClick={() => { this.removeItem(task, i)}} key={i}>
          <ListItem key={i}>
          <TaskBlock>
          <TextWrapper>
          <TaskTitle> { task } </TaskTitle>
          <TaskDescription> {linkText} </TaskDescription>
          </TextWrapper>
          <CheckWrapper>

          <Button checked={this.state.checked} onClick={() => { this.removeItem(task, i)}}>
          <Test>
          <Image src={require('../../assets/images/check.png')}  />
          </Test>
          </Button>

          <InfoButton onClick={()=> this.showModal(task, description)}>
          <Info>
          <SvgHelp />
          </Info>
          </InfoButton>

          </CheckWrapper>
          </TaskBlock>

          <Modal show={this.state.modalShow} onHide={this.onHide}>
          <ModalHeader closeButton>{this.state.activeTitle}</ModalHeader>
          <ModalBody>
          {this.state.activeDescription}
          </ModalBody>
          <Modal.Footer>
          <BackButton onClick={this.onHide}>Terug</BackButton>
          </Modal.Footer>
          </Modal>
          </ListItem>

        )
      })}
      </Ul>

      {/*   <SubmitButton onClick={this.deleteTasks}>Klaar!</SubmitButton> */}

      </div>
    )
  }
}

export default TaskList;
