import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from './Home';
import * as converterMock from '../../lib/utils/arabic-to-roman-numeral-convert';

jest.mock('../../lib/utils/arabic-to-roman-numeral-convert');

describe('Home', () => {
  it('renders a number input', () => {
    render(<Home />);

    const input = screen.getByLabelText('Input a number here:');

    expect(input).toBeInTheDocument();
  });

  it('renders an output field', () => {
    render(<Home />);

    const input = screen.getByLabelText('Converted Roman Numeral:');

    expect(input).toBeInTheDocument();
  });

  it('displays converted number in output field on user input', async () => {
    const user = userEvent.setup();
    const latinToRomanNumeralConvertSpy = jest
      .spyOn(converterMock, 'arabicToRomanNumeralConvert')
      .mockImplementation((input: number) => {
        return `${input} converted`;
      });

    render(<Home />);

    const input = screen.getByLabelText('Input a number here:');

    await user.click(input);
    await user.keyboard('123');

    const output = screen.getByLabelText('Converted Roman Numeral:');

    expect(latinToRomanNumeralConvertSpy).toHaveBeenCalledWith(123);
    expect((output as HTMLInputElement).value).toBe('123 converted');
  });
});
