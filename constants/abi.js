module.exports = {
  abi: [
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "_requestId",
          type: "bytes32",
        },
        {
          internalType: "bool",
          name: "_locationFound",
          type: "bool",
        },
        {
          internalType: "bytes",
          name: "_locationResult",
          type: "bytes",
        },
        {
          internalType: "bytes",
          name: "_Conditions",
          type: "bytes",
        },
      ],
      name: "callbackAuc",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "_requestId",
          type: "bytes32",
        },
        {
          internalType: "bool",
          name: "_locationFound",
          type: "bool",
        },
        {
          internalType: "bytes",
          name: "_locationResult",
          type: "bytes",
        },
        {
          internalType: "bytes",
          name: "_Conditions",
          type: "bytes",
        },
      ],
      name: "callbackChr",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "_requestId",
          type: "bytes32",
        },
        {
          internalType: "bool",
          name: "_locationFound",
          type: "bool",
        },
        {
          internalType: "bytes",
          name: "_locationResult",
          type: "bytes",
        },
        {
          internalType: "bytes",
          name: "_Conditions",
          type: "bytes",
        },
      ],
      name: "callbackWel",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "id",
          type: "bytes32",
        },
      ],
      name: "ChainlinkCancelled",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "id",
          type: "bytes32",
        },
      ],
      name: "ChainlinkFulfilled",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "id",
          type: "bytes32",
        },
      ],
      name: "ChainlinkRequested",
      type: "event",
    },
    {
      inputs: [],
      name: "deposit",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [],
      name: "requestAuckland",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "requestChristchurch",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "requestWellington",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "withdraw",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "Auc24",
      outputs: [
        {
          internalType: "uint24",
          name: "",
          type: "uint24",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "Chr24",
      outputs: [
        {
          internalType: "uint24",
          name: "",
          type: "uint24",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      name: "FunderBalances",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "Pot",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "Wel24",
      outputs: [
        {
          internalType: "uint24",
          name: "",
          type: "uint24",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ],
};
