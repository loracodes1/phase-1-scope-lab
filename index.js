var customerName ="bob"

 function upperCaseCustomerName(){
    let upperCustomerName = customerName.toUpperCase()
    return customerName.toUpperCase()
 }
 console.log(upperCaseCustomerName())

 function setBestCustomer (){
    bestCustomer = "not bob" //variables created without a const, let and var keywords are always globally scoped, regardless of where they sit in your code
 }
