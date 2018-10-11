import React from 'react';
import SearchInput from './SearchInput';
import { Input } from 'reactstrap';
import { shallow } from 'enzyme';

describe('App', () => {
  let component;
  let input;
  const handleChange = jest.fn();

  beforeEach(() => {
    component = shallow(
      <SearchInput handleChange={handleChange} inputVal="" />
    );
    input = component.find(Input);
  });

  it('renders without crashing', () => {
    expect(component.length).toBe(1);
    expect(component).toMatchSnapshot();
  });

  it('renders an Input component', () => {
    expect(input.length).toBe(1);
  });

  it('triggers handleChange function for Input onChange', () => {
    input.simulate('change', { target: { value: 'something' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
