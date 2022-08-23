import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from './Home';
import * as converterMock from '../../lib/utils/arabic-to-roman-numeral-convert';

jest.mock('../../lib/utils/arabic-to-roman-numeral-convert');

describe('Home', () => {
  let input: HTMLInputElement;
  let output: HTMLInputElement;

  const user = userEvent.setup();
  const latinToRomanNumeralConvertSpy = jest
    .spyOn(converterMock, 'arabicToRomanNumeralConvert')
    .mockImplementation((input: number) => {
      return `${input} converted`;
    });

  beforeEach(() => {
    render(<Home />);

    input = screen.getByLabelText('Input a number here:');
    output = screen.getByLabelText('Converted Roman Numeral:');
  });

  it('renders a number input', () => {
    expect(input).toBeInTheDocument();
  });

  it('renders an output field', () => {
    expect(input).toBeInTheDocument();
  });

  it('uses arabicToRomanNumeralConvert to make number conversion', async () => {
    const user = userEvent.setup();

    await user.click(input);
    await user.keyboard('123');

    expect(latinToRomanNumeralConvertSpy).toHaveBeenCalledWith(123);
  });

  it('displays converted number in output field on user input', async () => {
    await user.click(input);
    await user.keyboard('123');

    expect((output as HTMLInputElement).value).toBe('123 converted');
  });

  it('validates user input to be a number between 1 and 1000 inclusive', async () => {
    await user.click(input);
    await user.keyboard('0');

    expect((output as HTMLInputElement).value).toBe('');
  });
});
