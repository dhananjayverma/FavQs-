import React from 'react';
import { Container, Typography } from '@material-ui/core';

const Footer = () => {
  return (
    <Container style={{ textAlign: 'center', marginTop: '20px' }}>
      <Typography variant="body2" color="textSecondary">
        © 2024 My Quotes App
      </Typography>
    </Container>
  );
};

export default Footer;
