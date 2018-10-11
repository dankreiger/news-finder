import React, { Component } from 'react';
import { Container } from 'reactstrap';
import _ from 'lodash';

import getArticles from './../../services/getArticles';

import Articles from './../Articles/Articles';
import ApiAttribution from './../ApiAttribution/ApiAttribution';
import SearchForm from './../SearchForm/SearchForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputVal: '',
      fetchedArticles: [],
      displayedArticles: []
    };
  }
  handleChange = e => {
    this.setState({ inputVal: e.target.value });
  };

  fetchArticles = async () => {
    try {
      const fetchedArticles = await getArticles(this.state.inputVal);
      this.setState({
        fetchedArticles,
        displayedArticles: _.take(fetchedArticles, 4)
      });
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    const { inputVal, displayedArticles } = this.state;
    return (
      <Container>
        <ApiAttribution text="NewsAPI.org" />
        <SearchForm
          handleChange={this.handleChange}
          fetchArticles={this.fetchArticles}
          inputVal={inputVal}
        />
        {displayedArticles && <Articles articles={displayedArticles} />}
      </Container>
    );
  }
}

export default App;
