require("./credit");
require("./debit");

class Transaction {
  constructor() {
    this.balance = 0;
    this.date = null;
  }

  addCredit(credit) {
    this.balance += credit.getCredit();
    this.date = credit.getDate();
  }

  withdrawDebit(debit) {
    this.balance -= debit.getDebit();
    this.date = debit.getDate();
  }

  getBalance() {
    return this.balance;
  }

  transactionDate() {
    return this.date;
  }
}

module.exports = Transaction;
