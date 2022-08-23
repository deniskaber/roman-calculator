import { arabicToRomanNumeralConvert } from '../utils/arabic-to-roman-numeral-convert';

const MIN_POSSIBLE_NUMBER = 1;
const MAX_POSSIBLE_NUMBER = 1000;

const isValidValue = (value: number) =>
  value >= MIN_POSSIBLE_NUMBER && value <= MAX_POSSIBLE_NUMBER;

export const useConvertedRomanNumeral = (arabicNumber: number) => {
  const isValid = isValidValue(arabicNumber);
  const romanNumber = isValid ? arabicToRomanNumeralConvert(arabicNumber) : '';

  return {
    isValid,
    romanNumber,
    minPossibleValue: MIN_POSSIBLE_NUMBER,
    maxPossibleValue: MAX_POSSIBLE_NUMBER,
  };
};
