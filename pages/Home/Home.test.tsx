import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Home', () => {
  it('renders a number input', () => {
    render(<Home />);

    const input = screen.getByLabelText('Input a Latin number here:');

    expect(input).toBeInTheDocument();
  });

  it('renders an output field', () => {
    render(<Home />);

    const input = screen.getByLabelText('Your converted Roman Numeral:');

    expect(input).toBeInTheDocument();
  });
});
