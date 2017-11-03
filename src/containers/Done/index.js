import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../../components/Card';

class Done extends Component {

  constructor(props){
    super(props);

    this.state = {
    }
  }

  render(){
    return (
      <div id="done">
        {
          this.props.cards.filter((card) => {
            return card.status === 3
          }).map((card) => {
            return(
              <Card id={card.id} title={card.title} assigned_to={card.assigned_to} priority={card.priority} prevStatus = {2} prevStatusPhrase={"Wait!! I want to keep working on this."} nextStatus={1} nextStatusPhrase={"Actually, nvm. Put this back on my to do list."}/>
            );
          })
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cards: state.cards
  }
}

const ConnectedDone = connect(
  mapStateToProps,
  null
)(Done);

export default ConnectedDone;