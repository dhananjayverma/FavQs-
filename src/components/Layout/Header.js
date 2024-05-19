import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../redux/actions/authActions';

const Header = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          My Quotes App
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        {user ? (
          <>
            <Button color="inherit" component={Link} to="/profile">
              Profile
            </Button>
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          </>
        ) : (
          <>
            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
            <Button color="inherit" component={Link} to="/register">
              Register
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
