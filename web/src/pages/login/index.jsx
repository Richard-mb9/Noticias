import React, {useState} from 'react'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Alert from '@material-ui/lab/Alert';
import styles from './styles';
import Container from '@material-ui/core/Container';
import {signIn as login} from '../../integrations/login'

import {isAuthenticated} from '../../shared/utils'


export default function SignIn() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [alert, setAlert] = useState(false)

    const classes = styles();

    if(isAuthenticated()) window.location.href = "/"

    const handleUsername = (event)=>{
        setUsername(event.target.value)
    }

    const handlePassword = (event)=>{
        setPassword(event.target.value)
    }

    const signIn = async ()=>{
        const data = {
            username,
            password
        }
        try{
            setAlert(false)
            await login(data)
            window.location.href = "/"
        }
        catch(error){
            setAlert(true)
        }
        
    }

    return (
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
            <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
            Login
            </Typography>
            <form className={classes.form} noValidate>
            {alert && (<Alert severity="error">Credenciais incorretas</Alert>)}
            <TextField
                onChange={handleUsername}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="username"
                label="Email ou username"
                name="username"
                autoComplete="username"
                autoFocus
                value={username}
            />
            <TextField
                onChange={handlePassword}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
            />
            <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
            />
            <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.btnLogin}
                onClick={signIn}
            >
                Login
            </Button>
            </form>
        </div>
        </Container>
    );
}