require("./transaction");
require("./credit");
require("./debit");

class Account {
  constructor() {
    this.entry = [];
  }

  statement(transaction) {
    this.entry.push(transaction);
    return this.entry;
  }
}

module.exports = Account;

// deposit(credit) {
//   this.transaction.addCredit(credit);
// }

// withdraw(debit) {
//   this.transaction.withdrawDebit(debit);
// }

// transaction.getBalance();
// transaction.getDate()
// credit.getCredit(); amount
// debit.getDebit(); amount
