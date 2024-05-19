import { getQuoteOfTheDay, searchQuotes, favoriteQuote, unfavoriteQuote, hideQuote } from '../../api/favqs';
import { GET_QUOTE_OF_THE_DAY, SEARCH_QUOTES, FAVORITE_QUOTE, UNFAVORITE_QUOTE, HIDE_QUOTE } from './types';

export const fetchQuoteOfTheDay = () => async (dispatch) => {
  try {
    const { data } = await getQuoteOfTheDay();
    dispatch({ type: GET_QUOTE_OF_THE_DAY, payload: data });
  } catch (error) {
    console.error(error);
  }
};

export const searchForQuotes = (query) => async (dispatch) => {
  try {
    const { data } = await searchQuotes(query);
    dispatch({ type: SEARCH_QUOTES, payload: data });
  } catch (error) {
    console.error(error);
  }
};

export const favoriteAQuote = (id, token) => async (dispatch) => {
  try {
    const { data } = await favoriteQuote(id, token);
    dispatch({ type: FAVORITE_QUOTE, payload: data });
  } catch (error) {
    console.error(error);
  }
};

export const unfavoriteAQuote = (id, token) => async (dispatch) => {
  try {
    const { data } = await unfavoriteQuote(id, token);
    dispatch({ type: UNFAVORITE_QUOTE, payload: data });
  } catch (error) {
    console.error(error);
  }
};

export const hideAQuote = (id, token) => async (dispatch) => {
  try {
    const { data } = await hideQuote(id, token);
    dispatch({ type: HIDE_QUOTE, payload: data });
  } catch (error) {
    console.error(error);
  }
};
