import {TextField} from "@mui/material";
import './styles.css';

export const SearchInput = ({searchValue,handleChange}) => {
    return (
    <TextField
        className="text-input"
        onChange={handleChange}
        value={searchValue}
        type="search"
        id="outlined-basic"
        label="Search"
        variant="outlined"
    />
)
}
