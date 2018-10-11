import React from 'react';
import { func, string } from 'prop-types';
import { Col, Row } from 'reactstrap';
import SearchButton from '../SearchButton/SearchButton';
import SearchInput from '../SearchInput/SearchInput';

const SearchForm = ({ handleChange, fetchArticles, inputVal }) => (
  <Row>
    <Col xs="12" sm="9" md="10">
      <SearchInput
        handleChange={handleChange}
        inputVal={inputVal}
        placeholder="Enter a search term"
      />
    </Col>
    <Col xs="12" sm="3" md="2">
      <SearchButton handleClick={fetchArticles} theme="primary" />
    </Col>
  </Row>
);

SearchForm.propTypes = {
  fetchArticles: func.isRequired,
  handleChange: func.isRequired,
  inputVal: string
};

export default SearchForm;
