class Credit {
  constructor(amount, date = new Date()) {
    this.amount = amount;
    this.date = date.toLocaleDateString("en-GB");
  }

  getCredit() {
    return this.amount;
  }

  getDate() {
    return this.date;
  }
}

module.exports = Credit;
