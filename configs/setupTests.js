import chai from 'chai';
import chaiJestSnapshot from "chai-jest-snapshot";

chai.use(chaiJestSnapshot);

// Configure Chai
global.jestExpect = global.expect;
global.expect = chai.expect;
