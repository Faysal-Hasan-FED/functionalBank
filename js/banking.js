function getInput(inputId) {
    const inputField = document.getElementById(inputId);
    const inputFieldText = inputField.value;
    const amount = parseFloat(inputFieldText);
    // cleariing the input field 
    inputField.value = '';

    return amount;




}

function updateAmount(updateAmountId, amount) {
    const totalAmount = document.getElementById(updateAmountId);
    const totalAmountText = totalAmount.innerText;

    const newTotalAmount = parseFloat(totalAmountText) + amount;



    totalAmount.innerText = newTotalAmount;
    return newTotalAmount;

}

function getCurrentBalance() {
    const totalBalance = document.getElementById("balance-total");
    const totalBalaceText = totalBalance.innerText;
    const totalBalanceAmount = parseFloat(totalBalaceText);
    return totalBalanceAmount;

}

function updateBalance(amount, isAdd) {
    const totalBalance = document.getElementById("balance-total");
    // const totalBalaceText = totalBalance.innerText;
    // const totalBalanceAmount = parseFloat(totalBalaceText);

    const totalBalanceAmount = getCurrentBalance(); // ai 2 line upore abar ase , tai DRY do not repeat yourself kore disi

    // const updatedBalance = totalBalanceAmount + amount;
    if (isAdd == true) {
        updatedBalance = totalBalanceAmount + amount;
    }
    else {
        updatedBalance = totalBalanceAmount - amount;
    }


    totalBalance.innerText = updatedBalance;

}



document.getElementById("deposit-button").addEventListener('click', function () {

    const depositAmount = getInput("deposit-input");
    if (depositAmount > 0) {
        const newDepositAmount = updateAmount("deposit-total", depositAmount);
        updateBalance(newDepositAmount, true);
    }
    else {
        alert("Please Check Amount ");
    }





    // get deposit input 
    /*
    const depositInput = document.getElementById("deposit-input");
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);
    */


    // add and update deposit amount 

    /*
    const totalDeposit = document.getElementById("deposit-total");
    const totalDepositText = totalDeposit.innerText;
    const newDepositAmount = parseFloat(totalDepositText) + depositAmount;
    totalAmount.innerText = newDepositAmount;
    */





    // update balace 

    // const totalBalance = document.getElementById("balance-total");
    // const totalBalaceText = totalBalance.innerText;
    // const totalBalanceAmount = parseFloat(totalBalaceText);
    // const updatedBalace = totalBalanceAmount + newDepositAmount;
    // totalBalance.innerText = updatedBalace;


})
document.getElementById("withdraw-button").addEventListener('click', function () {
    const currentBalance = getCurrentBalance();
    const withdrawAmount = getInput("withdraw-input");
    if (withdrawAmount > 0 && currentBalance > withdrawAmount) {
        const newWithdrawAmount = updateAmount("withdraw-total", withdrawAmount);
        updateBalance(newWithdrawAmount, false);

    }
    else {
        alert("Please check amount");
    }

})