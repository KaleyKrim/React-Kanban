import { LOAD_CARDS, ADD_CARD } from '../actions/cards';

const initialState = [ {id:1, title: 'Study Redux'}, {id:2, title: 'Sleep'} ];

const reducers = (state = initialState, action) => {
  switch(action.type){
    case LOAD_CARDS:
      return state;
    case ADD_CARD:
      return [ ...state, action.card ];
    default:
      return state
  }
}

export default reducers;