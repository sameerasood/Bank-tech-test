const Transaction = require("../src/transaction");
const Credit = require("../src/credit");
const Debit = require("../src/debit");

jest.mock("../src/credit"); // Credit is now a mock constructor
jest.mock("../src/debit"); // Debit is now a mock constructor

describe("TRANSACTION class", () => {
  beforeEach(() => {
    // Clear all instances and calls to constructor and all methods:
    Credit.mockClear();
    Debit.mockClear();
  });

  it("returns starting balance = 0", () => {
    const transaction = new Transaction();
    expect(transaction.getBalance()).toBe(0);
  });
});
