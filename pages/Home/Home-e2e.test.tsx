import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import Home from './Home';

const setup = () => {
  render(<Home />);

  const inputEl = screen.getByLabelText('Input a number here:');
  const outputEl = screen.getByLabelText('Converted Roman Numeral:');

  const user = userEvent.setup();

  return { inputEl, outputEl, user };
};

describe('Home e2e', () => {
  it('displays converted number in output field on user input', async () => {
    const { inputEl, outputEl, user } = setup();

    await user.click(inputEl);
    await user.keyboard('123');

    expect((outputEl as HTMLInputElement).value).toBe('CXXIII');
  });
});
