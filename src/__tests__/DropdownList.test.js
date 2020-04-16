import React from 'react';
import { mount } from 'enzyme';

import DropdownList from '../components/DropdownList';

describe('<DropdownList />', () => {
  it('Does not render anything at first', () => {
    expect(mount(<DropdownList />).isEmptyRender()).toEqual(true);
  });

  it('Renders a list if display prop set to true', () => {
    expect(mount(<DropdownList display data={[]} />).find('ul').length).toBe(1);
  });
});
