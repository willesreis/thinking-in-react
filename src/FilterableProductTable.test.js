import { render, screen } from '@testing-library/react';
import FilterableProductTable from './FilterableProductTable';

const PRODUCTS = [
  { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
  { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
  { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
  { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
  { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
  { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }
];

test('renders fieldset container', () => {
  render(<FilterableProductTable products={PRODUCTS} />);
  const legendElement = screen.getByText(/Filter products/i);
  expect(legendElement).toBeInTheDocument();
});

test('renders filter search placeholder', () => {
  render(<FilterableProductTable products={PRODUCTS} />);
  const placeholderValue = screen.getByPlaceholderText(/Search.../i);
  expect(placeholderValue).toBeInTheDocument();
});
