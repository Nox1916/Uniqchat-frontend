import React from 'react';
import { AppBar, Toolbar, Typography, Box, Container, TextField, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#333', // Dark background color for the AppBar
  },
  toolbar: {
    justifyContent: 'space-between', // Space between the title and button
    padding: theme.spacing(2), // Add some padding
  },
  title: {
    color: 'teal', // Color of the text
    fontFamily: 'Arial, sans-serif', // Custom font
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#333', // Set the background color to dark grey
    color: 'white', // Text color for contrast
    padding: theme.spacing(3),
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
    width: '100%',
    maxWidth: '400px',
  },
  textField: {
    '& .MuiInputBase-root': {
      color: 'white', // Text color of input fields
    },
    '& .MuiFormLabel-root': {
      color: 'white', // Text color of labels
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: 'white', // Border color of inputs
    },
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

const Login = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h3" className={classes.title}>
            Uniq Chat
          </Typography>
          <Button color="inherit">Sign in</Button>
        </Toolbar>
      </AppBar>
      <Container className={classes.container}>
        <form className={classes.form}>
          <TextField
            className={classes.textField}
            label="Username"
            variant="outlined"
            fullWidth
            InputLabelProps={{ className: classes.textField }}
          />
          <TextField
            className={classes.textField}
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            InputLabelProps={{ className: classes.textField }}
          />
          <Button variant="contained" color="primary" className={classes.button} fullWidth>
            Login
          </Button>
        </form>
      </Container>
    </>
  );
};

export default Login;
