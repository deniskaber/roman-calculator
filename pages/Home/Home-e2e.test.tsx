import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Home e2e', () => {
  let input: HTMLInputElement;
  let output: HTMLInputElement;

  const user = userEvent.setup();

  beforeEach(() => {
    render(<Home />);

    input = screen.getByLabelText('Input a number here:');
    output = screen.getByLabelText('Converted Roman Numeral:');
  });

  it('displays converted number in output field on user input', async () => {
    await user.click(input);
    await user.keyboard('123');

    expect((output as HTMLInputElement).value).toBe('CXXIII');
  });
});
