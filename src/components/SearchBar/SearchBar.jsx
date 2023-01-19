import { styled } from "@stitches/react";
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { SearchBarLayoutStyles } from "./SearchBar.styles";

const SearchBar = ({ onSearch, onFilterPlayId }) => {
    const [playId, setPlayId] = useState(344)
    const [searchTerm, setSearchTerm] = useState('');
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebouncedSearchTerm(searchTerm);
        }, 500);
        return () => clearTimeout(timeout);
    }, [searchTerm]);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    }
    const handleFilterPlayId = (event) => {
        setPlayId(event.target.value);
    }

    useEffect(() => {
        onSearch(debouncedSearchTerm);
    }, [debouncedSearchTerm]);

    useEffect(() => {
        onFilterPlayId(playId);
    }, [playId]);

    return (
        <SearchBarLayout>
            <Form.Control
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearch} />
            <Form.Select
                aria-label="Play ID"
                onChange={handleFilterPlayId}
            >
                <option value="344">344</option>
                <option value="345">345</option>
            </Form.Select>
        </SearchBarLayout>
    );
}

export default SearchBar;
const SearchBarLayout = styled('div', SearchBarLayoutStyles)