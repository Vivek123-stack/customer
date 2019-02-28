pragma solidity ^0.4.23;
// mykyc contract
contract KycSmartContract {

    struct Customer {
        string kycData;
        string oName;
    }

    
    Customer[] allCustomers;
    
    constructor() public {
        
    }
    
    function checkDeployed() public view returns(bool){
    return true;
    }
    function getDataHash(uint index) public view returns(bytes32) {
        return blockhash(index);
    }
    
    function addCustomer(string kycData,string oName) public {
        allCustomers.length ++;
        allCustomers[allCustomers.length-1] = Customer(kycData,oName);
    }
    
    function getCustomersCount() public view returns (uint){
        return allCustomers.length;
    }
   

    
    function getCustomerData(uint index) public view returns (string kycData,string oName){
       Customer storage c = allCustomers[index];
       return (c.kycData,c.oName);
    }
}