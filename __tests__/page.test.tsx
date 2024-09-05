import { render, screen } from '@testing-library/react';
import Page from '../src/app/(root)/(home)/page';

it('renders all h1 headings', () => {
  render(<Page />);
  
  const headings = screen.getAllByRole('heading', { level: 1 });
  
  expect(headings.length).toBe(2);  // Adjust based on the number of h1 elements expected
});
