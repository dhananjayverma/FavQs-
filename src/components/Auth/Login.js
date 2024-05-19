import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/actions/authActions';
import { TextField, Button, Container, Typography } from '@material-ui/core';

const Login = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password })).then(() => {
      history.push('/');
    });
  };

  return (
    <Container>
      <Typography variant="h4">Login</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          required
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Login
        </Button>
      </form>
    </Container>
  );
};

export default Login;
