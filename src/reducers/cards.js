import { LOAD_CARDS, ADD_CARD, EDIT_CARD } from '../actions/cards';

const initialState = [ ];

const cards = (state = initialState, action) => {
  switch(action.type){
    case LOAD_CARDS:
      return [ ...action.cards ];
    case ADD_CARD:
      return [ ...state, action.card ];
    case EDIT_CARD:

    console.log(state);

    let index = state.findIndex((card) => {
      return card.id === action.card[1].id
    });

      console.log('action.card', action.card[1]);
      console.log('stateindex', state[index]);


      console.log(index);

      return [ ...(state.slice(0, index)), ...(state.slice((index + 1), state.length)), action.card[1]];
    default:
      return state
  }
}

export default cards;