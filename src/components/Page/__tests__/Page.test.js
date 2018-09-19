import toJson from 'enzyme-to-json';
import React from 'react';
import Page from '../Page';

describe('<Page />', () => {
  let wrapper;

  beforeAll(() => {
    const pageContext = {
      userInfo: {
        id: 1,
        name: 'Legolas kun'
      }
    };

    wrapper = mount(<Page pageContext={pageContext} />);
  });

  describe('render()', () => {
    it('renders the component', () => {
      const componentJson = toJson(wrapper);

      expect(componentJson).to.matchSnapshot();
    });
  });
});
