import React, { Component } from 'react';
import { connect } from 'react-redux';

import { editCard } from '../actions/cards.js';

class Card extends Component {

  constructor(props){
    super(props);

    this.state = {
      id: '',
      status: ''
    }
  }

  handleChangeStatus(event){
    console.log(event.target.value);
    this.setState({
      id: this.props.id,
      status: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault();

    let newInfo = {
      id: this.state.id,
      status: this.state.status
    };

    this.props.editCard(newInfo);

  }



  render(){
    return (
      <div className="card">
        <br />
        { this.props.title }
        <br />
        Assigned to: { this.props.assigned_to }
        <br />
        Priority: { this.props.priority }
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" value={this.state.status} placeholder="status" onChange={this.handleChangeStatus.bind(this)}/>
           <input type="submit" value="edit task"/>
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