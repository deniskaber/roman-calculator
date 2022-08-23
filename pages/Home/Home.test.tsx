import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from './Home';
import * as converterMock from '../../lib/utils/latin-to-roman-numeral-convert';

jest.mock('../../lib/utils/latin-to-roman-numeral-convert');

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
    const latinToRomanNumeralConvertSpy = jest
      .spyOn(converterMock, 'latinToRomanNumeralConvert')
      .mockImplementation((input: number) => {
        return `${input} converted`;
      });

    render(<Home />);

    const input = screen.getByLabelText('Input a Latin number here:');

    await user.click(input);
    await user.keyboard('123');

    const output = screen.getByLabelText('Your converted Roman Numeral:');

    expect(latinToRomanNumeralConvertSpy).toHaveBeenCalledWith(123);
    expect((output as HTMLInputElement).value).toBe('123 converted');
  });
});
