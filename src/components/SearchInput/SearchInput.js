import React from 'react';
import { func, string } from 'prop-types';
import { Input } from 'reactstrap';

const SearchInput = ({ handleChange, inputVal }) => (
  <Input
    onChange={handleChange}
    value={inputVal}
    placeholder="Enter a search term"
  />
);

SearchInput.propTypes = {
  handleChange: func.isRequired,
  inputVal: string
};

export default SearchInput;
