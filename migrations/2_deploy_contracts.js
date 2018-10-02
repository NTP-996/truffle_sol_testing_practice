var TaskMaster = artifacts.require('../contracts/TaskMaster.sol')

module.exports = function (deployer) {
  deployer.deploy(TaskMaster)
}
