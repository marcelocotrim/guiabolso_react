import {
  FETCH_CATEGORIES,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE
} from './types';
import axios from 'axios';

export const fetchCategoriesSuccess = (categories) => {
  return {
    type: FETCH_CATEGORIES_SUCCESS,
    payload: categories
  };
};

export const fetchCategoriesFailure = (error) => {
  return {
    type: FETCH_CATEGORIES_FAILURE,
    payload: error
  };
};

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
