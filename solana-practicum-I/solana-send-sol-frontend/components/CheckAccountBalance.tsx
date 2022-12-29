import {useConnection, useWallet} from '@solana/wallet-adapter-react'
import { FC, useEffect, useState } from 'react'
import web3 from '@solana/web3.js'
import styles from '../styles/Home.module.css'

// 6np1VP2PyMqFLboHEkQJeFJYZnH5vfoDNXDjWsCpzkHP

export const CheckAccountBalance: FC = () => {
    const [balance, setBalance] = useState(0) //0. state icin soldaki degeri, sagdaki degeri atadigim function
    const { connection } = useConnection();
    const { publicKey } = useWallet();

    useEffect(() => {

        // check wallet
        if (!connection || !publicKey) return;

        connection.getAccountInfo(publicKey).then((info) => {
            setBalance(info.lamports)
        })
        
    }, [connection,publicKey])
    // useEffect square bracket icindeki sey degisince tekrar calisiyor.


    return (
        <div>
            SOL Balance is {balance}
        </div>
    )
}