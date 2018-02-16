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
          Boring Ideas
        </h2>
         <div id="to-do">
          {
            this.props.cards.filter((card) => {
              return card.status === 1
            }).map((card) => {
              return(
                <Card
                  id={card.id}
                  title={card.title}
                  image={card.photo_url}
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
    cards: state.cards
  }
}

const ConnectedToDo = connect(
  mapStateToProps,
  null
)(ToDo);

export default ConnectedToDo;