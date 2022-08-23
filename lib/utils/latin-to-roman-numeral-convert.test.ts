import { latinToRomanNumeralConvert } from './latin-to-roman-numeral-convert';

const testCases: { arab: number; roman: string }[] = [
  {
    arab: 12,
    roman: 'XII',
  },
  {
    arab: 201,
    roman: 'CCI',
  },
  {
    arab: 0,
    roman: '',
  },
  {
    arab: 1,
    roman: 'I',
  },
  {
    arab: 9,
    roman: 'IX',
  },
  {
    arab: 10,
    roman: 'X',
  },
  {
    arab: 13,
    roman: 'XIII',
  },
  {
    arab: 50,
    roman: 'L',
  },
  {
    arab: 1234,
    roman: 'MCCXXXIV',
  },
  {
    arab: 2999,
    roman: 'MMCMXCIX',
  },
  {
    arab: 3000,
    roman: 'MMM',
  },
  {
    arab: 3001,
    roman: 'MMMI',
  },
];

describe('arabToRomanNumeralConvert', () => {
  it.each(testCases)(
    'converts arab number "$arab" to a Roman Numeral "$roman"',
    ({ arab, roman }) => {
      expect(latinToRomanNumeralConvert(arab)).toBe(roman);
    },
  );
});
