import ReqChr from "../components/ReqChr";
import Chr from "../components/Chr";
import ChrData from "../components/ChrData";

import Withdraw from "../components/Withdraw";

export default function Chistchurch() {
  return (
    <div className="flex h-full flex-col">
      <div className="py-2 px-12">
        <ChrData />
      </div>
      <div className="py-2 px-12">
        <Chr />
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
