import { useState, useEffect } from "react";
import { ListGroup, Button } from "react-bootstrap";
import Toast from 'react-bootstrap/Toast'
import ListItem from "./ListItem";

function FavoriteList(props) {
    const [list, setList] = useState([]);
    const [listSize, setListSize] = useState(0);
    const [showToast, setShowToast] = useState(false);

    useEffect(() => {
        if (props.movie && listSize < 5) {
            list.push(props.movie);
            setListSize(prevSize => prevSize + 1);
        }

        if (list.length >= 5) {
            setShowToast(true);
        }
    }, [props.movie]);

    const handleRemove = (e) => {
        list.splice(e.target.parentNode.id, 1);
        setListSize(prevSize => prevSize - 1);
    }

    return (
        <div>
            <Toast onClose={() => setShowToast(false)} show={showToast} delay={5000} autohide>
                <Toast.Header>
                    <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                    <strong>You've just added 5 movies to your list</strong>
                </Toast.Header>
            </Toast>
            <ListGroup>
                {list.map((element, index) => {
                    return (                                         
                        <div>
                            <ListGroup.Item id={index}>
                                {element}
                                <Button
                                    style={{ marginLeft: "5px" }}
                                    variant="dark"
                                    size="sm"
                                    onClick={handleRemove}
                                >Remove</Button>
                            </ListGroup.Item>
                        </div>
                    );
                })}
            </ListGroup>
        </div>
    );
}

export default FavoriteList;
