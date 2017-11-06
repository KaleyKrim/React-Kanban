import React, { Component } from 'react';
import './index.css';
import { connect } from 'react-redux';
import { loadCards } from '../../actions/cards';
import { loadUsers } from '../../actions/users';
import { loadPriorities } from '../../actions/priorities';

import KanbanBoard from '../../components/KanbanBoard';
import KanbanHeader from '../../components/KanbanHeader';

import NewCardForm from '../NewCardForm';

//Note to future Kaley: You need to have user registration and login routes in the backend, add authentication, a createdBy column in the cards model. also, sort columns by priority. Break some parts of NewCardForm & Card out into smaller components. And maybe organize back end routes.

class App extends Component {

  constructor(){
    super();

    this.state = {

    }
  }

  componentWillMount(){

    this.props.loadUsers();
    this.props.loadPriorities();

  }


  componentDidMount(){

    this.props.loadCards();

  }

  render() {
    return (
      <div className="App">
        <KanbanHeader />
        <NewCardForm />
        <KanbanBoard />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadCards: () => {
      dispatch(loadCards())
    },
    loadUsers: () => {
      dispatch(loadUsers())
    },
    loadPriorities: () => {
      dispatch(loadPriorities())
    }
  }
}

const ConnectedApp = connect(
  null,
  mapDispatchToProps
)(App)

export default ConnectedApp;