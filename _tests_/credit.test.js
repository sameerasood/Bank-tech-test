const Credit = require("../src/credit");

describe("Credit class", () => {
  it("returns the amount to be credited", () => {
    const credit = new Credit(450);
    expect(credit.getCredit()).toEqual(450);
  });

  it("returns the date of transaction", () => {
    const credit = new Credit(450);
    const date = new Date("21/03/2023");
    expect(credit.getDate()).toEqual("21/03/2023");
  });
});
