import { LOAD_CARDS, ADD_CARD, EDIT_CARD } from '../actions/cards';

const initialState = [ ];

const cards = (state = initialState, action) => {
  switch(action.type){
    case LOAD_CARDS:
      return [ ...action.cards ];
    case ADD_CARD:
      return [ ...state, action.card ];
    case EDIT_CARD:
      return [ ...action.cards ];
    default:
      return state
  }
}

export default cards;