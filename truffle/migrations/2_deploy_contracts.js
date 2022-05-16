<<<<<<< Updated upstream
const ResourceRental = artifacts.require("ResourceRental");

module.exports = function (deployer) {
  deployer.deploy(ResourceRental);
=======
const ConvertLib = artifacts.require("ConvertLib");
const MetaCoin = artifacts.require("MetaCoin");
const Resource_Rental_Admin = artifacts.require("Resource_Rental_Admin.sol");

module.exports = function (deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, MetaCoin);
  deployer.deploy(MetaCoin);
>>>>>>> Stashed changes
};
