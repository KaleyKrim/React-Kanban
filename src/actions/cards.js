const axios = require('axios');

export const LOAD_CARDS = 'LOAD_CARDS';
export const ADD_CARD = 'ADD_CARD';
export const EDIT_CARD = 'EDIT_CARD';
export const UPVOTE_CARD = 'UPVOTE_CARD';
export const DOWNVOTE_CARD = 'DOWNVOTE_CARD';
export const DELETE_CARD = 'DELETE_CARD';

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

export const editCard = (newInfo) => {
  return function(dispatch){
    return axios.put(`/api/card/${newInfo.id}`, newInfo)
    .then( card => {
      dispatch({
        type: EDIT_CARD,
        card: card.data
      });
    });
  }
}

export const upVoteCard = (card) => {
  return function(dispatch){
    return axios.put(`/api/card/${card.id}/upvote`)
    .then( card => {
      dispatch({
        type: UPVOTE_CARD,
        card: card.data
      });
    });
  }
}

export const downVoteCard = (card) => {
  return function(dispatch){
    return axios.put(`/api/card/${card.id}/downvote`)
    .then( card => {
      dispatch({
        type: DOWNVOTE_CARD,
        card: card.data
      });
    });
  }
}

export const deleteCard = (cardToDelete) => {
  return function(dispatch){
    return axios.delete(`/api/card/${cardToDelete.id}`)
    .then( card => {
      dispatch({
        type: DELETE_CARD,
        card: card.data
      });
    });
  }
}