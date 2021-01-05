import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/ToolBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import logo from '../quizapplogo1.png';

const AppNavbar = () => {
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
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default AppNavbar;
