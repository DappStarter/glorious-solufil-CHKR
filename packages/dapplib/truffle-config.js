require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'guess gloom symptom spot warrior ridge remind hospital hockey private olympic suggest'; 
let testAccounts = [
"0x17cec160748a9c2f964db05931f068e2929badba52a860a75d52add2835bd23f",
"0xfaa763f6a14ad4488432f7106961d57ecb2eddefc6251aa0366b177874d16a39",
"0x8d774a7c1368ac6457a72886c1948c910504b94dbce96f471a3f6ef01e653da4",
"0xe948109257de8c31f91d66c9c3e6ad636f6dfc36fa7a313078868844bb9f8ad9",
"0xd7892beaf84c92c8b3c9c3a1cfde71e7aabdccfbdba307029228a8d34b7155ec",
"0x19d0cbbbaad560d02c802ea0ccc8098a0580b5467f65e839bbe91cce43a42391",
"0xe2bf1bb8c9a0f857154f9f1d5aff6f25824e15b965199b8e98e09dd35c01f5c2",
"0x3ebaf7854a90fb99ed610c79391dfa2a8ed9f144279fc7c25694fc60c3408f93",
"0x33254fa76a69922fc8adcdd834494aeb8dd8878e0360079975d6886ad82e66f4",
"0x2e53b49bc82074915111ef5acfa1e7635257d44c1640081b83bdf584ae5f5475"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


