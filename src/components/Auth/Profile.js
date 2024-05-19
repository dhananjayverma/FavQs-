import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProfile, updateUserProfile } from '../../redux/actions/authActions';
import { TextField, Button, Container, Typography } from '@material-ui/core';

const Profile = () => {
  const dispatch = useDispatch();
  const { user, token } = useSelector((state) => state.auth);
  const [email, setEmail] = useState(user?.email || '');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (token) {
      dispatch(fetchProfile(token));
    }
  }, [dispatch, token]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUserProfile({ email, password }, token));
  };

  return (
    <Container>
      <Typography variant="h4">Profile</Typography>
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
        />
        <Button type="submit" variant="contained" color="primary">
          Update
        </Button>
      </form>
    </Container>
  );
};

export default Profile;
