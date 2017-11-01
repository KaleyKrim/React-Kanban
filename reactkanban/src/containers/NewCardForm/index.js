import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addCard } from '../../actions/cards.js';

class NewCardForm extends Component {

  constructor(props){
    super(props);

    this.state = {
      title: ''
    }
  }

  handleChangeTitle(event){
    this.setState({
      title: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault();

    let newCard = this.state;

    this.props.addCard(newCard);

  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" value={this.state.title} placeholder="title" onChange={this.handleChangeTitle.bind(this)}/>
          <input type="submit" value="add task"/>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCard: (card) => {
      dispatch(addCard(card))
    }
  }
}

const ConnectedNewCardForm = connect(
  null,
  mapDispatchToProps
)(NewCardForm);

export default ConnectedNewCardForm;