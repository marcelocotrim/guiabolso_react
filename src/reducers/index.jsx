import { combineReducers } from 'redux';
import CategoriesReducer from './CategoriesReducer';
import JokeReducer from './JokeReducer';

export default combineReducers({
  categoriesReducer: CategoriesReducer,
  jokeReducer: JokeReducer
});
