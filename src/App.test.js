import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

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