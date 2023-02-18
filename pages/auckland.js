import ReqAuc from "../components/ReqUpdate/ReqAuc";
import ReadAuc from "../components/BlockchainReading/ReadAuc";
import DataAuc from "../components/BarCharts/DataAuc";
import AmountAuc from "../components/AmountDeposited/AmountAuc";

import Withdraw from "../components/Withdraw";

export default function Auckland() {
  return (
    <div className="flex h-full flex-col">
      <div className="py-2 px-12">
        <DataAuc />
      </div>
      <div className="text-black font-bold py-2 px-12">
        Amount Deposited to Auckland Wallet: <AmountAuc />
        ETH
      </div>
      <div className="py-2 px-12">
        <ReadAuc />
        <ReqAuc />
      </div>
      <div className="py-2 px-12">
        If you control the Auckland wallet then you are able to begin a withdraw
        below!
        <Withdraw />
      </div>
    </div>
  );
}
