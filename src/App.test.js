import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio hero', () => {
  render(<App />);
  expect(screen.getByText(/Rajeevni Umapathisivam/i)).toBeInTheDocument();
  expect(screen.getByText(/Full Stack Developer/i)).toBeInTheDocument();
});
