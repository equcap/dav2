import { useEffect, useState } from "react";
import { useWeb3Contract } from "react-moralis";
import { abi } from "../../constants/abi.js";
import { contractAddress } from "../../constants/contractAddress.js";
import { useMoralis } from "react-moralis";

export default function AmountChr() {
  const { isWeb3Enabled } = useMoralis();
  const { runContractFunction: ChrFunderBalances } = useWeb3Contract({
    abi: abi,
    contractAddress: contractAddress,
    functionName: "FunderBalances",
    params: { "": "0x81F28fA9429b905ed51Bc02f34a4D39a00829889" },
  });

  const [ChrFunderBalancesfromContract, setChrFunderBalancesfromContract] =
    useState("0");

  useEffect(() => {
    async function updateUI() {
      const ChrAmountFromCall = await ChrFunderBalances();
      if (ChrAmountFromCall !== undefined) {
        setChrFunderBalancesfromContract(
          ChrAmountFromCall / 1000000000000000000
        );
        console.log(ChrFunderBalancesfromContract);
      }
    }
    updateUI();
  }, []);

  return <>{ChrFunderBalancesfromContract}</>;
}

// For params, use the "name" from the ABI input
