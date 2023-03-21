const Debit = require("../src/debit");

describe("Debit class", () => {
  it("returns the amount to be debited", () => {
    const debit = new Debit(100);
    expect(debit.getDebit()).toEqual(100);
  });


});
