import {
  FETCH_JOKE,
  FETCH_JOKE_SUCCESS,
  FETCH_JOKE_FAILURE,
  RESET_JOKE_PAGE
} from './types';
import axios from 'axios';

export const fetchJokeSuccess = (joke) => {
  return {
    type: FETCH_JOKE_SUCCESS,
    payload: joke
  };
};

export const fetchJokeFailure = (error) => {
  return {
    type: FETCH_JOKE_FAILURE,
    payload: error
  };
};

export const fetchJoke = (category) => {
  return dispatch => {
    dispatch({ type: FETCH_JOKE });
    return axios.get('https://api.chucknorris.io/jokes/random?category=' + category)
      .then(function (response) {
        dispatch(fetchJokeSuccess(response.data));
      })
      .catch(function (error) {
        dispatch(fetchJokeFailure(error));
      });
  };
};

export const resetJokePage = () => {
  return {
    type: RESET_JOKE_PAGE
  };
};
