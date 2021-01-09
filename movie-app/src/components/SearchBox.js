
import {InputGroup, FormControl} from "react-bootstrap";
import {BsSearch} from "react-icons/bs";

function SearchBox(props) {
    return (
        <InputGroup className="mb-3">
            <InputGroup.Prepend>
                <InputGroup.Text><BsSearch/></InputGroup.Text>
            </InputGroup.Prepend>
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