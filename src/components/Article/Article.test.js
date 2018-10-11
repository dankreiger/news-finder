import React from 'react';
import Article from './Article';
import { shallow } from 'enzyme';
import { mock4VisibleArticles } from '../../static/dummyData/mockData';
import _ from 'lodash';

describe('Article', () => {
  let component;
  let mockArticle = mock4VisibleArticles[0];
  const { url, urlToImage, title, description, source } = mockArticle;
  beforeEach(() => {
    component = shallow(
      <Article
        url={url}
        urlToImage={urlToImage}
        title={title}
        description={description}
        sourceName={source.name}
      />
    );
  });

  it('renders without crashing', () => {
    expect(component.length).toBe(1);
    expect(component).toMatchSnapshot();
  });

  it('renders a wrapping anchor tag with the article url prop as the href', () => {
    expect(component.find('a').prop('href')).toEqual(url);
  });

  it('renders a ProgressiveImage component with the article urlToImage prop as its image src', () => {
    expect(component.find('ProgressiveImage').prop('src')).toEqual(urlToImage);
  });

  it('renders a CardTitle h5 tag with the article title as its inner text', () => {
    expect(component.find('CardTitle').props().children).toEqual(title);
    expect(component.find('CardTitle').props().tag).toEqual('h5');
  });

  it('renders a CardText.articleDescription p tag with the article description as its inner text', () => {
    expect(component.find('.articleDescription').props().children).toEqual(
      description
    );
    expect(component.find('.articleDescription').props().tag).toEqual('p');
  });

  it('renders a text-muted span with the article source name', () => {
    expect(component.find('.text-muted').props().children).toEqual(source.name);
  });
});
