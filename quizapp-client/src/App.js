import AppNavbar from './components/AppNavbar';
import './App.css';
import QuestionPage from './components/QuestionPage';
import RegisterPage from './components/RegisterPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from 'react-router-dom';
import LoginPage from './components/LoginPage';
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from '@material-ui/core/styles';
import 'fontsource-roboto';

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Roboto, Arial',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <div className="App-header">
            <AppNavbar></AppNavbar>
            <Switch>
              <Route path="/register"> 
                <RegisterPage />
              </Route>
              <Route path="/login">
                <LoginPage />
              </Route>
              <Route path="/">
                <QuestionPage />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
