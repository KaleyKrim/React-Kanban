import React, { Component } from 'react';
import './index.css';
import { connect } from 'react-redux';
import { loadCards } from '../../actions/cards';
import { loadUsers } from '../../actions/users';

import KanbanBoard from '../KanbanBoard';
import NewCardForm from '../NewCardForm';

class App extends Component {

  constructor(){
    super();

    this.state = {

    }
  }

  componentWillMount(){

    this.props.loadUsers();

  }


  componentDidMount(){
    console.log('componentMounted');

    this.props.loadCards();

  }

  render() {
    return (
      <div className="App">
        <NewCardForm />
        <KanbanBoard />
      </div>
    );
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
    loadCards: () => {
      dispatch(loadCards())
    },
    loadUsers: () => {
      dispatch(loadUsers())
    }
  }
}

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default ConnectedApp;