import { FC, useState } from "react";
import styles from "../styles/Home.module.css";
import * as Web3 from "@solana/web3.js";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";

// 6np1VP2PyMqFLboHEkQJeFJYZnH5vfoDNXDjWsCpzkHP

export const SendSolForm: FC = () => {
  const [txSig, setTxSig] = useState("");
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  const link = () => {
    return txSig
      ? `https://explorer.solana.com/tx/${txSig}?cluster=devnet`
      : "";
  };

  const sendSol = (event) => {
    event.preventDefault();
    if (!connection || !publicKey) {
      alert("Please connect your wallet first lol");
      return;
    }

    const toPubKey = new Web3.PublicKey(event.target.recipient.value);
    const amountToSend = event.target.amount.value;
    

    const transaction = new Web3.Transaction();
    const instruction = Web3.SystemProgram.transfer({
      fromPubkey: publicKey,
      toPubkey: toPubKey,
      lamports: Web3.LAMPORTS_PER_SOL * amountToSend,
    });

    transaction.add(instruction);
    // below funtion returns the transaction signature
    sendTransaction(transaction, connection).then((sig) => {
      setTxSig(sig);
    });
    //   event.preventDefault();
    //   console.log(
    // `Send ${event.target.amount.value} SOL to ${event.target.recipient.value}`
    //   );
  };

  return (
    <div>
      <form onSubmit={sendSol} className={styles.form}>
        <label htmlFor="amount">Amount (in SOL) to send:</label>
        <input
          id="amount"
          type="text"
          className={styles.formField}
          placeholder="e.g. 0.1"
          required
        />
        <br />
        <label htmlFor="recipient">Send SOL to:</label>
        <input
          id="recipient"
          type="text"
          className={styles.formField}
          placeholder="e.g. 4Zw1fXuYuJhWhu9KLEYMhiPEiqcpKd6akw3WRZCv84HA"
          required
        />
        <button type="submit" className={styles.formButton}>
          Send
        </button>
      </form>
      <div>
        <p>View your transaction on </p>
        <a href={link()}>Solana Explorer</a>
      </div>
    </div>
  );
};
