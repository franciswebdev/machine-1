import { Box } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { LinkBox } from 'styles/Globals'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Abandon all hope all ye who enter here</title>
        <meta name="description" content="Frodolicious Page`" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Frodolicious Test Machine
        </h1>

        <div className={styles.grid}>
          <Link href="/redux/typing-app">
            <LinkBox className={styles.card}>
              <h2>Redux</h2>
              <p>Typing app using state machine using Redux</p>
            </LinkBox>
          </Link>
          <Link href="/recoil">
            <LinkBox className={styles.card}>
              <h2>Recoil</h2>
              <p>State machine using Recoil</p>
            </LinkBox>
          </Link>
        </div>

        <Box display="inline-flex" sx={{ '> *': { mx: 1 }}}>
          <a href="https://frodo.hashnode.dev/">tech blog at hashnode</a>
          <a href="https://twitter.com/thatfrontend">twitter@thatfrontend </a>
        </Box>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
