
import {InputGroup, FormControl} from "react-bootstrap";

function SearchBox(props) {
    return (
        <InputGroup className="mb-3">
            <FormControl
                placeholder="Movie's Title"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                onChange = {props.onChange}
            />
        </InputGroup>
    );
}

export default SearchBox;