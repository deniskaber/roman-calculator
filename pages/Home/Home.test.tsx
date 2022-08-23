import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Home', () => {
  it('renders a number input', () => {
    render(<Home />);

    const input = screen.getByLabelText('Input a number here');

    expect(input).toBeInTheDocument();
  });
});
