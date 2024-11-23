// src/App.js

import React from 'react';
import UserList from './components/UserList';
import RoleList from './components/RoleList';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Container, Typography } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Blue
    },
    secondary: {
      main: '#ff9800', // Orange
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial',
    h4: {
      fontWeight: 700,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ paddingY: 4 }}>
        <Typography variant="h4" color="primary" gutterBottom>
          Role-Based Access Control Dashboard
        </Typography>
        <UserList />
        <RoleList />
      </Container>
    </ThemeProvider>
  );
}

export default App;
