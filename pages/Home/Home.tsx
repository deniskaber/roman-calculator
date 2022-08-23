import Head from 'next/head';
import { ChangeEvent, useState } from 'react';
import { useConvertedRomanNumeral } from '../../lib/hooks/useConvertedRomanNumeral';
import styles from './Home.module.css';
import { FormField } from '@/components/FormField';

export default function Home() {
  const [numberText, setNumberText] = useState('');

  const { isValid, romanNumber, minPossibleValue, maxPossibleValue } =
    useConvertedRomanNumeral(parseInt(numberText, 10));

  const isInvalidInput = !isValid && numberText.length > 0;

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNumberText(e.target.value);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Latin to Roman Numerals Calculator App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1>Arabic to Roman Numerals converter</h1>
      </header>

      <main className={styles['main-area']}>
        <FormField
          className={styles['form-field']}
          type="number"
          value={numberText}
          labelText="Input a number here:"
          isInvalid={isInvalidInput}
          validationMessage={`value should be between ${minPossibleValue} and ${maxPossibleValue}`}
          onChange={handleInputChange}
        />

        <FormField
          className={styles['form-field']}
          value={romanNumber}
          labelText="Converted Roman Numeral:"
          readOnly
        />
      </main>
    </div>
  );
}
