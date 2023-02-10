require("dotenv").config();
const { ethers } = require("ethers")

const provider = new ethers.providers.WebSocketProvider(process.env.WSS_INFURA_URL)

const getPending = async () => {
    provider.on("pending", async (txhash) => {

        const transaction = await provider.getTransaction(txhash)
       
        // const big_number = transaction.value._hex
        // const whole_num = big_number.toString(10)
        // const readable_num = whole_num/(10**18)
        
        // if (readable_num > 1){
        //     console.log(transaction.hash)
        //     console.log(readable_num)
        // }

        if (transaction != null) {
            
            gasPrice = transaction.gasPrice
            convertedGasPrice = ethers.utils.formatEther(gasPrice)
            value = transaction.value._hex
            convertedValue = ethers.utils.formatEther(value)
            if (convertedValue > 0.5){
                console.log(`Confirmation: ${transaction.confirmations} \n Hash:${transaction.hash} \n Gas Price: ${convertedGasPrice} \n Value: ${convertedValue} `)
            }
            
        }
    })
    
}

getPending()