import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';

import { findByTestAttr } from '../test/testUtils';
import Congrasts from './Congrasts';

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * @function setup
 * @param {object} props
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  return shallow(<Congrasts {...props} />);
};

test('renders without error', () => {});

test('render no text when `success ` props is false', () => {});

test('render non-empty congrats message when `success` props is true', () => {});
