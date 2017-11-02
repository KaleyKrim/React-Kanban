const axios = require('axios');

export const LOAD_CARDS = 'LOAD_CARDS';
export const ADD_CARD = 'ADD_CARD';

export const loadCards = () => {
  return function(dispatch){
    return axios.get('/api/cards')
    .then( cards => {
      dispatch({
        type: LOAD_CARDS,
        cards: cards.data
      });
    });
  }
}

export const addCard = (newCard) => {
  return function(dispatch){
    return axios.post('/api/cards', newCard)
    .then( card => {
      console.log(card);
      dispatch({
        type: ADD_CARD,
        card: card.data
      });
    });
  }
}