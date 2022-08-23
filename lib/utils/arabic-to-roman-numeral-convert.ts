import romanNumeral from 'roman-numeral';

export const arabicToRomanNumeralConvert = (latinNumber: number): string => {
  return romanNumeral.convert(latinNumber);
};
