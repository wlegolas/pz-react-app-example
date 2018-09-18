import toJson from 'enzyme-to-json';
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

describe('<Page /> with enzyme', () => {
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
      const wrapper2 = shallow(<Page />);
      const component = wrapper2.instance();
console.log('** toJson', wrapper2.find('pz-header'))
      expect(toJson(component)).to.matchSnapshot();
    });
  });
});
