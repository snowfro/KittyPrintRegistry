const KittyPrintRegistry = artifacts.require("KittyPrintRegistry");

module.exports = function(deployer) {
  deployer.deploy(KittyPrintRegistry, "0x89447f2Ca722481d1399ae08b4d7E9471883F6c8" , "250000000000000000", "100000000000000000", "1000000000000000000", "300000000000000000", "110000000000000000", "1000000000000000000", "http://kpr.artblocks.io/details/","Kitty Print Registry","KPR");
};
