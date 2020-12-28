import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/ToolBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

const AppNavbar = () => {
  return (
    <AppBar>
      <Toolbar>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <IconButton>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Quiz App</Typography>
          <Box>
            <Button>Login</Button>
            <Button>Register</Button>
          </Box>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default AppNavbar;
