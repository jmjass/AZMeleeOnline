import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Todo from '../components/todo.js'
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  IconButton,
  useBreakpointValue,
} from '@chakra-ui/react'
import { FiMenu } from 'react-icons/fi'
import NavBar from '../components/navbar.js'


export default function Home() {
  const isDesktop = useBreakpointValue({ base: false, lg: true })
  return (
    <div className={styles.container}>
      <Head>
        <title>Arizona Melee</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <NavBar />
      </header>
      <main>
      
      <Todo />
      <Button colorScheme="teal">Test</Button>
        <h1 className={styles.title}>
          Welcome to <a href="https://discord.gg/SHrFCeZBDe">Arizona Melee!</a>
        </h1>

        <p className={styles.description}>
          <code>Best State Rest State</code>
        </p>

        <div className={styles.grid}>
          <a href="https://joemama0s.github.io/AZSlippiLeaderboard/#/" className={styles.card}>
            <h3>Slippi Ranked Stats &rarr;</h3>
            <p>Climb the rankings to become the best in the state!</p>
          </a>

          <a href="https://discord.gg/SHrFCeZBDe" className={styles.card}>
            <h3>Arizona Discord &rarr;</h3>
            <p>Join the community forum!</p>
          </a>

        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
        p {
          color: gray;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
