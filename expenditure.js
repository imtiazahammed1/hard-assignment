// functioned number 1
//  Expenses and Balance Function

function updatevalue() {
    const error = document.getElementById('number');
    if (isNaN(document.getElementById("income-input").value)) {

        error.innerHTML = "Please enter a valid number";
    }
    else {
        error.textContent = "";
    }
    const incomeInput = document.getElementById('income-input');
    const incomeValue = incomeInput.value;
    const product = parseFloat(incomeValue);


    const foodieInput = document.getElementById('foodie-input');
    const foodieValue = foodieInput.value;
    const product1 = parseFloat(foodieValue);
    foodieInput.value = '';
    const horentInput = document.getElementById('horent-input');
    const horentValue = horentInput.value;
    const product2 = parseFloat(horentValue);
    horentInput.value = '';
    const clothsInput = document.getElementById('cloths-input');
    const clothsValue = clothsInput.value;
    const product3 = parseFloat(clothsValue);
    clothsInput.value = '';
    totalExpenses = product1 + product2 + product3;
    const totalInput = document.getElementById('total-expenses');
    const totalInputText = totalInput.innerText;
    totalInput.innerText = totalExpenses;
    balance = product - totalExpenses;
    const balanceInput = document.getElementById('balance-remain');
    const balanceInputText = balanceInput.innerText;
    balanceInput.innerText = balance;
    return balance;
}


// After Saving Remaining Balance
// functioned number 2
function saveupdatevalue() {
    const saveInput = document.getElementById('save-input');
    const saveValue = saveInput.value;
    const product4 = parseFloat(saveValue);
    saveInput.value = '';
    const incomeInput = document.getElementById('income-input');
    const incomeValue = incomeInput.value;
    const product = parseFloat(incomeValue);
    incomeInput.value = '';
    const savingAmount = document.getElementById('saving-amount');
    savingAmount.innerText = (product * product4) / 100;
    const savingAmountText = savingAmount.innerText;
    const remainingBalance = document.getElementById('remaining-balance');
    const remainingBalanceText = remainingBalance.innerText;
    remainingBalance.innerText = balance - savingAmountText;

}
// Error message
// function errorMessage() {
//     var error = document.getElementById('income-input')
//     if (isNaN(document.getElementById('income-input').value)) {

//         // Changing content and color of content
//         incomeInput.textContent = "Please enter a valid number"
//         incomeInput.style.color = "red"
//     } else {
//         incomeInput.textContent = ""
//     }
// }



//  Function calling number 1
document.getElementById('calcaulate-total').addEventListener('click', function () {
    updatevalue();
});
//  Function calling number 2
document.getElementById('save-total').addEventListener('click', function () {
    saveupdatevalue();
});