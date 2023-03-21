class Debit {
  constructor(amount, date = new Date()) {
    this.amount = amount;
    this.date = date.toLocaleDateString("en-GB");
  }

  getDebit() {
    return this.amount;
  }

  getDate() {
    return this.date;
  }
}

module.exports = Debit;
