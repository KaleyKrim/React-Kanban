import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../../components/Card';

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
                <Card id={card.id} title={card.title} assigned_to={this.findAssignedTo(card)} priority={card.priority} prevStatus = {3} prevStatusPhrase={"Finished!! Yes!!"} nextStatus={2} nextStatusPhrase={"Begin Task"}/>
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
    users: state.users
  }
}

const ConnectedToDo = connect(
  mapStateToProps,
  null
)(ToDo);

export default ConnectedToDo;