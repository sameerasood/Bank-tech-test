require("./transaction");
require("./credit");
require("./debit");

class Account {
  constructor() {
    this.entry = [];
    this.depositList = [];
    this.withdrawList = [];
    this.dateList = [];
  }

  transactionEntry(transaction) {
    this.entry.push(transaction);
  }

  printStatement() {
    return this.entry;
  }

  deposit(credit) {
    this.depositList.push(credit.getCredit());
    this.dateList.push(credit.getDate());
  }

  withdraw(debit) {
    this.withdrawList.push(debit.getDebit());
    this.dateList.push(debit.getDate());
  }

  depositStatement() {
    return this.depositList;
  }

  withdrawStatement() {
    return this.withdrawList;
  }
  
}

module.exports = Account;

// transaction.getBalance();
// transaction.getDate()
// credit.getCredit(); amount
// debit.getDebit(); amount
