import React, { Component } from 'react';
import { connect } from 'react-redux';

import { editCard, deleteCard } from '../actions/cards.js';

class Card extends Component {

  constructor(props){
    super(props);

    this.state = {

    }
  }

  makeProgress(event){

    event.preventDefault();
    let newInfo = {
      id: this.props.id,
      status: this.props.nextStatus
    };
    this.props.editCard(newInfo);
  }

  backToPrevious(event){

    event.preventDefault();
    let newInfo = {
      id: this.props.id,
      status: this.props.prevStatus
    };
    this.props.editCard(newInfo);
  }

  handleDeleteCard(event){
    event.preventDefault();

    let card = {
      id: this.props.id
    }

    this.props.deleteCard(card);
  }


  render(){
    return (
      <div className={ 'card_' + this.props.priority_id }>
        <div className="delete-button">
          <form onSubmit={this.handleDeleteCard.bind(this)}>
             <input type="Submit" value="X" />
          </form>
        </div>
        <div className="card-title">
          <br />
          { this.props.title }
        </div>

        <div className="card-details">
          <br />
          Assigned to: { this.props.assigned_to }
          <br />
          Priority: { this.props.priority }
        </div>
        <br />
        <form onSubmit={this.makeProgress.bind(this)}>
           <input type="submit" value={ this.props.nextStatusPhrase }/>
        </form>
        <form onSubmit={this.backToPrevious.bind(this)}>
           <input type="submit" value={ this.props.prevStatusPhrase }/>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cards: state.cards
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editCard: (card) => {
      dispatch(editCard(card))
    },
    deleteCard: (card) => {
      dispatch(deleteCard(card))
    }
  }
}

const ConnectedCard = connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);

export default ConnectedCard;