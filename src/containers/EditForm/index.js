import React, { Component } from 'react';
import { connect } from 'react-redux';

import { editCard } from '../../actions/cards.js';

class EditForm extends Component {
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

    let newInfo = {
      id: this.props.id,
      title: this.state.title,
      priority: this.state.priority || 1,
      assignedTo: this.state.assignedTo || 1
    };

    this.props.editCard(newInfo);

    this.setState({
      title: ''
    })
  }

  render(){
    return (
      <div className="edit-form">

      <form onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" value={this.state.title} placeholder={this.props.title} onChange={this.handleChangeTitle.bind(this)}/>
        <select name="priority" onChange={this.handleChangePriority.bind(this)}>
            <option value="1">High</option>
            <option value="2">Medium</option>
            <option value="3">Low</option>
          </select>

        <select name="user" onChange={this.handleChangeAssigned.bind(this)}>
          {
            this.props.users.map((user) => {
              return(
                <option value={user.id}> {user.name} </option>
              );
            })
          }
        </select>
        <input type="submit" value="Edit Task"/>
      </form>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editCard: (card) => {
      dispatch(editCard(card))
    }
  }
}

const ConnectedEditForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditForm);

export default ConnectedEditForm;