import {
  FETCH_JOKE,
  FETCH_JOKE_SUCCESS,
  FETCH_JOKE_FAILURE,
  RESET_JOKE_PAGE
} from '../actions/types';

const INITIAL_STATE = {
  joke: null,
  error: null,
  isLoading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_JOKE:
      return {
        ...state,
        error: null,
        isLoading: true
      };
    case FETCH_JOKE_SUCCESS:
      return {
        ...state,
        joke: action.payload,
        error: null,
        isLoading: false
      };
    case FETCH_JOKE_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case RESET_JOKE_PAGE:
      return INITIAL_STATE
    default:
      return state;
  }
};
