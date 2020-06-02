import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { cleanup, render } from '@testing-library/react';
import { shallow, configure } from "enzyme";
import App from './App';
import GenerateOrderResubmitted from "./components/GenerateOrderResubmitted";
import CloseCartSaga from "./components/CloseCartSaga";
import CloseOrderSaga from "./components/CloseOrderSaga";

//Make sure page reads correct text
describe("Page reads correctly", () => {

  test('Header reads Adm Tool', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Admin Tool/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('Order ID label reads Order ID', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Order ID/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('Cart Saga button reads Close Cart Saga', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Close Cart Saga/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('Cart Order button reads Close Order Saga', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Close Order Saga/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('Order Event button reads Generate Order Resubmitted Event', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Generate Order Resubmitted Event/i);
    expect(linkElement).toBeInTheDocument();
  });
});


//make sure buttons work
describe('Button clicks', () => {

  configure({ adapter: new Adapter() });

  it('captures Close Cart Saga click', async (done) => {
    window.alert = jest.fn();
    const cartSaga = shallow((<CloseCartSaga>Close Cart Saga</CloseCartSaga>));
    await cartSaga.find('button').simulate('click', { preventDefault() {} });
    expect(window.alert).toHaveBeenCalledWith('Cart Saga Closed');
    done();
  });

  it('captures Close Order Saga click', async (done) => {
    window.alert = jest.fn();
    const orderSaga = shallow((<CloseOrderSaga>Close Order Saga</CloseOrderSaga>));
    await orderSaga.find('button').simulate('click', { preventDefault() {} });
    expect(window.alert).toHaveBeenCalledWith('Order Saga Closed');
    done();
  });

  it('captures Generate Order Resubmitted Event click', async (done) => {
    window.alert = jest.fn();
    const orderEvent = shallow((<GenerateOrderResubmitted>Generate Order Resubmitted Event</GenerateOrderResubmitted>));
    await orderEvent.find('button').simulate('click', { preventDefault() {} });
    expect(window.alert).toHaveBeenCalledWith('Order Resubmitted Event Generated');
    done();
  });

  afterEach(cleanup);
});