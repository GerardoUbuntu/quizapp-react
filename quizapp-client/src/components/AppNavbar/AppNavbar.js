import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/ToolBar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import logo from '../../quizapplogo1.png';
import { authenticated, logout } from '../../features/authSlice';
import { useSelector, useDispatch } from 'react-redux';

const AppNavbar = () => {
  const isAuthenticated = useSelector(authenticated);
  const dispatch = useDispatch();
  const handleClickLogout = () => {
    console.log('here');
    dispatch(logout());
  };
  return (
    <AppBar title="QuizApp">
      <Toolbar>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
            <img
              src={logo}
              alt="logo"
              style={{ width: '100px', height: '40px' }}
            />
          </Link>

          {/* <IconButton>
            <MenuIcon />
          </IconButton> */}
          {!isAuthenticated && (
            <Box>
              <Link
                to="/login"
                style={{ textDecoration: 'none', color: 'white' }}
              >
                <Button color="inherit">Login</Button>
              </Link>
              <Link
                to="/register"
                style={{ textDecoration: 'none', color: 'white' }}
              >
                <Button color="inherit">Register</Button>
              </Link>
            </Box>
          )}
          {isAuthenticated && (
            <Box>
              <Button onClick={handleClickLogout} color="inherit">
                Logout
              </Button>
            </Box>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default AppNavbar;
