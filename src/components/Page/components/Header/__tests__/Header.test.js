import toJson from 'enzyme-to-json';
import React from 'react';
import Header from '../Header';
import fixture from './fixtures/Header.json';

describe('<Header />', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = mount(<Header {...fixture} />);
  });

  describe('render()', () => {
    it('renders the component', () => {
      const componentJson = toJson(wrapper);

      expect(componentJson).to.matchSnapshot();
    });

    it('should have the user info element', () => {
      expect(wrapper.find('.pz-header-user-info')).to.have.lengthOf(1);
    });
  });

  describe('props', () => {
    it('should user info is equal that informed in the props', () => {
      const userInfo = wrapper.find('.pz-header-user-info');

      expect(userInfo.text()).to.be.equal(fixture.userInfo.name);
    });
  });
});
