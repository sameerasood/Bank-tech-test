require("./transaction");
require("./credit");
require("./debit");

class Account {
  constructor(transaction) {
    this.entry = [];
    this.transaction = transaction;
  }

  deposit(credit) {
    this.transaction.addCredit(credit);
  }

  withdraw(debit) {
    this.transaction.withdrawDebit(debit);
  }

  statement() {
    this.entry.push(this.transaction);
    return this.entry;
  }
  // transaction.getBalance();
  // transaction.getDate()
  // credit.getCredit(); amount
  // debit.getDebit(); amount
}

module.exports = Account;
