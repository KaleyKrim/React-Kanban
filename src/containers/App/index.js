import React, { Component } from 'react';
import './index.css';
import { connect } from 'react-redux';
import { loadCards } from '../../actions/cards';
import { loadUsers } from '../../actions/users';
import { loadPriorities } from '../../actions/priorities';

import KanbanBoard from '../KanbanBoard';
import NewCardForm from '../NewCardForm';
import KanbanHeader from '../../components/KanbanHeader';

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
    console.log('componentMounted');

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

// const mapStateToProps = (state) => {
//   return {
//     users: state.users,
//     cards: state.cards,
//     priorities: state.priorities
//   }
// }

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