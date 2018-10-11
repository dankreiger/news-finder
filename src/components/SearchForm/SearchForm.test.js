import React from 'react';
import SearchForm from './SearchForm';
import { shallow } from 'enzyme';

describe('App', () => {
  let component;
  const fetchArticles = jest.fn();
  const handleChange = jest.fn();

  beforeEach(() => {
    component = shallow(
      <SearchForm fetchArticles={fetchArticles} handleChange={handleChange} />
    );
  });

  it('renders without crashing', () => {
    expect(component.length).toBe(1);
    expect(component).toMatchSnapshot();
  });

  it('renders an SearchInput component', () => {
    expect(component.find('SearchInput').length).toBe(1);
  });

  it('renders an SearchButton component', () => {
    expect(component.find('SearchButton').length).toBe(1);
  });
});
