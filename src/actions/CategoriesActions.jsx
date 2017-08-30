// Ações para listagem de categorias

import {
  FETCH_CATEGORIES,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE
} from './types';
import axios from 'axios';

// Retorno com sucesso da API
export const fetchCategoriesSuccess = (categories) => {
  return {
    type: FETCH_CATEGORIES_SUCCESS,
    payload: categories
  };
};

// Retorno com erro da API
export const fetchCategoriesFailure = (error) => {
  return {
    type: FETCH_CATEGORIES_FAILURE,
    payload: error
  };
};

// Chamada da API para listagem
export const fetchCategories = () => {
  return dispatch => {
    dispatch({ type: FETCH_CATEGORIES });
    return axios.get('https://api.chucknorris.io/jokes/categories')
      .then(function (response) {
        dispatch(fetchCategoriesSuccess(response.data.sort()));
      })
      .catch(function (error) {
        dispatch(fetchCategoriesFailure(error));
      });
  };
};
