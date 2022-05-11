const resourceRental = artifacts.require("./ResourceRental.sol");

contract("ResourceRental", (accounts) => {
  before(async () => {
    this.resourceRental = await resourceRental.deployed();
  });

  it("deploys successfully", async () => {
    const address = await this.resourceRental.address;
    assert.notEqual(address, 0x0);
    assert.notEqual(address, "");
    assert.notEqual(address, null);
    assert.notEqual(address, undefined);
  });

  it("lists tasks", async () => {
    const taskCount = await this.resourceRental.taskCount();
    const task = await this.resourceRental.tasks(taskCount);
    assert.equal(task.id.toNumber(), taskCount.toNumber());
    assert.equal(task.content, "Check out dappuniversity.com");
    assert.equal(task.completed, false);
    assert.equal(taskCount.toNumber(), 1);
  });

  it("creates tasks", async () => {
    const result = await this.resourceRental.createTask("A new task");
    const taskCount = await this.resourceRental.taskCount();
    assert.equal(taskCount, 2);
    const event = result.logs[0].args;
    assert.equal(event.id.toNumber(), 2);
    assert.equal(event.content, "A new task");
    assert.equal(event.completed, false);
  });

  it("toggles task completion", async () => {
    const result = await this.resourceRental.toggleCompleted(1);
    const task = await this.resourceRental.tasks(1);
    assert.equal(task.completed, true);
    const event = result.logs[0].args;
    assert.equal(event.id.toNumber(), 1);
    assert.equal(event.completed, true);
  });
});
