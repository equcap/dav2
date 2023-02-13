import ReqAuc from "../components/ReqAuc";
import Auc from "../components/Auc";
import AucData from "../components/AucData";

import Withdraw from "../components/Withdraw";

export default function Auckland() {
  return (
    <div className="flex h-full flex-col">
      <div className="py-2 px-12">
        <AucData />
      </div>
      <div className="py-2 px-12">
        <Auc />
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
