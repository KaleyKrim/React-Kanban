import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../Card';

class ToDo extends Component {

  constructor(props){
    super(props);

    this.state = {
    }
  }

  findAssignedTo(card){
    let username = '';
    this.props.users.forEach((user) => {
      if (user.id === card.assigned_to){
        username = user.name;
      }
    })
    return username;
  }

  findPriority(card){
    let priorityName = '';
    this.props.priorities.forEach((priority) => {
      if (priority.id === card.priority){
        priorityName = priority.title;
      }
    });
    return priorityName;
  }

  render(){
    return (
      <div>
        <h2>
          To Do
        </h2>
         <div id="to-do">
          {
            this.props.cards.filter((card) => {
              return card.status === 1
            }).map((card) => {
              return(
                <Card id={card.id} title={card.title} assigned_to={this.findAssignedTo(card)} priority_id={card.priority} priority={this.findPriority(card)} prevStatus = {3} prevStatusPhrase={"Finished!"} nextStatus={2} nextStatusPhrase={"Begin Task"}/>
              );
            })
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cards: state.cards,
    users: state.users,
    priorities: state.priorities
  }
}

const ConnectedToDo = connect(
  mapStateToProps,
  null
)(ToDo);

export default ConnectedToDo;