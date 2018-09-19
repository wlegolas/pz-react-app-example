import toJson from 'enzyme-to-json';
import React from 'react';
import Header from '../Header';

describe('<Header />', () => {
  describe('render()', () => {
    it('renders the component', () => {
      const wrapper = shallow(<Header />)
      const componentJson = toJson(wrapper);

      expect(componentJson).to.matchSnapshot();
    });
  });
});
