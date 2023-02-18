import { useEffect, useState } from "react";
import { useWeb3Contract } from "react-moralis";
import { abi } from "../../constants/abi.js";
import { contractAddress } from "../../constants/contractAddress.js";
import { useMoralis } from "react-moralis";

export default function AmountWel() {
  const { isWeb3Enabled } = useMoralis();
  const { runContractFunction: WelFunderBalances } = useWeb3Contract({
    abi: abi,
    contractAddress: contractAddress,
    functionName: "FunderBalances",
    params: { "": "0xA2c1a145BcD3601F89f7522EB79b7e7a03625bEa" },
  });

  const [WelFunderBalancesfromContract, setWelFunderBalancesfromContract] =
    useState("0");

  useEffect(() => {
    async function updateUI() {
      const WelAmountFromCall = await WelFunderBalances();
      if (WelAmountFromCall !== undefined) {
        setWelFunderBalancesfromContract(
          WelAmountFromCall / 1000000000000000000
        );
        console.log(WelFunderBalancesfromContract);
      }
    }
    updateUI();
  }, []);

  return <>{WelFunderBalancesfromContract}</>;
}

// For params, use the "name" from the ABI input
