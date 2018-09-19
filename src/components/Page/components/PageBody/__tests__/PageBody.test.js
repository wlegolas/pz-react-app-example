import toJson from 'enzyme-to-json';
import React from 'react';
import PageBody from '../PageBody';

describe('<PageBody />', () => {
  describe('render()', () => {
    it('rendres the component', () => {
      const wrapper = shallow(<PageBody />);
      const componentJson = toJson(wrapper);

      expect(componentJson).to.matchSnapshot();
    });
  });
});
