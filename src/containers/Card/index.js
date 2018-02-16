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

    this.upVote = this.upVote.bind(this);
    this.downVote = this.downVote.bind(this);
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleDeleteCard = this.handleDeleteCard.bind(this);

  }


  upVote(event){
    console.log(this.props);
    event.preventDefault();
    let card = {
      id: this.props.id
    }
    this.props.upVoteCard(card);
  }

  downVote(event){

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
      <div className="card-box">
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
                <input type="submit" class="button" value="OK!"/>
              </form>
          </div>
        : null }


          { this.state.showEdit ? null :
            <div>
              <CardDetails
                title={this.props.title}
                image={this.props.image}
                />


              <div className="vote-buttons">
                <div className="regress-button">
                  <form onSubmit={this.downVote}>
                     <input type="submit" class="button" value="Boring."/>
                  </form>
                </div>
                <div className="progress-button">
                  <form onSubmit={this.upVote}>
                     <input type="submit" class="button" value="Good idea!"/>
                  </form>
                </div>
              </div>
              <div className="points">
                { this.props.points} point{this.props.points === 1 || this.props.points === -1 ? null : "s" }
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