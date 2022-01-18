/* eslint-disable testing-library/await-async-query */
import Enzyme, { shallow } from 'enzyme';
import App from './App';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function to create a ShallowWrapper for the App component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  return shallow(<App {...props} />);
};

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test="${val}"]`);

describe('check element exist', () => {
  test('renders without error', () => {
    const wrapper = setup();
    const appComponent = findByTestAttr(wrapper, 'component-app');
    expect(appComponent.length).toBe(1);
  });

  test('renders counter display', () => {
    const wrapper = setup();
    const counterDisplay = findByTestAttr(wrapper, 'counter-display');
    expect(counterDisplay.length).toBe(1);
  });

  // .text always return string
  test('counter display start at 0', () => {
    const wrapper = setup();
    const count = findByTestAttr(wrapper, 'count').text();
    expect(count).toBe('0');
  });
});

describe('increasement', () => {
  test('increase button', () => {
    const wrapper = setup();
    const button = findByTestAttr(wrapper, 'increment-button');
    expect(button.length).toBe(1);
  });

  test('clicking button increment counter display', () => {
    const wrapper = setup();
    // find the button
    const button = findByTestAttr(wrapper, 'increment-button');
    // click the button
    button.simulate('click');
    // find the display and test that the number has been increase
    const count = findByTestAttr(wrapper, 'count').text();
    expect(count).toBe('1');
  });
});

describe('decreasement', () => {
  test('decrease button', () => {
    const wrapper = setup();
    const button = findByTestAttr(wrapper, 'decrease-button');
    expect(button.length).toBe(1);
  });

  test('clicking button decrease counter display when greater than 0', () => {
    const wrapper = setup();

    // click the increasement button so that the counter will be > 0
    const increaseButton = findByTestAttr(wrapper, 'increment-button');
    increaseButton.simulate('click');

    // find the decrease button and click
    const decreaseButton = findByTestAttr(wrapper, 'decrease-button');
    decreaseButton.simulate('click');

    // find the display and test that the number has been decrease
    const count = findByTestAttr(wrapper, 'count').text();
    expect(count).toBe('0');
  });
});

describe('error when < 0', () => {
  test('clicking button decrease counter display when goes below 0 then the result will be 0', () => {
    const wrapper = setup();

    // find the decrease button and click
    const decreaseButton = findByTestAttr(wrapper, 'decrease-button');
    decreaseButton.simulate('click');

    // find the display and test that the number has been decrease
    const count = findByTestAttr(wrapper, 'count').text();
    expect(count).toBe('0');
  });

  test('showing error when clicking decrease at 0', () => {
    const wrapper = setup();

    // find the decrease button and click
    const decreaseButton = findByTestAttr(wrapper, 'decrease-button');
    decreaseButton.simulate('click');

    // find the error text
    const errorText = findByTestAttr(wrapper, 'error-message').text();
    console.log(errorText);
    expect(errorText).toBe('Can not go under 0');
  });

  test('error disapear when clicking increasement button', () => {
    const wrapper = setup();

    // find the decrease button and click
    const decreaseButton = findByTestAttr(wrapper, 'decrease-button');
    decreaseButton.simulate('click');

    // find the increasement button and click
    const increaseButton = findByTestAttr(wrapper, 'increment-button');
    increaseButton.simulate('click');

    // find the error text, expect the error text goes away
    const errorText = findByTestAttr(wrapper, 'error-message');
    expect(errorText).toEqual({});
  });
});
