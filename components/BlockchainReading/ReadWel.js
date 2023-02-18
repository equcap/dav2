import { useEffect, useState } from "react";
import { useWeb3Contract } from "react-moralis";
import { abi } from "../../constants/abi.js";
import { contractAddress } from "../../constants/contractAddress.js";
import { useMoralis } from "react-moralis";

export default function ReadWel() {
  const { isWeb3Enabled } = useMoralis();
  const { runContractFunction: Wel24 } = useWeb3Contract({
    abi: abi,
    contractAddress: contractAddress,
    functionName: "Wel24",
    params: {},
  });

  const [Wel24fromContract, setWel24fromContract] = useState("0");

  useEffect(() => {
    async function updateUI() {
      const Wel24FromCall = (await Wel24()).toString();
      setWel24fromContract(Wel24FromCall / 100);
      console.log(Wel24fromContract);
    }
    updateUI();
  }, []);

  return (
    <div className="text-black font-bold py-2 ml-auto">
      Current Wellington reading stored on blockchain: {Wel24fromContract}
      mm
    </div>
  );
}
