import React, { Component } from 'react';
import { connect } from 'react-redux';

import CardDetails from '../../components/CardDetails.js';
import EditForm from '../EditForm';

import { editCard, deleteCard } from '../../actions/cards.js';

class Card extends Component {

  constructor(props){
    super(props);

    this.state = {
      showEdit: false
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

  handleEditCard(event){
    event.preventDefault();

    let card = {
      id: this.props.id
    }
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
          { this.state.showEdit ? <EditForm id={this.props.id} title={this.props.title} assigned_to={this.props.assigned_to} priority={this.props.priority} /> : null }
          { this.state.showEdit ? null : <CardDetails title={this.props.title} assigned_to={this.props.assigned_to} priority={this.props.priority}/> }
        </div>

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