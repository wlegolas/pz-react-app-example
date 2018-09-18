import chai from 'chai';
import chaiJestSnapshot from "chai-jest-snapshot";
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

chai.use(chaiJestSnapshot);

// Configure Chai
global.jestExpect = global.expect;
global.expect = chai.expect;
