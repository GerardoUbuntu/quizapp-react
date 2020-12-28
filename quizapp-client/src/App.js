import logo from './logo.svg';
import AppNavbar from './components/AppNavbar'
import QuestionContainer from './components/QuestionContainer'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AppNavbar></AppNavbar>
        <QuestionContainer></QuestionContainer>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
