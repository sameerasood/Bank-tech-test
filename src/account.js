const Transaction = require("./transaction");
require("./credit");
require("./debit");

class Account {
  constructor() {
    this.entry = [];
    this.transaction = new Transaction();
  }

  deposit(credit) {
    this.transaction.addCredit(credit);
    this.entry.push({
      type: "credit",
      amount: credit.getCredit(),
      date: credit.getDate(),
      balance: this.transaction.getBalance(),
    });
  }

  withdraw(debit) {
    this.transaction.withdrawDebit(debit);
    this.entry.push({
      type: "debit",
      amount: debit.getDebit(),
      date: debit.getDate(),
      balance: this.transaction.getBalance(),
    });
  }

  getAccountStatement() {
    console.log("Date|| Credit || Debit || Balance");
    this.entry.forEach((row) => {
      console.log(
        `${row.date} || ${
          row.type === "credit" ? row.amount.toFixed(2) : ""
        } || ${
          row.type === "debit" ? row.amount.toFixed(2) : ""
        } || ${row.balance.toFixed(2)}`
      );
    });
  }
}

module.exports = Account;
