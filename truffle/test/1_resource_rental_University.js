const ResourceRentalUniversity = artifacts.require("ResourceRentalUniversity");

contract("University", (accounts) => {
  it("should create a contract where the university is owner", async () => {
    const resourceRentalUniversityInstance =
      await ResourceRentalUniversity.deployed();
    const university =
      await resourceRentalUniversityInstance.getUniversity.call(accounts[0]);

    console.log(university);

    // assert.equal();
  });
  it("should call a function that depends on a linked library", async () => {
    console.log("test");
  });
});
