import { useState } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBox from './components/SearchBox';
import ResultList from './components/ResultList';
import { Container, Row, Col } from 'react-bootstrap'
import FavoriteList from './components/FavoriteList';
import MovieData from './models/MovieData';
import "./styles/custom.css"


function App() {
  const [searchFor, setSearchFor] = useState('');
  const [movieData, setMovieData] = useState();

  return (
    <div className="App">
      <Container fluid='md'>
        <header className="header" >
          The Shoppies
        </header>
        <div className="serch-box">
          <SearchBox onChange={(e) => setSearchFor(e.target.value)} />
        </div>
        <Row xs={1} md={2}>
          <div>
            <Col className="list-block">
              <h3 className="list-header">Result List</h3>
              <div className="list">
                <ResultList
                  searchFor={searchFor}
                  //onClick={ (e)=>setFavMovie(e.target.parentNode.childNodes[1].data) }
                  onClick={(e) => {
                    console.log(e.target)
                    e.target.disabled = true;
                    setMovieData(new MovieData({
                      Title: e.target.dataset.title,
                      Year: e.target.dataset.year,
                      imdbID: e.target.dataset.imdbID,
                      Poster: e.target.dataset.poster,
                    })
                    )
                  }}
                />
              </div>
            </Col>
          </div>
          <div>
            <Col className="list-block">
              <h3 className="list-header">Favorite Movies List</h3>
              <div className="list">
                <FavoriteList
                  movie={movieData}
                />
              </div>
            </Col>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default App;
