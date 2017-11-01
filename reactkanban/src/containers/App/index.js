import React, { Component } from 'react';
import './index.css';
import { connect } from 'react-redux';
import { loadCards } from '../../actions/cards';
import { addCard } from '../../actions/cards';

import KanbanBoard from '../KanbanBoard';
import NewCardForm from '../NewCardForm';

class App extends Component {

  constructor(){
    super();

    this.state = {

    }
  }

  componentWillMount(){

  }


  componentDidMount(){
    console.log('componentMounted');
    console.log('this.props', this.props);


    this.props.loadCards();

  }

  render() {
    return (
      <div className="App">
        <KanbanBoard cards={ this.props.cards } />
        <NewCardForm />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cards: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadCards: () => {
      dispatch(loadCards())
    }
  }
}

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default ConnectedApp;