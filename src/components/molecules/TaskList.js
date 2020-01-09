import React from 'react'
import styled from 'styled-components';

const TaskBlock = styled.div`
    width: 100%;
    height: 102px;
    border-radius: 5px;
    box-shadow: 2px 12px 16px #F7F7F7;
    margin-bottom: 10px;
    padding-top: 15px;
`;

const ListItem = styled.li`
    list-style-type: none;
    color: #324BB8;
    letter-spacing: 2px;

`;



class TaskList extends React.Component {

    removeItem(item, i) {
        this.props.removeTask(item, i)
    }

    render() {
      return(
          <ul>
              { this.props.tasks.map((task, i) => {
                   return (


                        <ListItem onClick={() => { this.removeItem(task, i)}} key={i}>
                            <TaskBlock>
                                { task }

                                {/*

                                {this.props.text.map((text, i) => {
                                     return (
                                       <div>
                                       { text }
                                       </div>
                                     )
                                })}

                                */}

                            </TaskBlock>
                        </ListItem>

                   )

               })}
          </ul>
      )
    }
}

export default TaskList;
