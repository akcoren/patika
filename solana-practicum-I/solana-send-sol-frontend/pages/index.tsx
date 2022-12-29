import { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { AppBar } from '../components/AppBar'
import { SendSolForm } from '../components/SendSolForm'
import { CheckAccountBalance } from '../components/CheckAccountBalance'
import Head from 'next/head'

const Home: NextPage = (props) => {

  return (
    <div className={styles.App}>
      <Head>
        <title>Wallet-Adapter Example</title>
        <meta
          name="description"
          content="Wallet-Adapter Example"
        />
      </Head>
      <AppBar />
      <div className={styles.AppBody}>
        {/* <p>Display Balance Here</p> */}
        <CheckAccountBalance />
        <SendSolForm />
      </div>
    </div>
  );
}

export default Home;