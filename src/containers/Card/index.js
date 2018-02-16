import React, { Component } from 'react';
import { connect } from 'react-redux';

import CardDetails from '../../components/CardDetails.js';
import Select from '../../components/Select';

import { editCard, upVoteCard, downVoteCard, deleteCard } from '../../actions/cards.js';

class Card extends Component {

  constructor(props){
    super(props);

    this.state = {
      showEdit: false,
      title: '',
      priority: '',
      assignedTo: ''
    }

    this.makeProgress = this.makeProgress.bind(this);
    this.backToPrevious = this.backToPrevious.bind(this);
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangePriority = this.handleChangePriority.bind(this);
    this.handleChangeAssigned = this.handleChangeAssigned.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleDeleteCard = this.handleDeleteCard.bind(this);

  }


  makeProgress(event){

    event.preventDefault();
    let card = {
      id: this.props.id
    }
    this.props.upVoteCard(card);
  }

  backToPrevious(event){

    event.preventDefault();
    let card = {
      id: this.props.id
    }
    this.props.downVoteCard(card);
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

  handleDeleteCard(event){
    event.preventDefault();

    let card = {
      id: this.props.id
    }

    this.props.deleteCard(card);
  }

  toggleEdit(event){
    event.preventDefault();

    if(!this.state.showEdit){
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
          <input type="Submit" value="Edit" class="button" onClick={this.toggleEdit}/>
        </div>

        <div className="delete-button">
          <form onSubmit={this.handleDeleteCard}>
             <input type="Submit" class="button" value="x" />
          </form>
        </div>

        <div className="card-content">

          { this.state.showEdit ?
            <div className="edit-form">
              <br />
              <br />
              <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.title} placeholder={this.props.title} onChange={this.handleChangeTitle}/>
                <Select name="user" label="Assign to" handler={this.handleChangeAssigned} list={this.props.users} show="name"/>
                <Select name="priority" label="Priority" handler={this.handleChangePriority} list={this.props.priorities} show="title"/>
                <input type="submit" class="button" value="OK!"/>
              </form>
          </div>
        : null }


          { this.state.showEdit ? null :
            <div>
              <CardDetails title={this.props.title} assigned_to={this.props.assigned_to} priority={this.props.priority}/>

              <div className="progress-button">
                <form onSubmit={this.makeProgress}>
                   <input type="submit" class="button" value={ this.props.nextStatusPhrase }/>
                </form>
              </div>
              <div className="regress-button">
                <form onSubmit={this.backToPrevious}>
                   <input type="submit" class="button" value={ this.props.prevStatusPhrase }/>
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
    cards: state.cards
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editCard: (card) => {
      dispatch(editCard(card))
    },
    upVoteCard: (card) => {
      dispatch(upVoteCard(card))
    },
    downVoteCard: (card) => {
      dispatch(downVoteCard(card))
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