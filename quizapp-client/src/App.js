import { useEffect } from 'react';
import AppNavbar from './components/AppNavbar/AppNavbar';
import './App.css';
import QuestionPage from './screens/QuestionPage/QuestionPage';
import RegisterPage from './screens/RegisterPage/RegisterPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from './screens/LoginPage/LoginPage';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import 'fontsource-roboto';
import { authenticated, selectLoading } from './features/authSlice';
import { useSelector, useDispatch } from 'react-redux';
import { loadUser } from './features/authSlice';
import AuthenticatedRoute from './AuthenticatedRoute';

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Roboto, Arial',
  },
});

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  const isAuthenticated = useSelector(authenticated);
  const isLoading = useSelector(selectLoading);
  console.log(isAuthenticated);
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <div className="App-header">
            <AppNavbar></AppNavbar>
            {!isLoading && (
              <Switch>
                <Route path="/register">
                  <RegisterPage />
                </Route>
                <Route path="/login">
                  <LoginPage />
                </Route>
                <AuthenticatedRoute
                  authed={isAuthenticated}
                  path="/"
                  component={QuestionPage}
                />
              </Switch>
            )}
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
