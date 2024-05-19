import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchForQuotes } from '../../redux/actions/quoteActions';
import { TextField, Button, Container, Grid } from '@material-ui/core';
import QuoteCard from './QuoteCard';

const SearchQuotes = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const { searchResults } = useSelector((state) => state.quotes);

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchForQuotes(query));
  };

  return (
    <Container>
      <form onSubmit={handleSearch}>
        <TextField
          label="Search Quotes"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          fullWidth
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Search
        </Button>
      </form>
      <Grid container spacing={3} style={{ marginTop: 20 }}>
        {searchResults.map((quote) => (
          <Grid item xs={12} sm={6} md={4} key={quote.id}>
            <QuoteCard quote={quote} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default SearchQuotes;
