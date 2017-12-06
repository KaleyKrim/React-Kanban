const axios = require('axios');

export const LOAD_PRIORITIES = 'LOAD_PRIORITIES';

export const loadPriorities = () => {
  return function(dispatch){
    return axios.get('/api/priorities')
    .then( priorities => {
      dispatch({
        type: LOAD_PRIORITIES,
        priorities: priorities.data
      });
    });
  }
}