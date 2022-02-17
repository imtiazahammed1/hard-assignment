function updatevalue() {
    const incomeInput = document.getElementById('income-input');
    const incomeValue = incomeInput.value;
    const product = parseFloat(incomeValue);
    console.log(product);
    const foodieInput = document.getElementById('foodie-input');
    const foodieValue = foodieInput.value;
    const product1 = parseFloat(foodieValue);
    console.log(product1);
    const horentInput = document.getElementById('horent-input');
    const horentValue = horentInput.value;
    const product2 = parseFloat(horentValue);
    console.log(product2);
    const clothsInput = document.getElementById('cloths-input');
    const clothsValue = clothsInput.value;
    const product3 = parseFloat(clothsValue);
    console.log(product3);
    totalExpenses = product1 + product2 + product3;
    console.log(totalExpenses);
    balance = product - totalExpenses;
    console.log(balance);

}


document.getElementById('calcaulate-total').addEventListener('click', function () {
    updatevalue();

})