import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { favoriteAQuote, unfavoriteAQuote, hideAQuote } from '../../redux/actions/quoteActions';
import { Card, CardContent, CardActions, Button, Typography } from '@material-ui/core';

const QuoteCard = ({ quote }) => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  const handleFavorite = () => {
    if (quote.favorited) {
      dispatch(unfavoriteAQuote(quote.id, token));
    } else {
      dispatch(favoriteAQuote(quote.id, token));
    }
  };

  const handleHide = () => {
    dispatch(hideAQuote(quote.id, token));
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{quote.body}</Typography>
        <Typography variant="subtitle1">- {quote.author}</Typography>
      </CardContent>
      <CardActions>
        <Button onClick={handleFavorite} color="primary">
          {quote.favorited ? 'Unfavorite' : 'Favorite'}
        </Button>
        <Button onClick={handleHide} color="secondary">
          Hide
        </Button>
      </CardActions>
    </Card>
  );
};

export default QuoteCard;
