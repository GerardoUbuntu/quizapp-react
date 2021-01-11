import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '400px',
    width: '80%',
  },
}));

const RegisterPage = () => {
  const classes = useStyles();

  return (
    <div className="login">
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <form noValidate autoComplete="off">
            <Grid
              container
              direction="column"
              justify="space-evenly"
              spacing={1}
            >
              <Grid item xs={12}>
                <Box width={1}>
                  <Typography variant="h6" display="block" gutterBottom>
                    REGISTER
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  style={{ width: '90%' }}
                  id="standard-basic"
                  label="First Name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  style={{ width: '90%' }}
                  id="standard-basic"
                  label="Last Name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  style={{ width: '90%' }}
                  id="standard-basic"
                  label="Username"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  style={{ width: '90%' }}
                  id="standard-basic"
                  label="Email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  style={{ width: '90%' }}
                  id="standard-basic"
                  label="Password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  style={{ width: '90%' }}
                  id="standard-basic"
                  label="Confirm Password"
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="secondary"
                  style={{ marginTop: '20px' }}
                >
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
