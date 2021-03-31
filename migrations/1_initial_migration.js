const Migrations = artifacts.require("Migrations");
const Soku = artifacts.require("Soku");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(Soku, "0x0014D8a0c42E5eC5D69B2B9190186C494E2a6905");
};
