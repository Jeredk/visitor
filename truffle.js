// truffle.js config for klaytn.
const PrivateKeyConnector = require('connect-privkey-to-provider')
const NETWORK_ID = '1001' // Baobab Network 고유 ID
const GASLIMIT = '20000000'
const URL = 'https://api.baobab.klaytn.net:8651' // Baobab TestNET
const PRIVATE_KEY = '0x82c1ce41d655dca2be83492ba97290f170d459e2c6261d0ae3ba41e0a673a79c'
module.exports = {
    networks: {
        klaytn: {
            provider: new PrivateKeyConnector(PRIVATE_KEY, URL),
            network_id: NETWORK_ID,
            gas: GASLIMIT,
            gasPrice: null, // Baobab Network 에서 자동으로 값 지정
        }
    }
}