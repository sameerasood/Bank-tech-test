const Debit = require("../src/debit");

describe("Debit class", () => {
  it("returns the amount to be debited", () => {
    const debit = new Debit(100);
    expect(debit.getDebit()).toEqual(100);
  });

  it("returns the date of transaction", () => {
    const debit = new Debit(100);
    const date = new Date("21/03/2023");
    expect(debit.getDate()).toEqual("21/03/2023");
  });
});
