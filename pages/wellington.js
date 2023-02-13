import ReqWel from "../components/ReqWel";
import Wel from "../components/Wel";
import WelData from "../components/WelData";

import Withdraw from "../components/Withdraw";

export default function Wellington() {
  return (
    <div className="flex h-full flex-col">
      <div className="py-2 px-12">
        <WelData />
      </div>
      <div className="py-2 px-12">
        <Wel />
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
