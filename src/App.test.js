import { render, screen } from '@testing-library/react';
import App from './App';
import BookingPage from './components/BookingPage';

test('Renders the BookingForm heading', () => {
  render(<BookingPage />);
  const headingElement = screen.getByText("Book Your Table Now!");
  expect(headingElement).toBeInTheDocument();
})