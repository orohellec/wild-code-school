import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
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

const Login = (props) =>  {
  
  const classes = useStyles();
  
  const [email, setEmail] = useState('');
  const onChangeEmail = e => {
    setEmail(e.target.value);
  }

  const [password, setPassword] = useState('');
  const onChangePassword = e => {
    setPassword(e.target.value);
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
      <Button 
        className={classes.button} 
        onClick={e => {
            props.onLogin(e, 
              {
                email: email, 
                password: password
              }
            )
          }
        }
      >Valider</Button>
    </form>
  );
}

export default withRouter(Login);