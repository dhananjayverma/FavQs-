import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuoteOfTheDay } from '../../redux/actions/quoteActions';
import { Typography, Container, Paper } from '@material-ui/core';

const QuoteOfTheDay = () => {
  const dispatch = useDispatch();
  const { quoteOfTheDay } = useSelector((state) => state.quotes);

  useEffect(() => {
    dispatch(fetchQuoteOfTheDay());
  }, [dispatch]);

  return (
    <Container>
      <Typography variant="h4">Quote of the Day</Typography>
      {quoteOfTheDay && (
        <Paper style={{ padding: 20, marginTop: 20 }}>
          <Typography variant="h6">{quoteOfTheDay.body}</Typography>
          <Typography variant="subtitle1">- {quoteOfTheDay.author}</Typography>
        </Paper>
      )}
    </Container>
  );
};

export default QuoteOfTheDay;
