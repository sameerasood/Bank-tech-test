const Transaction = require("./transaction");

class Account{

constructor(transaction){
    this.entry = []
    this.transaction = transaction;
}


deposit(credit){
  this.transaction.addCredit(credit);
}

withdraw(debit) {
    this.transaction.withdrawDebit(debit);
}

// transaction.getBalance();
// transaction.getDate()
// credit.getCredit(); amount
// debit.getDebit(); amount
}


