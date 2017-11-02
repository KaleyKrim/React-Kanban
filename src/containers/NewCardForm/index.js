import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addCard } from '../../actions/cards.js';

class NewCardForm extends Component {

  constructor(props){
    super(props);

    this.state = {
      title: '',
      priority: '',
      assignedTo: ''
    }
  }

  handleChangeTitle(event){
    this.setState({
      title: event.target.value
    })
  }

  handleChangePriority(event){
    this.setState({
      priority: event.target.value
    })
  }

  handleChangeAssigned(event){
    this.setState({
      assignedTo: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault();

    let newCard = {
      title: this.state.title,
      priority: this.state.priority,
      assignedTo: this.state.assignedTo
    };

    this.props.addCard(newCard);

    // this.setState({
    //   title: '',
    //   priority: '',
    //   assignedTo: ''
    // })

  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" value={this.state.title} placeholder="title" onChange={this.handleChangeTitle.bind(this)}/>
          <select name="priority" onChange={this.handleChangePriority.bind(this)}>
            <option value="1">High</option>
            <option value="2">Medium</option>
            <option value="3">Low</option>
          </select>

          <select name="user" onChange={this.handleChangeAssigned.bind(this)}>
            <option value="1">High</option>
            <option value="2">Medium</option>
            <option value="3">Low</option>
          </select>

          <input type="text" value={this.state.assignedTo} placeholder="assigned_to" onChange={this.handleChangeAssigned.bind(this)}/>
          <input type="submit" value="add task"/>
        </form>
      </div>
    )
  }
}

///// <input type="text" value={this.state.priority} placeholder="priority" onChange={this.handleChangePriority.bind(this)}/>

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