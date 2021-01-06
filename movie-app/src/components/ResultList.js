import { useState, useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import api from "../services/omdb-api";

function ResultList(props) {
    const [list, setList] = useState([]);
    useEffect(() =>{
        api.get(props.searchFor).then(response =>{
            if(response.data.Search)
                setList(response.data.Search);
            //clean the list if the error is Too many results
            if(response.data.Error=='Too many results.')
                setList([]);
        })
    },[props.searchFor]);
    return (
        <ListGroup>                
            { list.map((element) => {
                return <ListGroup.Item key = {element.imdbID}>{element.Title}</ListGroup.Item>;
            }) }
            
        </ListGroup>
    );
}

export default ResultList;
