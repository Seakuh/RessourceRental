const ResourceRental = artifacts.require("ResourceRental");

module.exports = function (deployer) {
  deployer.deploy(ResourceRental());
};
