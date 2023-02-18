import ReqChr from "../components/ReqUpdate/ReqChr";
import ReadChr from "../components/BlockchainReading/ReadChr";
import DataChr from "../components/BarCharts/DataChr";
import AmountChr from "../components/AmountDeposited/AmountChr";

import Withdraw from "../components/Withdraw";

export default function Christchurch() {
  return (
    <div className="flex h-full flex-col">
      <div className="py-2 px-12">
        <DataChr />
      </div>
      <div className="text-black font-bold py-2 px-12">
        Amount Deposited to Christchurch Wallet: <AmountChr />
        ETH
      </div>
      <div className="py-2 px-12">
        <ReadChr />
        <ReqChr />
      </div>
      <div className="py-2 px-12">
        If you control the Christchurch wallet then you are able to begin a
        withdraw below!
        <Withdraw />
      </div>
    </div>
  );
}
