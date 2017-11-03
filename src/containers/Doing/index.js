import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../../components/Card';

class Doing extends Component {

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
          Doing
        </h2>
        <div id="doing">
        {
          this.props.cards.filter((card) => {
            return card.status === 2
          }).map((card) => {
            return(
              <Card id={card.id} title={card.title} assigned_to={this.findAssignedTo(card)} priority={card.priority} prevStatus = {1} prevStatusPhrase={"Nvm. Not in the mood to work on this anymore."} nextStatus={3} nextStatusPhrase={"Finished!"}/>
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

const ConnectedDoing = connect(
  mapStateToProps,
  null
)(Doing);

export default ConnectedDoing;