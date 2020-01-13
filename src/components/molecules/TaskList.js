import React from 'react'
import styled from 'styled-components';
import Checkbox from '../atoms/Checkbox';
import SvgHelp from '../svg/Help';
import { Link } from 'react-router-dom';
import Modal from "react-bootstrap/Modal";

const TaskBlock = styled.div`
    width: 100%;
    height: 102px;
    border-radius: 5px;
    box-shadow: 2px 12px 16px #F7F7F7;
    margin-bottom: 10px;
    padding-top: 15px;
    padding-left: 10px;
    display: flex;
    position: relative;
    justify-content: space-between;
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
    width: 300px;
    @import url('https://fonts.googleapis.com/css?family=Poppins:300,500,700&display=swap');
    font-family: Poppins;
    font-weight: 300;
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

class TaskList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            checked: true,
            modalShow: false,
            activeTitle: '',
            activeDescription: '',
        }
    }

  removeItem = (item, i) => {
        this.props.removeTask(item, i)
    }

  onHide = () => this.setState({ modalShow: false });

  showModal = (task, description) => {
      this.setState({activeTitle: task, activeDescription: description}, ()=> this.setState({ modalShow: true }));
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
                            <div>
                              <TaskTitle> { task } </TaskTitle>
                              <TaskDescription> {linkText} </TaskDescription>

                            </div>
                              <CheckWrapper>

                                <Checkbox checked={this.state.checked} onChange={this.toggleChange}/>

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
                                      <BackButton onClick={this.onHide}>Ga terug</BackButton>
                                </Modal.Footer>
                            </Modal>
                        </ListItem>

                   )
               })}
          </Ul>

          <SubmitButton>Klaar!</SubmitButton>

        </div>
      )
    }
}

export default TaskList;
