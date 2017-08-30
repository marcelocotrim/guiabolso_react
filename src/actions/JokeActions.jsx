// Ações para o detalhe de uma "joke" aleatória

import {
  FETCH_JOKE,
  FETCH_JOKE_SUCCESS,
  FETCH_JOKE_FAILURE,
  RESET_JOKE_PAGE
} from './types';
import axios from 'axios';

// Retorno com sucesso da API
export const fetchJokeSuccess = (joke) => {
  return {
    type: FETCH_JOKE_SUCCESS,
    payload: joke
  };
};

// Retorno com erro da API
export const fetchJokeFailure = (error) => {
  return {
    type: FETCH_JOKE_FAILURE,
    payload: error
  };
};

// Chamada da API para o detalhe
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

// Reset dos campos da página do detalhe
export const resetJokePage = () => {
  return {
    type: RESET_JOKE_PAGE
  };
};
