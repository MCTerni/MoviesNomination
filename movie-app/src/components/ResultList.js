import { useState, useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import api from "../services/omdb-api";
import ListItem from './ListItem';

function ResultList(props) {
    const [list, setList] = useState([]);
    
    useEffect(() => {
        api.get(props.searchFor).then(response => {
            if (response.data.Search)
                setList(response.data.Search);
            //clean the list if the error is Too many results
            if (response.data.Error === 'Too many results.')
                setList([]);

        })
    }, [props.searchFor]);

    return (
        <ListGroup>
            { list.map((element, index) => {
                return (
                    <ListItem key={index}
                        movieInfo={element}
                        onClick={props.onClick}
                        btnText = 'Nominate'                        
                    />
                );
            })}

        </ListGroup>
    );
}

export default ResultList;
