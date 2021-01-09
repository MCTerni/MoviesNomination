import { useState, useEffect } from "react";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Button from "react-bootstrap/Button";



function ListItem(props) {
    const [movieData, setMovieData] = useState(props.movieInfo);

    useEffect(() => {
        setMovieData(props.movieInfo);
    }, [props.movieInfo])

    return (
        <ListGroupItem>
            <img src={movieData.poster} height='80rem' alt='No Poster   ' />
            <a href={`https://www.imdb.com/title/${movieData.imdbID}`} target="_blank" >
                {`${movieData.title} (${movieData.year}) `}
            </a>
            <br />
            <Button style={{ marginTop: '5px' }}
                variant='dark'
                size='sm'
                onClick={props.onClick}
                data-title={movieData.title}
                data-poster={movieData.poster}
                data-year={movieData.year}
                data-imdbID={movieData.imdbID}
            > {props.btnText} </Button>
        </ListGroupItem>
    )
}

export default ListItem;