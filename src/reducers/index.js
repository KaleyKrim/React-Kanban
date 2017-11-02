import { LOAD_CARDS, ADD_CARD } from '../actions/cards';

const initialState = [ ];

const reducers = (state = initialState, action) => {
  switch(action.type){
    case LOAD_CARDS:
      return [ ...action.cards ];
    case ADD_CARD:
      return [ ...state, action.card ];
    default:
      return state
  }
}

export default reducers;