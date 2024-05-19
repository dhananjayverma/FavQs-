import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import QuoteOfTheDay from './components/Quotes/QuoteOfTheDay';
import SearchQuotes from './components/Quotes/SearchQuotes';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Profile from './components/Auth/Profile';
import { Container } from '@material-ui/core';

const App = () => {
  return (
    <Router>
      <Header />
      <Container style={{ marginTop: '20px' }}>
        <Switch>
          <Route path="/" exact component={QuoteOfTheDay} />
          <Route path="/search" component={SearchQuotes} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </Container>
      <Footer />
    </Router>
  );
};

export default App;
