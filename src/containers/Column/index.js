import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../Card';

class Column extends Component {

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
      <div className="column">
        <h2>
          {this.props.headerText}
        </h2>
        <div className="card-column">
        {
          this.props.cards.filter((card) => {
            return card.status === this.props.status
          }).map((card) => {
            return(
              <Card
                id={card.id}
                title={card.title}
                image={card.photo_url}
                points={card.points}
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

const ConnectedColumn = connect(
  mapStateToProps,
  null
)(Column);

export default ConnectedColumn;