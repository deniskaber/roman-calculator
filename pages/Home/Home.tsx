import Head from 'next/head';

import styles from './Home.module.css';
import { useState } from 'react';

export default function Home() {
  const [numberText, setNumberText] = useState('');

  return (
    <div className={styles.container}>
      <Head>
        <title>Latin to Roman Numerals Calculator App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <label>
          Input a Latin number here:
          <input
            className={styles['number-input']}
            value={numberText}
            onChange={(e) => setNumberText(e.target.value)}
          />
        </label>
      </main>
    </div>
  );
}
