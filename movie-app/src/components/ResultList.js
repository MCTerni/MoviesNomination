import { useState, useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import api from "../services/omdb-api";

import Button from "react-bootstrap/Button";

function ResultList(props) {
    const [list, setList] = useState([]);
    useEffect(() =>{
        api.get(props.searchFor).then(response =>{
            if(response.data.Search)
                setList(response.data.Search);
            //clean the list if the error is Too many results
            if(response.data.Error==='Too many results.')
                setList([]);
        })        
    },[props.searchFor]);
    
    return (
        <ListGroup>                
            { list.map((element) => {
                return (
                    <div>
                        <ListGroup.Item key = {element.imdbID}>
                            {element.Title}
                            <Button 
                                variant='dark'
                                size = 'sm'                                
                                onClick = {props.onClick}
                            >
                                My Favorite Movie
                            </Button>
                        </ListGroup.Item>
                        
                    </div>
                );
            }) }
            
        </ListGroup>
    );
}

export default ResultList;
