const HDWalletProvider = require("@truffle/hdwallet-provider");
const web3 = require("web3");
require('dotenv').config()
const NFT_CONTRACT_ABI = require('../abi.json')
const argv = require('minimist')(process.argv.slice(2));
const fs = require('fs')

async function main() {
    const configs = JSON.parse(fs.readFileSync('./configs/' + argv._ + '.json').toString())
    const provider = new HDWalletProvider(
        configs.owner_mnemonic,
        configs.provider
    );
    const web3Instance = new web3(provider);

    const contract = new web3Instance.eth.Contract(
        NFT_CONTRACT_ABI,
        configs.contract_address
    );
    try {
        console.log('Notarizing hash..')
        result = await contract.methods.notarize("Hash").send({ from: configs.owner_address });
        console.log(result)
    } catch (e) {
        console.log('Blockchain errored!')
        console.log(e.message)
    }

    process.exit();

}

if (argv._ !== undefined) {
    main();
} else {
    console.log('Provide a deployed contract first.')
}