const Transaction = require("./transaction");
require("./credit");
require("./debit");

class Account {
  constructor() {
    this.statement = [];
    this.transaction = new Transaction();
  }

  deposit(credit) {
    this.transaction.addCredit(credit);
    const entry = {
      type: "credit",
      date: credit.getDate(),
      balance: this.transaction.getBalance(),
    };
    this.statement.push(entry);
  }

  withdraw(debit) {
    this.transaction.withdrawDebit(debit);
    const entry = {
      type: "debit",
      date: debit.getDate(),
      balance: this.transaction.getBalance(),
    };
    this.statement.push(entry);
  }

  getAccountStatement() {
    console.log("Date|| Credit/Debit || Balance");
    return this.statement.forEach((row) => {
      console.log(`${row.date} || ${row.type} || ${row.balance}`);
    });
  }
}

module.exports = Account;
