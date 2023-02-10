require("dotenv").config();
const { ethers } = require("ethers")


const provider = new ethers.provider.WebSocketProvider(proces.env.WSS_INFURA_URL)

const inspectTransactions = async () => {
    const {transactions} = await provider.getBlockWithTransactions(blockNuber)
    console.log(`Block# ${blockNumber}\n`)

}

inspectBlock()

// async function main () {
//     const WsProvider = new ethers.providers.WebSocketProvider(process.env.WSS_INFURA_URL);
    
//     WsProvider.on("pending", (tx) => {
//       WsProvider.getTransaction(tx).then(function (transaction) {
//         console.log(transaction.address);
//       });
//     });
//   }
//   main()


  