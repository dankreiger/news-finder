import React from 'react';
import { func, string } from 'prop-types';
import { Button } from 'reactstrap';

const SearchButton = ({ handleClick, text, theme }) => (
  <Button color={theme} onClick={handleClick}>
    {text}
  </Button>
);

SearchButton.propTypes = {
  handleClick: func.isRequired,
  text: string,
  theme: string
};

SearchButton.defaultProps = {
  theme: 'primary',
  text: 'Click Me'
};

export default SearchButton;
