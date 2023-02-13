import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useMoralis } from "react-moralis";

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
        Contribute to the New Zealand Major Cities Risk Pool today!
        <Deposit />
      </div>
    </div>
  );
}
