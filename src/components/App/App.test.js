import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  let component;
  beforeEach(() => {
    component = shallow(<App />);
  });

  it('renders without crashing', () => {
    expect(component.length).toBe(1);
    expect(component).toMatchSnapshot();
  });

  it('renders an ApiAttribution components', () => {
    expect(component.find('ApiAttribution').length).toBe(1);
  });

  it('renders an Articles component', () => {
    expect(component.find('Articles').length).toBe(1);
  });

  it('renders an SearchForm component', () => {
    expect(component.find('SearchForm').length).toBe(1);
  });

  describe('App state', () => {
    it('has an initial state with inputVal, fetchedArticles, and displayedArticles', () => {
      expect(component.state('displayedArticles')).toEqual([]);
      expect(component.state('fetchedArticles')).toEqual([]);
      expect(component.state('inputVal')).toEqual('');
    });
  });
});
