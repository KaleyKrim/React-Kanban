import React, { Component } from 'react';
import { connect } from 'react-redux';

import { editCard } from '../actions/cards.js';

class Card extends Component {

  constructor(props){
    super(props);

    this.state = {
      id: this.props.id,
      status: ''
    }
  }

  makeProgress(event){

    event.preventDefault();
    let newInfo = {
      id: this.state.id,
      status: this.props.nextStatus
    };
    this.props.editCard(newInfo);
  }

  backToPrevious(event){

    event.preventDefault();
    let newInfo = {
      id: this.state.id,
      status: this.props.prevStatus
    };
    this.props.editCard(newInfo);
  }

  // handleChangeStatus(event){
  //   console.log(event.target.value);
  //   this.setState({
  //     id: this.props.id,
  //     status: event.target.value
  //   })
  // }



  render(){
    return (
      <div className="card">
        <br />
        { this.props.title }
        <br />
        Assigned to: { this.props.assigned_to }
        <br />
        Priority: { this.props.priority }
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
    }
  }
}

const ConnectedCard = connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);

export default ConnectedCard;