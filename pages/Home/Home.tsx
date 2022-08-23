import Head from 'next/head'

import styles from './Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Roman Numerals Calculator App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        Content
      </main>
    </div>
  )
}
