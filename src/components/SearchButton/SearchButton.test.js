import React from 'react';
import SearchButton from './SearchButton';
import { Button } from 'reactstrap';
import { shallow } from 'enzyme';

describe('SearchButton', () => {
  let component;
  let button;
  const fetchArticles = jest.fn();
  const handleClick = jest.fn();

  beforeEach(() => {
    component = shallow(<SearchButton handleClick={handleClick} />);
    button = component.find(Button);
  });

  it('renders without crashing', () => {
    expect(component.length).toBe(1);
    expect(component).toMatchSnapshot();
  });

  it('renders an Button component', () => {
    expect(button.length).toBe(1);
  });

  it('calls handleClick function when Button is clicked', () => {
    button.simulate('click');
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
