import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../Card';

class Done extends Component {

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
          Done
        </h2>
        <div id="done">
          {
            this.props.cards.filter((card) => {
              return card.status === 3
            }).map((card) => {
              return(
                <Card
                  id={card.id}
                  title={card.title}
                />
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

const ConnectedDone = connect(
  mapStateToProps,
  null
)(Done);

export default ConnectedDone;