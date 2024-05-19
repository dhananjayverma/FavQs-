import { GET_QUOTE_OF_THE_DAY, SEARCH_QUOTES, FAVORITE_QUOTE, UNFAVORITE_QUOTE, HIDE_QUOTE } from '../actions/types';

const initialState = {
  quoteOfTheDay: null,
  searchResults: [],
  favorites: [],
  hidden: [],
};

const quoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_QUOTE_OF_THE_DAY:
      return {
        ...state,
        quoteOfTheDay: action.payload.quote,
      };
    case SEARCH_QUOTES:
      return {
        ...state,
        searchResults: action.payload.quotes,
      };
    case FAVORITE_QUOTE:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case UNFAVORITE_QUOTE:
      return {
        ...state,
        favorites: state.favorites.filter((quote) => quote.id !== action.payload.id),
      };
    case HIDE_QUOTE:
      return {
        ...state,
        hidden: [...state.hidden, action.payload],
      };
    default:
      return state;
  }
};

export default quoteReducer;
