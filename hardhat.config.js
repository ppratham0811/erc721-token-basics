require("@nomiclabs/hardhat-waffle");
require("dotenv").config({ path: ".env" });

const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY;
const RINKEBY_KEY = process.env.RINKEBY_KEY;

module.exports = {
    solidity: "0.8.4",
    networks: {
        rinkeby: {
            url: ALCHEMY_API_KEY,
            accounts: [RINKEBY_KEY],
        },
    },
};
