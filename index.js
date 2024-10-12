// 1. Declare customerName in global scope
var customerName = "bob"; // Global variable

// 2. Function to uppercase the customerName
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase(); // Modify the global customerName
}

// 3. Function to set bestCustomer
function setBestCustomer() {
    bestCustomer = "not bob"; // Declare bestCustomer in global scope
}

// 4. Function to overwrite bestCustomer
function overwriteBestCustomer() {
    bestCustomer = "maybe bob"; // Change the global bestCustomer
}

// 5. Declare leastFavoriteCustomer as a constant
const leastFavoriteCustomer = "modefaka"; // Constant for least favorite customer

// 6. Function to attempt to change leastFavoriteCustomer
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = "Donn"; // This will throw an error
}

