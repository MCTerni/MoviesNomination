import { useState, useEffect  } from "react";
import ListGroup from "react-bootstrap/ListGroup";


function FavoriteList(props) {
    const [list, setList] = useState([]);
    const [listSize, setListSize] = useState(0);

    useEffect(() =>{
        if(props.movie){
            list.push(props.movie)
            setListSize(listSize+1);
        }
    },[props.movie]);

    return (
        <ListGroup>                
            { list.map((element) => {
                return (
                        <ListGroup.Item key = {element}>
                            {element}
                        </ListGroup.Item>   
                );
            }) }
            
        </ListGroup>
    );
}

export default FavoriteList;
