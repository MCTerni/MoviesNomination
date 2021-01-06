import { useState } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBox from './components/SearchBox';
import ResultList from './components/ResultList';


function App() {
  const [searchFor, setSearchFor] = useState('');
  return (
    <div className="App container">
      <header>
        <h1>Welcome to My Favorite Movies</h1>
      </header>
      <SearchBox onChange={(e) => setSearchFor(e.target.value)} />
      <ResultList searchFor={searchFor} />

    </div>
  );
}

export default App;
