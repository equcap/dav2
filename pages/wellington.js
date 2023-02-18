import ReqWel from "../components/ReqUpdate/ReqWel";
import ReadWel from "../components/BlockchainReading/ReadWel";
import DataWel from "../components/BarCharts/DataWel";
import AmountWel from "../components/AmountDeposited/AmountWel";

import Withdraw from "../components/Withdraw";

export default function Wellington() {
  return (
    <div className="flex h-full flex-col">
      <div className="py-2 px-12">
        <DataWel />
      </div>
      <div className="text-black font-bold py-2 px-12">
        Amount Deposited to Wellington Wallet: <AmountWel />
        ETH
      </div>
      <div className="py-2 px-12">
        <ReadWel />
        <ReqWel />
      </div>
      <div className="py-2 px-12">
        If you control the Wellington wallet then you are able to begin a
        withdraw below!
        <Withdraw />
      </div>
    </div>
  );
}
