import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  container: {
    maxWidth: 800,
    display: 'flex',
    margin: 'auto',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const Register = (props) =>  {
  const classes = useStyles();

  const [email, setEmail] = useState('');
  const onChangeEmail = e => {
    setEmail(e.target.value);
  }

  const [password, setPassword] = useState('');
  const onChangePassword = e => {
    setPassword(e.target.value);
  }

  const [confirmPassword, setConfirmPassword] = useState('');
  const onChangeConfirmPassword = e => {
    setConfirmPassword(e.target.value);
  }

  const handleDataSubmit = async () => {
    const userInput = {
      email: email,
      password: password,
      confirmPassword: confirmPassword
    }
    try {
      const res = await axios.post('http://localhost:4000/create-user', userInput);
      if (res.status === 201) {
        props.history.push('/login');
      }
    }
    catch(err) {
      console.log(err);
    }
    
    console.log(email, password, confirmPassword);

  }

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        id="outlined-email-input"
        label="Email"
        className={classes.textField}
        type="email"
        name="email"
        autoComplete="email"
        margin="normal"
        variant="outlined"
        onChange={onChangeEmail}
      />
      <TextField
        id="outlined-password-input"
        label="Password"
        className={classes.textField}
        type="password"
        // autoComplete="current-password"
        margin="normal"
        variant="outlined"
        onChange={onChangePassword}
      />
      <TextField
        id="outlined-confirm-password-input"
        label="Confirm Password"
        className={classes.textField}
        type="password"
        // autoComplete="current-password"
        margin="normal"
        variant="outlined"
        onChange={onChangeConfirmPassword}
      />
      <Button 
        className={classes.button} 
        onClick={handleDataSubmit}
      >Valider</Button>
    </form>
  );
}

export default withRouter(Register);