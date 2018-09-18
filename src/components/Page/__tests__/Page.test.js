import React from 'react';
import renderer from 'react-test-renderer';
import Page from '../Page';

describe('<Page />', () => {
  describe('render()', () => {
    it('render the component', () => {
      const component = renderer.create(
        <Page page="http://www.facebook.com">Facebook</Page>,
      );

      let tree = component.toJSON();
      expect(tree).to.matchSnapshot();
    });
  });
});
