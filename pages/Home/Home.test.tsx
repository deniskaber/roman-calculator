import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from './Home';
import * as converterMock from '../../lib/utils/arabic-to-roman-numeral-convert';

jest.mock('../../lib/utils/arabic-to-roman-numeral-convert');

const setup = () => {
  render(<Home />);

  const inputEl = screen.getByLabelText('Input a number here:');
  const outputEl = screen.getByLabelText('Converted Roman Numeral:');

  const user = userEvent.setup();

  return { inputEl, outputEl, user };
};

describe('Home', () => {
  const latinToRomanNumeralConvertSpy = jest
    .spyOn(converterMock, 'arabicToRomanNumeralConvert')
    .mockImplementation((input: number) => {
      return `${input} converted`;
    });

  it('renders a number input', () => {
    const { inputEl } = setup();

    expect(inputEl).toBeInTheDocument();
  });

  it('renders an output field', () => {
    const { inputEl } = setup();

    expect(inputEl).toBeInTheDocument();
  });

  it('uses arabicToRomanNumeralConvert to make number conversion', async () => {
    const { inputEl, user } = setup();

    await user.click(inputEl);
    await user.keyboard('123');

    expect(latinToRomanNumeralConvertSpy).toHaveBeenCalledWith(123);
  });

  it('displays converted number in output field on user input', async () => {
    const { inputEl, outputEl, user } = setup();

    await user.click(inputEl);
    await user.keyboard('123');

    expect((outputEl as HTMLInputElement).value).toBe('123 converted');
  });

  it('validates user input to be a number between 1 and 1000 inclusive', async () => {
    const { inputEl, outputEl, user } = setup();

    await user.click(inputEl);
    await user.keyboard('0');

    expect((outputEl as HTMLInputElement).value).toBe('');
  });
});
