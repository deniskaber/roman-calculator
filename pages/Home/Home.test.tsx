import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

  it('displays converted number in output field on user input', async () => {
    const user = userEvent.setup();
    render(<Home />);

    const input = screen.getByLabelText('Input a Latin number here:');

    await user.click(input);
    await user.keyboard('123');

    const output = screen.getByLabelText('Your converted Roman Numeral:');

    expect((output as HTMLInputElement).value).toBe('123 converted');
  });
});
