require('dotenv').config()

const Web3 = require('web3')
const web3 = new Web3(new Web3.providers.WebsocketProvider(process.env.WSS_INFURA_URL))


web3.eth.subscribe('newBlockHeaders')
.on('data', async block => {
    console.log(`Block#: ${block.number} `)
})
.on('error', error => {console.log(error)})