/**
 * Use this file to configure your truffle project. It's seeded with some
 * common settings for different networks and features like migrations,
 * compilation and testing. Uncomment the ones you need or modify
 * them to suit your project as necessary.
 *
 * More information about configuration can be found at:
 *
 * trufflesuite.com/docs/advanced/configuration
 *
 * To deploy via Infura you'll need a wallet provider (like @truffle/hdwallet-provider)
 * to sign your transactions before they're sent to a remote public node. Infura accounts
 * are available for free at: infura.io/register.
 *
 * You'll also need a mnemonic - the twelve word phrase the wallet uses to generate
 * public/private key pairs. If you're publishing your code to GitHub make sure you load this
 * phrase from a file you've .gitignored so it doesn't accidentally become public.
 *
 */

// const HDWalletProvider = require('@truffle/hdwallet-provider');
// const infuraKey = "fj4jll3k.....";
//
// const fs = require('fs');
// const mnemonic = fs.readFileSync(".secret").toString().trim();

const HDWalletProvider = require("@truffle/hdwallet-provider");
require('dotenv').config();

module.exports = {
    networks: {
        development: {
            host: "127.0.0.1",
            port: 8545,
            network_id: "*"
        },
        test: {
            host: "localhost",
            port: 8545,
            network_id: "*"
        },
        bsc: {
            provider: function() {
                return new HDWalletProvider(
                    process.env.MNEMONIC,
                    `https://bsc-dataseed1.binance.org`
                )
            },
            network_id: 56
        },
        
        testnet: {
            provider: function() {
                return new HDWalletProvider(
                    process.env.MNEMONIC,
                    `https://data-seed-prebsc-1-s1.binance.org:8545`
                )
            },
            network_id: 97
        }
    },

    compilers: {
        solc: {
            version: "0.5.16",
            optimizer: {
                enabled: true,
                runs: 200
            }
        }
    },

    plugins: [
        'truffle-plugin-verify'
    ],

    api_keys: {
      bscscan: process.env.BSCSCAN_API_KEY
    }
};
