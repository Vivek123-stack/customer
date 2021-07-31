function getAddress() {
    return '0xfE86C140b7860ba018c8587e848EAa6048666686';
}
function getAbi() {
    return '[ { "constant": true, "inputs": [ { "name": "index", "type": "uint256" } ], "name": "getCustomerData", "outputs": [ { "name": "name", "type": "bytes" }, { "name": "email", "type": "bytes" }, { "name": "kycData", "type": "bytes" }, { "name": "oName", "type": "bytes" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "getCustomersCount", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "checkDeployed", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "index", "type": "uint256" } ], "name": "getDataHash", "outputs": [ { "name": "", "type": "bytes32" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "name", "type": "bytes" }, { "name": "email", "type": "bytes" }, { "name": "kycData", "type": "bytes" }, { "name": "oName", "type": "bytes" } ], "name": "addCustomer", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" } ]';
}