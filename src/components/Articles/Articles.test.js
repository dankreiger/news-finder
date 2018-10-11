import React from 'react';
import Articles from './Articles';
import { shallow } from 'enzyme';
import { mock4VisibleArticles } from '../../static/dummyData/mockData';
import _ from 'lodash';

describe('Articles', () => {
  let component;
  beforeEach(() => {
    component = shallow(<Articles articles={mock4VisibleArticles} />);
  });

  it('renders without crashing', () => {
    expect(component.length).toBe(1);
    expect(component).toMatchSnapshot();
  });

  it('renders 4 Article Components', () => {
    expect(component.find('Article').length).toBe(4);
  });
});
