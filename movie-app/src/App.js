import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ResultList from './components/ResultList';


function App() {
  return (
    <div className="App container">
      <header>
        <h1>Welcome to My Favorite Movies</h1>
      </header>
      <ResultList/>
    </div>
  );
}

export default App;
