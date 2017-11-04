import { LOAD_CARDS, ADD_CARD, EDIT_CARD, DELETE_CARD } from '../actions/cards';

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
    case DELETE_CARD:
    console.log('action.cardData', action.cardData);

      let i = state.findIndex((card) => {
        return card.id === parseInt(action.cardData.id);
      });

      return [ ...(state.slice(0, i)), ...(state.slice((i + 1), state.length))];

    default:
      return state
  }
}

export default cards;