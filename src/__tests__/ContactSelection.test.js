import React from 'react';
import { mount } from 'enzyme';

import ContactSelection from '../components/ContactSelection';

describe('<ContactSelection />', () => {
  it('Renders something', () => {
    expect(mount(<ContactSelection />).isEmptyRender()).toEqual(false);
  });

  it('Renders one input field', () => {
    expect(mount(<ContactSelection />).find('input').length).toBe(1);
  });

  it('Does not render list at first render', () => {
    expect(
      mount(<ContactSelection />)
        .find('ul')
        .exists()
    ).toEqual(false);
  });

  it('Renders a list when input field is clicked', () => {
    const wrapper = mount(<ContactSelection />);
    wrapper.find('input').simulate('click');
    expect(wrapper.find('ul').length).toBe(1);
  });

  it('Renders a list when input field is focused', () => {
    const wrapper = mount(<ContactSelection />);
    wrapper.find('input').simulate('focus');
    expect(wrapper.find('ul').length).toBe(1);
  });

  it('Unmounts list after a hundred millisecond when input field is out of focus', () => {
    const wrapper = mount(<ContactSelection />);
    wrapper.find('input').simulate('focus');
    expect(wrapper.find('ul').exists()).toEqual(true);
    wrapper.find('input').simulate('blur');
    setTimeout(() => expect(wrapper.find('ul').exists()).toEqual(false), 100);
  });

  it('Filters list items when input is provided', () => {
    const wrapper = mount(<ContactSelection />);
    wrapper.find('input').simulate('click');
    expect(wrapper.find('input').prop('value')).toEqual('');
    const totalNumberOfListItems = wrapper.find('li').length;
    wrapper
      .find('input')
      .simulate('change', { target: { name: 'value', value: 'aa' } });
    expect(wrapper.find('li').length).not.toEqual(totalNumberOfListItems);
  });

  it('Displays selected list item', () => {
    const wrapper = mount(<ContactSelection />);
    wrapper.find('input').simulate('click');
    expect(wrapper.find('input').prop('value')).toEqual('');
    const selectedText = wrapper.find('li').at(1).text();
    wrapper.find('li').at(1).simulate('click');
    expect(wrapper.find('input').prop('value')).toEqual(selectedText);
  });
});
