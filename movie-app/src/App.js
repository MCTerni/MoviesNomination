import { useState } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBox from './components/SearchBox';
import ResultList from './components/ResultList';
import { Container, Row, Col } from 'react-bootstrap'
import FavoriteList from './components/FavoriteList';


function App() {
  const [searchFor, setSearchFor] = useState('');
  const [title, setTitle] = useState();
  const [year, setYear] = useState();
  const [imdbID, setImdbID] = useState();
  const [poster, setPoster] = useState();

  return (
    <Container className="App" fluid='md'>
      <header>
        <h1>Welcome to My Favorite Movies</h1>
      </header>

      <SearchBox onChange={(e) => setSearchFor(e.target.value)} />

      <Row xs={1} md={2}>
        <Col>
          Result List
          <ResultList
            searchFor={searchFor}
            //onClick={ (e)=>setFavMovie(e.target.parentNode.childNodes[1].data) }
            onClick={(e) => {
              setTitle(e.target.dataset.title)
              setYear(e.target.dataset.year)
              setImdbID(e.target.dataset.imdbID)
              setPoster(e.target.dataset.poster)
            }}
          />
        </Col>
        <Col>
          Favorite Movies List
          <FavoriteList
            title={title}
            year = {year}
            imdbID={imdbID}
            poster={poster}
          />
        </Col>
      </Row>

    </Container>
  );
}

export default App;
