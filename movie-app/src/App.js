import { useState } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBox from './components/SearchBox';
import ResultList from './components/ResultList';
import {Container, Row, Col} from 'react-bootstrap'


function App() {
  const [searchFor, setSearchFor] = useState('');
  return (
    <Container className="App" fluid = 'md'>
      <header>
        <h1>Welcome to My Favorite Movies</h1>
      </header>
      
      <SearchBox onChange={(e) => setSearchFor(e.target.value)} />

      <Row xs = {1} md = {2}>
        <Col>
          Result List
          <ResultList searchFor={searchFor} />           
        </Col>
        <Col>List of Favorite Movies
        </Col>
      </Row>

    </Container>
  );
}

export default App;
