import React from 'react'
import styled from 'styled-components';
import Checkbox from '../atoms/Checkbox';

const TaskBlock = styled.div`
    width: 100%;
    height: 102px;
    border-radius: 5px;
    box-shadow: 2px 12px 16px #F7F7F7;
    margin-bottom: 10px;
    padding-top: 15px;
    padding-left: 15px;
    display: flex;
    position: relative;
    justify-content: space-between;
`;

const TaskTitle = styled.p`
    font-weight: 500;
    font-size: 15px;
    color: #324BB8;
    letter-spacing: 2px;
`;

const TaskDescription = styled.p`
    font-size: 12px;
    margin-top: -10px;
    color: #A5A5A5;
    letter-spacing: 1px;
    width: 300px;
`;

const ListItem = styled.li`
    list-style-type: none;
`;

class TaskList extends React.Component {

    constructor() {
        super();

        this.state = {
            checked: true
        }
    }

  removeItem = (item, i) => {
        this.props.removeTask(item, i)
    }

  toggleChange = () => {
    this.setState({
      isChecked: !this.state.isChecked,
    });
  }

    render() {
      return(
          <ul>
              { this.props.tasks.map((task, i) => {
                const linkText = this.props.text[i];
                   return (


                        //<ListItem onClick={() => { this.removeItem(task, i)}} key={i}>
                        <ListItem key={i}>
                            <TaskBlock>
                            <div>
                              <TaskTitle> { task } </TaskTitle>
                              <TaskDescription> {linkText} </TaskDescription>
                            </div>
                              <Checkbox checked={this.state.checked} onChange={this.toggleChange}/>
                            </TaskBlock>
                        </ListItem>

                   )
               })}

          </ul>
      )
    }
}

export default TaskList;
