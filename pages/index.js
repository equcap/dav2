import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useMoralis } from "react-moralis";

import AmountAuc from "../components/AmountDeposited/AmountAuc";
import AmountWel from "../components/AmountDeposited/AmountWel";
import AmountChr from "../components/AmountDeposited/AmountChr";
import AmountPot from "../components/AmountDeposited/AmountPot";

import Deposit from "../components/Deposit";

export default function Home() {
  return (
    <div class={styles.container}>
      <Head>
        <title>DonateAssist</title>
        <meta name="description" content="Flood insurance application" />
      </Head>
      <div className="py-8 px-8">
        Adverse weather events are a growing concern worldwide. Explore how our
        solution can help to plan ahead and mitigate impacts!
      </div>
      <div className="pb-4 px-8">
        DonateAssist allows participants to provide funding that is utilised in
        the event of an adverse event. With funding being provided rapidly to
        city authorities, money can be distrbuted to those in need for expenses
        such as shelter.
      </div>
      <div className="px-8">
        Contribute to the New Zealand Major Cities Risk Pool today! Current
        contract address on Goerli testnet:{" "}
        <a
          href="https://goerli.etherscan.io/address/0x230b5194441489aeeCe973b0036889b473b71245"
          target="_blank"
          rel="noopener noreferrer"
        >
          0x230b5194441489aeeCe973b0036889b473b71245
        </a>
        <Deposit />
      </div>
      <div className="text-black font-bold py-2 px-12">
        Amount Deposited to Auckland Wallet: <AmountAuc />
        ETH
      </div>
      <div className="text-black font-bold py-2 px-12">
        Amount Deposited to Wellington Wallet: <AmountWel />
        ETH
      </div>
      <div className="text-black font-bold py-2 px-12">
        Amount Deposited to Christchurch Wallet: <AmountChr />
        ETH
      </div>
      <div className="text-black font-bold py-2 px-12">
        Amount Deposited to Pot: <AmountPot />
        ETH
      </div>
      <div className="text-black font-bold py-2 px-12">
        Total Amount Deposited to the New Zealand Major Cities Risk Pool:{" "}
        {Number(<AmountAuc />) +
          Number(<AmountWel />) +
          Number(<AmountChr />) +
          Number(<AmountPot />)}
        ETH
      </div>
    </div>
  );
}
