import Enzyme, { shallow } from 'enzyme';
import App from './App';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('render without error', () => {});
