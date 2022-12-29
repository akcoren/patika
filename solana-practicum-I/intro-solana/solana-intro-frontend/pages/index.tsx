import type { NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import AddressForm from "../components/AddressForm";
import * as web3 from "@solana/web3.js";
import { addAbortSignal } from "stream";
import * as bs58 from "bs58";

const toKeypair = web3.Keypair.fromSecretKey(
  Uint8Array.from([
    174, 47, 154, 16, 202, 193, 206, 113, 199, 190, 53, 133, 169, 175, 31, 56,
    222, 53, 138, 189, 224, 216, 117, 173, 10, 149, 53, 45, 73, 251, 237, 246,
    15, 185, 186, 82, 177, 240, 148, 69, 241, 227, 167, 80, 141, 89, 240, 121,
    121, 35, 172, 247, 68, 251, 226, 218, 48, 63, 176, 109, 168, 89, 238, 135,
  ])
);
const toPublicKey = toKeypair.publicKey;
const toSecretKey = toKeypair.secretKey;

// Create a new keypair
const ownerKeypair = web3.Keypair.generate();

// Get the public key (address)
const publicKey = ownerKeypair.publicKey;

// Get the secret key
const secretKey = ownerKeypair.secretKey;

console.log(publicKey.toBase58());
console.log(secretKey);


const Home: NextPage = () => {
  const [balance, setBalance] = useState(0);
  const [address, setAddress] = useState("");
  const [isExecutable, setIsExecutable] = useState(false);

  const addressSubmittedHandler = (address: string) => {
    // callProgram
    try {
      const key = new web3.PublicKey(address);
      setAddress(key.toBase58());

      const connection = new web3.Connection(web3.clusterApiUrl("devnet"));

      connection.getAccountInfo(key).then((info) => {
        setIsExecutable(info?.executable ?? false);
      });

      connection.getBalance(key).then((balance) => {
        setBalance(balance / web3.LAMPORTS_PER_SOL);
      });
    } catch (error) {
      setAddress("Invalid Address");
      setBalance(0);
      alert(error);
    }
  };

  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <p>Start Your Solana Journey</p>
        <AddressForm handler={addressSubmittedHandler} />
        <p>{`Address: ${address}`}</p>
        <p>{`Balance: ${balance} SOL`}</p>
        <p>{`Is it executable?: ${isExecutable ? "yes" : "no"}`}</p>
      </header>
    </div>
  );
};

export default Home;
