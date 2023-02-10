require("dotenv").config();
const { ethers } = require("ethers")


const provider = new ethers.providers.WebSocketProvider(process.env.WSS_ALCHEMY_URL)

const inspectBlock = async () => {
    const blockNumber = await provider.getBlockNumber()
    console.log(`Block# ${blockNumber}\n`)

    const blockInfo = await provider.getBlock(blockNumber)
    

    inspectTransaction(blockNumber)
}

const inspectTransaction = async(blockNumber) => {
    const {transactions} = await provider.getBlockWithTransactions(blockNumber)
    
    transactions.forEach(function(transactions) {
        
        const big_number = transactions.value._hex
        const whole_num = big_number.toString(10)
        const readable_num = whole_num/(10**18)
        
        if (readable_num > 1){
            console.log(transactions.hash)
            console.log(readable_num)
        }
        
    })

}


inspectBlock()