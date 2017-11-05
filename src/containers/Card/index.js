import React, { Component } from 'react';
import { connect } from 'react-redux';

import CardDetails from '../../components/CardDetails.js';

import { editCard, deleteCard } from '../../actions/cards.js';

class Card extends Component {

  constructor(props){
    super(props);

    this.state = {
      showEdit: false,
      title: '',
      priority: '',
      assignedTo: ''
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
      title: this.state.title || this.props.title,
      priority: this.state.priority || 1,
      assignedTo: this.state.assignedTo || 1
    };

    this.props.editCard(newInfo);

    this.setState({
      showEdit: false,
      title: ''
    })
  }

  toggleEdit(event){
    event.preventDefault();

    if(this.state.showEdit === false){
      this.setState({
        showEdit: true
      })
    }else{
      this.setState({
        showEdit: false
      })
    }

  }


  render(){
    return (
      <div className={ 'card_' + this.props.priority_id }>

        <div className="edit-button">
          <input type="Submit" value="Edit" onClick={this.toggleEdit.bind(this)}/>
        </div>

        <div className="delete-button">
          <form onSubmit={this.handleDeleteCard.bind(this)}>
             <input type="Submit" value="X" />
          </form>
        </div>

        <div className="card-content">

          { this.state.showEdit ?
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
        : null }


          { this.state.showEdit ? null :
            <div>
              <CardDetails title={this.props.title} assigned_to={this.props.assigned_to} priority={this.props.priority}/>

              <div className="progress-button">
                <form onSubmit={this.makeProgress.bind(this)}>
                   <input type="submit" value={ this.props.nextStatusPhrase }/>
                </form>
              </div>
              <div className="regress-button">
                <form onSubmit={this.backToPrevious.bind(this)}>
                   <input type="submit" value={ this.props.prevStatusPhrase }/>
                </form>
              </div>
            </div>
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