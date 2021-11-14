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
import { signUp, created } from '../../features/authSlice';
import { selectError, clearError } from '../../features/errorSlice';
import { useDispatch, useSelector } from 'react-redux';
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

const RegisterPage = () => {
    const classes = useStyles();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState(null);
    const error = useSelector(selectError);
    const isCreated = useSelector(created);
    const handleChangeFirstName = (e) => setFirstName(e.target.value);
    const handleChangeLastName = (e) => setLastName(e.target.value);
    const handleChangeUsername = (e) => setUsername(e.target.value);
    const handleChangeEmail = (e) => setEmail(e.target.value);
    const handleChangePassword = (e) => setPassword(e.target.value);

    const dispatch = useDispatch();

    useEffect(() => {
        function handleStatusChange() {
            if (error.id === 'REGISTER_FAIL') {
                setMsg(error.message.msg);
            } else {
                setMsg(null);
            }
        }
        handleStatusChange();
    }, [error.id, error.message.msg, msg]);

    useEffect(() => {
        return () => {
            console.log('unmounted');
            dispatch(clearError());
        };
    }, [dispatch]);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log('here');
        // Create user object
        const user = {
            firstName,
            lastName,
            username,
            email,
            password,
        };
        // Attempt to login
        dispatch(signUp(user));
    };

    return (
        <div className="login">
            {isCreated && <Redirect to={{ pathname: '/' }} />}
            <Snackbar open={msg !== null} autoHideDuration={3000}>
                <Alert severity="error">{msg}</Alert>
            </Snackbar>

            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <form onSubmit={handleOnSubmit} autoComplete="off">
                        <Grid container direction="column" justify="space-evenly" spacing={1}>
                            <Grid item xs={12}>
                                <Box width={1}>
                                    <Typography variant="h6" display="block" gutterBottom>
                                        REGISTER
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField style={{ width: '90%' }} id="standard-basic" label="First Name" value={firstName} onChange={handleChangeFirstName} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField style={{ width: '90%' }} id="standard-basic" label="Last Name" value={lastName} onChange={handleChangeLastName} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField style={{ width: '90%' }} id="standard-basic" label="Username" value={username} onChange={handleChangeUsername} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField style={{ width: '90%' }} id="standard-basic" label="Email" value={email} onChange={handleChangeEmail} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField style={{ width: '90%' }} id="standard-basic" label="Password" value={password} onChange={handleChangePassword} type="password" />
                            </Grid>
                            {/* <Grid item xs={12}>
                <TextField
                  style={{ width: '90%' }}
                  id="standard-basic"
                  label="Confirm Password"
                />
              </Grid> */}
                            <Grid item xs={12}>
                                <Button type="submit" variant="contained" color="secondary" style={{ marginTop: '20px' }}>
                                    Register
                                </Button>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography paragraph>
                                    Already have an account? <Link to="/login"> Login </Link>
                                </Typography>
                            </Grid>
                        </Grid>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default RegisterPage;
