import React, { useState, useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import api from "../services/omdb-api";

function ResultList() {
    const [list, setList] = useState([]);
    useEffect(() =>{
        api.get('rambo').then(response =>{
            setList(response.data.Search);
        })
    },[]);
    return (
        <ListGroup>                
            { list.map((element) => {
                return <ListGroup.Item key = {element.imdbID}>{element.Title}</ListGroup.Item>;
            }) }
            
        </ListGroup>
    );
}

export default ResultList;
