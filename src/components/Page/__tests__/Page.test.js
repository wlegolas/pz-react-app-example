import toJson from 'enzyme-to-json';
import React from 'react';
import Page from '../Page';
import fixture from './fixtures/Page.json';

describe('<Page />', () => {
  describe('render()', () => {
    it('renders the component', () => {
      const wrapper = mount(<Page {...fixture} />);
      const componentJson = toJson(wrapper);

      expect(componentJson).to.matchSnapshot();
    });
  });
});
