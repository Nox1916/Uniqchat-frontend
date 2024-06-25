import React from 'react';
import { AppBar, Toolbar, Typography, Container, TextField, Button, makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#333', // Dark background color
  },
  toolbar: {
    justifyContent: 'center', // Center the content
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
    backgroundColor: '#f5f5f5',
    padding: theme.spacing(3),
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
    width: '100%',
    maxWidth: '400px',
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
        </Toolbar>
      </AppBar>
      <Container className={classes.container}>
        <form className={classes.form}>
          <TextField label="Username" variant="outlined" fullWidth />
          <TextField label="Password" type="password" variant="outlined" fullWidth />
          <Button variant="contained" color="primary" className={classes.button} fullWidth>
            Login
          </Button>
        </form>
      </Container>
    </>
  );
};

export default Login;
