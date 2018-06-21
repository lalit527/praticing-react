import * as actionTypes from '../actions';

const initialState = {
  results: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({id: new Date(), value: action.results})
      }
    case actionTypes.DELETE_RESULT:
      const updateArray = state.results.filter(result => result.id !== action.resultElId);
      return {
        ...state,
        results: updateArray
      }
  }

  return state;
};

export default reducer;