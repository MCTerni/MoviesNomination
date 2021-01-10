import { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBox from "./components/SearchBox";
import ResultList from "./components/ResultList";
import { Container, Row, Col } from "react-bootstrap";
import FavoriteList from "./components/FavoriteList";
import "./styles/custom.css";

function App() {
  const [searchFor, setSearchFor] = useState("");
  const [movieData, setMovieData] = useState();
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  useEffect(() => {
    try {
      setFavoriteMovies(JSON.parse(localStorage.getItem("favoriteMovies")));
    } catch {
      setFavoriteMovies([]);
    }
  }, [movieData, searchFor]);

  return (
    <div className="App">
      <Container fluid="md">
        <header className="header">The Shoppies</header>
        <div className="serch-box">
          <SearchBox onChange={(e) => setSearchFor(e.target.value)} />
        </div>
        <Row xs={1} md={2} className="lists">
          <Container>
            <Col className="list-block">
              <h3 className="list-header">Nominations</h3>
              <Container>
                <FavoriteList movie={movieData} />
              </Container>
            </Col>
          </Container>
          <Container>
            <Col className="list-block">
              <h3 className="list-header">Results for "{searchFor}"</h3>
              <div>
                <ResultList
                  id="result-list"
                  searchFor={searchFor}
                  //onClick={ (e)=>setFavMovie(e.target.parentNode.childNodes[1].data) }
                  onClick={(e) =>
                    setMovieData(JSON.parse(e.target.dataset.moviedata))
                  }
                  favoriteMovies={favoriteMovies}
                />
              </div>
            </Col>
          </Container>
        </Row>
      </Container>
    </div>
  );
}

export default App;
