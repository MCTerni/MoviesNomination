import { useState, useEffect} from "react";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Button from "react-bootstrap/Button";


function ListItem(props) {
    const [info, setInfo] = useState(props.movieInfo);
    
    useEffect(() =>{
        setInfo(props.movieInfo);
    },[props.movieInfo])

    return (
        <ListGroupItem>
            <a href={`https://www.imdb.com/title/${info.imdbID}`} target="_blank" >
                <img src={info.Poster} height='80rem' alt='No Poster   '/>
            </a>
            {`${info.Title} (${info.Year}) `}
            <Button style={{ marginLeft: '5px' }} 
                variant='dark'
                size='sm'
                onClick={props.onClick}
                data-title={info.Title}
                data-poster={info.Poster}
                data-year={info.Year}
                data-imdbID={info.imdbID}
            > {props.btnText} </Button>
        </ListGroupItem>
    )
}

export default ListItem;