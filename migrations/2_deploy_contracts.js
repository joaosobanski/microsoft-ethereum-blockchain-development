// var TodoList = artifacts.require("./TodoList.sol");

// module.exports = function (deployer) {
//     deployer.deploy(TodoList);
// };

const hello = artifacts.require('./HelloWorld');
module.exports = function (deployer) {
    deployer.deploy(hello);
};