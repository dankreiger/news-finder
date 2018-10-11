import React from 'react';
import App from './App';
import { mount } from 'enzyme';

import { mockData } from '../../static/dummyData/mockData';
import { mockInputVal } from '../../static/dummyData/mockInputVal';

jest.mock('../../services/getArticles');

describe('App integrations', () => {
  let app;
  beforeEach(() => {
    // mount because we need to access children components
    app = mount(<App />);
  });
  it('fetches articles and displays them', done => {
    // enter a search term
    app.find('input').simulate('change', { target: { value: mockInputVal } });
    // click search button
    app.find('.btn').simulate('click');

    setTimeout(() => {
      app.update();
      const state = app.instance().state;

      // query should be inputVal
      expect(state.inputVal).toEqual(mockInputVal);

      // should fetch 20 articles
      expect(state.fetchedArticles.length).toEqual(20);
      expect(state.fetchedArticles).toEqual(mockData.articles);

      // app displays 4 random articles as <Article /> components
      expect(state.displayedArticles.length).toEqual(4);
      expect(app.find('Article').length).toEqual(4);

      done();
    });
  });
});
