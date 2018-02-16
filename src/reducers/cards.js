import { LOAD_CARDS, ADD_CARD, EDIT_CARD, UPVOTE_CARD, DOWNVOTE_CARD, DELETE_CARD } from '../actions/cards';

const initialState = [ ];

const cards = (state = initialState, action) => {
  switch(action.type){
    case LOAD_CARDS:
      return [ ...action.cards ];
    case ADD_CARD:
      return [ ...state, action.card ];
    case EDIT_CARD:
      let index = state.findIndex((card) => {
        return card.id === action.card[1].id
      });
      return [ ...(state.slice(0, index)), action.card[1], ...(state.slice((index + 1), state.length))];
    case UPVOTE_CARD:
      let ind = state.findIndex((card) => {
        return card.id === action.card[1].id
      });
      return [ ...(state.slice(0, ind)), action.card[1], ...(state.slice((ind + 1), state.length))];
    case DOWNVOTE_CARD:
      let idx = state.findIndex((card) => {
        return card.id === action.card[1].id
      });
      return [ ...(state.slice(0, idx)), action.card[1], ...(state.slice((idx + 1), state.length))];
    case DELETE_CARD:
      let i = state.findIndex((card) => {
        return card.id === parseInt(action.card.id, 0);
      });
      return [ ...(state.slice(0, i)), ...(state.slice((i + 1), state.length))];

    default:
      return state
  }
}

export default cards;