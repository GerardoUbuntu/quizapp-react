import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { signIn } from '../../features/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { authenticated, authMessage, clearMessage } from '../../features/authSlice';
import { selectError, clearError } from '../../features/errorSlice';
import { Redirect } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '400px',
        width: '80%',
    },
}));

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const LoginPage = () => {
    const classes = useStyles();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeEmail = (e) => setEmail(e.target.value);
    const handleChangePassword = (e) => setPassword(e.target.value);
    const dispatch = useDispatch();
    const authMsg = useSelector(authMessage);
    const [msg, setMsg] = useState(null);
    const [open, setOpen] = useState(false);
    const error = useSelector(selectError);

    const handleOnSubmit = (e) => {
        e.preventDefault();

        const user = { email, password };
        // Attempt to login
        dispatch(signIn(user));
        setEmail('');
        setPassword('');
    };

    const isAuthenticated = useSelector(authenticated);

    useEffect(() => {
        function handleStatusChange() {
            if (error.id === 'LOGIN_FAIL') {
                setMsg(error.message.msg);
                setOpen(true);
            } else if (authMsg) {
                setMsg(authMsg);
                setOpen(true);
            } else {
                setOpen(false);
                setMsg(null);
            }
        }
        handleStatusChange();
    }, [error.id, error.message.msg, msg, authMsg]);

    console.log(msg !== null);
    return (
        <div className="login">
            {isAuthenticated && <Redirect to={{ pathname: '/' }} />}
            <Snackbar
                open={open}
                autoHideDuration={2000}
                onClose={() => {
                    dispatch(clearError());
                    dispatch(clearMessage());
                    setOpen(false);
                }}
            >
                {msg && <Alert severity={authMsg ? 'success' : 'error'}>{msg}</Alert>}
            </Snackbar>

            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <form noValidate autoComplete="off">
                        <Grid container direction="column" justify="space-evenly" spacing={1}>
                            <Grid>
                                <Grid item xs={12}>
                                    <Box width={1}>
                                        <Typography variant="h6" display="block" gutterBottom>
                                            LOGIN
                                        </Typography>
                                    </Box>
                                </Grid>
                            </Grid>

                            <Grid item xs={12}>
                                <TextField style={{ width: '90%' }} id="standard-basic" label="Email" value={email} onChange={handleChangeEmail} />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField style={{ width: '90%' }} id="standard-basic" label="Password" type="password" value={password} onChange={handleChangePassword} />
                            </Grid>
                            <Grid item xs={12}>
                                <Button variant="contained" color="secondary" style={{ marginTop: '20px' }} value="submit" onClick={handleOnSubmit}>
                                    Login
                                </Button>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography paragraph>
                                    Not registered? <Link to="/register"> Create an account </Link>
                                </Typography>
                            </Grid>
                        </Grid>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default LoginPage;
