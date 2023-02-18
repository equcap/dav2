import { useEffect, useState } from "react";
import { useWeb3Contract } from "react-moralis";
import { abi } from "../../constants/abi.js";
import { contractAddress } from "../../constants/contractAddress.js";
import { useMoralis } from "react-moralis";

export default function ReadChr() {
  const { isWeb3Enabled } = useMoralis();
  const { runContractFunction: Chr24 } = useWeb3Contract({
    abi: abi,
    contractAddress: contractAddress,
    functionName: "Chr24",
    params: {},
  });

  const [Chr24fromContract, setChr24fromContract] = useState("0");

  useEffect(() => {
    if (isWeb3Enabled) {
      async function updateUI() {
        const Chr24FromCall = (await Chr24()).toString();
        setChr24fromContract(Chr24FromCall / 100);
        console.log(Chr24fromContract);
      }
      updateUI();
    }
  }, [isWeb3Enabled]);

  return (
    <div className="text-black font-bold py-2 ml-auto">
      Current Christchurch reading stored on blockchain: {Chr24fromContract}mm
    </div>
  );
}
