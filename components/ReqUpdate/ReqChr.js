import { useWeb3Contract } from "react-moralis";
import { abi } from "../../constants/abi.js";
import { contractAddress } from "../../constants/contractAddress.js";

export default function ReqChr() {
  const { runContractFunction: RequestChristchurch } = useWeb3Contract({
    abi: abi,
    contractAddress: contractAddress,
    functionName: "requestChristchurch",
    params: {},
  });

  return (
    <div>
      <button
        className="bg-green-500/50        hover:bg-green-700/50 text-black font-bold py-2 px-4 rounded ml-auto"
        onClick={() => RequestChristchurch()}
      >
        Request updated Christchurch reading
      </button>
    </div>
  );
}
