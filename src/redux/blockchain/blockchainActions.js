// constants
import Web3EthContract from "web3-eth-contract";
import Web3 from "web3";
// log
import { fetchData } from "../data/dataActions";

const connectRequest = () => {
  return {
    type: "CONNECTION_REQUEST",
  };
};

const connectSuccess = (payload) => {
  return {
    type: "CONNECTION_SUCCESS",
    payload: payload,
  };
};

const connectFailed = (payload) => {
  return {
    type: "CONNECTION_FAILED",
    payload: payload,
  };
};

const updateAccountRequest = (payload) => {
  return {
    type: "UPDATE_ACCOUNT",
    payload: payload,
  };
};

export const isWalletConnected = async () => {
  const { ethereum } = window;

  const abiResponse = await fetch("/config/abi.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  const abi = await abiResponse.json();

  const configResponse = await fetch("/config/config.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  const CONFIG = await configResponse.json();
  Web3EthContract.setProvider(ethereum);
  let web3 = new Web3(ethereum);

  const account = await web3.eth.getAccounts().catch(e=>console.log(`Failed to get accounts! No MetaMask installed?`));
  // If MetaMask not installed, fail
  if(!account) {
    return -1
  }
  
  const contract = new Web3EthContract(
    abi,
    CONFIG.CONTRACT_ADDRESS
  );
  // console.log(contract);
  // console.log(account);

  const isConnected = account != null && account.length > 0;
  
  return {contract, account, web3, isConnected};
  // {account, contract, web3, true/false}
}

// export const isWalletConnected = async () => {
//   return async (dispatch) => {
//     dispatch(connectRequest());
//     const { ethereum } = window;

//     let web3 = new Web3(ethereum);

//     const account = await web3.eth.getAccounts();
//     dispatch(
//       connectSuccess({
//         account: account,
//         smartContract: null,
//         web3: web3,
//       })
//     );
//     return account != null && account.length > 0;
//   };
// }

export const connect = () => {
  return async (dispatch) => {
    dispatch(connectRequest());
    const abiResponse = await fetch("/config/abi.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const abi = await abiResponse.json();
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const CONFIG = await configResponse.json();
    const { ethereum } = window;
    const metamaskIsInstalled = ethereum && ethereum.isMetaMask;
    if (metamaskIsInstalled) {
      Web3EthContract.setProvider(ethereum);
      let web3 = new Web3(ethereum);
      try {
        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        })
        const networkId = await ethereum.request({
          method: "net_version",
        });
        if (networkId == CONFIG.NETWORK.ID) {
          const SmartContractObj = new Web3EthContract(
            abi,
            CONFIG.CONTRACT_ADDRESS
          );
          dispatch(
            connectSuccess({
              account: accounts[0],
              smartContract: SmartContractObj,
              web3: web3,
            })
          );
          // Add listeners start
          ethereum.on("accountsChanged", (accounts) => {
            dispatch(updateAccount(accounts[0]));
          });
          ethereum.on("chainChanged", () => {
            window.location.reload();
          });
          // Add listeners end
        } else {
          dispatch(connectFailed(`Change network to ${CONFIG.NETWORK.NAME}.`));
        }
      } catch (err) {
        if(err && err.code && err.code == -32002) {
          dispatch(connectFailed("Check your MetaMask because a connection request is already pending!"))
          return -1
        } else {
          dispatch(connectFailed("Something went wrong."));
        }
      }
    } else {
      dispatch(connectFailed("Install Metamask."));
    }
  };
};

export const updateAccount = (account) => {
  return async (dispatch) => {
    dispatch(updateAccountRequest({ account: account }));
    dispatch(fetchData(account));
  };
};
