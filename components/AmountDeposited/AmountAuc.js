import { useEffect, useState } from "react";
import { useWeb3Contract } from "react-moralis";
import { abi } from "../../constants/abi.js";
import { contractAddress } from "../../constants/contractAddress.js";
import { useMoralis } from "react-moralis";

export default function AmountAuc() {
  const { isWeb3Enabled } = useMoralis();
  const { runContractFunction: AucFunderBalances } = useWeb3Contract({
    abi: abi,
    contractAddress: contractAddress,
    functionName: "FunderBalances",
    params: { "": "0x3e2bf52997381d2333a7d3d391ac904e472d1103" },
  });

  const [AucFunderBalancesfromContract, setAucFunderBalancesfromContract] =
    useState("0");

  useEffect(() => {
    async function updateUI() {
      const AucAmountFromCall = await AucFunderBalances();
      if (AucAmountFromCall !== undefined) {
        setAucFunderBalancesfromContract(
          AucAmountFromCall / 1000000000000000000
        );
        console.log(AucFunderBalancesfromContract);
      }
    }
    updateUI();
  }, []);

  return <>{AucFunderBalancesfromContract}</>;
}

// For params, use the "name" from the ABI input
