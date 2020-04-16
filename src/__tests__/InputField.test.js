import React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';

import InputField from '../components/InputField';

describe('<InputField />', () => {
  it('Renders an input field', () => {
    expect(mount(<InputField />).find('input').length).toEqual(1);
  });

  it('Has border', () => {
    expect(mount(<InputField />).find('input')).toHaveStyleRule(
      'border',
      '1px solid #bfc5cd'
    );
  });

  it('Border color changes with hover', () => {
    expect(mount(<InputField />).find('input')).toHaveStyleRule(
      'border-color',
      '#4a4a4a',
      {
        modifier: ':hover',
      }
    );
  });
});
