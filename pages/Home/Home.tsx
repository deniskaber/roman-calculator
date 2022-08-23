import Head from 'next/head';
import { ChangeEvent, useState } from 'react';
import { useConvertedRomanNumeral } from '../../lib/hooks/useConvertedRomanNumeral';
import styles from './Home.module.css';

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

      <main className={styles['main-area']}>
        <div>
          <label className={styles['form-field']}>
            Input a number here:
            <input
              className={styles['number-input']}
              type="number"
              value={numberText}
              onChange={handleInputChange}
            />
          </label>
          {isInvalidInput && (
            <div className={styles['invalid-caption']}>
              value should be between {minPossibleValue} and {maxPossibleValue}
            </div>
          )}
        </div>

        <label className={styles['form-field']}>
          Converted Roman Numeral:
          <input
            className={styles['number-input']}
            value={romanNumber}
            readOnly
          />
        </label>
      </main>
    </div>
  );
}
