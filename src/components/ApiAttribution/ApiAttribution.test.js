import React from 'react';
import ApiAttribution from './ApiAttribution';
import { shallow } from 'enzyme';

describe('ApiAttribution', () => {
  let component;
  let anchor;
  const mockProps = {
    text: 'NewsApi',
    href: 'https://newsapi.org/'
  };

  beforeEach(() => {
    component = shallow(
      <ApiAttribution text={mockProps.text} href={mockProps.href} />
    );
    anchor = component.find('a');
  });

  it('renders without crashing', () => {
    expect(component.length).toBe(1);
    expect(component).toMatchSnapshot();
  });

  it('renders an anchor element', () => {
    expect(anchor.length).toBe(1);
  });

  it('sets components text props into the anchor element text', () => {
    expect(anchor.text()).toEqual(mockProps.text);
  });

  it('sets components text props into the anchor element text', () => {
    expect(anchor.prop('href')).toEqual(mockProps.href);
  });
});
