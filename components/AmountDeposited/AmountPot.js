import { useEffect, useState } from "react";
import { useWeb3Contract } from "react-moralis";
import { abi } from "../../constants/abi.js";
import { contractAddress } from "../../constants/contractAddress.js";
import { useMoralis } from "react-moralis";

export default function AmountPot() {
  const { isWeb3Enabled } = useMoralis();
  const { runContractFunction: PotBalance } = useWeb3Contract({
    abi: abi,
    contractAddress: contractAddress,
    functionName: "Pot",
    params: {},
  });

  const [PotBalancefromContract, setPotBalancefromContract] = useState("0");

  useEffect(() => {
    async function updateUI() {
      const PotAmountFromCall = await PotBalance();
      if (PotAmountFromCall !== undefined) {
        setPotBalancefromContract(PotAmountFromCall / 1000000000000000000);
        console.log(PotBalancefromContract);
      }
    }
    updateUI();
  }, []);

  return <>{PotBalancefromContract}</>;
}

// For params, use the "name" from the ABI input
