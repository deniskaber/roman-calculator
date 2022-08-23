import Head from 'next/head';
import CalculatorForm from '@/components/CalculatorForm';
import styles from '@/styles/Home.module.css';

export default function Home() {
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
        <CalculatorForm />
      </main>
    </div>
  );
}
