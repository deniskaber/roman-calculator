import romanNumeral from 'roman-numeral';

export const latinToRomanNumeralConvert = (latinNumber: number): string => {
  return romanNumeral.convert(latinNumber);
};
