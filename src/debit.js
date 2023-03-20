class Debit {
  constructor(amount, date = new Date()) {
    this.amount = amount;
    this.date = date;
  }

  getDebit() {
    return this.amount;
  }

  getDate() {
    return this.date();
  }
}

module.exports = Debit;
