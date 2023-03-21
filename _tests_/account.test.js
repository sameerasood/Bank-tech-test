const Account = require("../src/account");
const Transaction = require("../src/transaction");
const Credit = require("../src/credit");
const Debit = require("../src/debit");

jest.mock("../src/credit"); // Credit is now a mock constructor
jest.mock("../src/debit"); // Debit is now a mock constructor
jest.mock("../src/transaction"); // Transaction is now a mock constructor

describe("Account class", () => {
  beforeEach(() => {
    // Clear all instances and calls to constructor and all methods:
    Credit.mockClear();
    Debit.mockClear();
    Transaction.mockClear();
  });

  it("returns the statement", () => {
    const mockTransaction = new Transaction();
    const account = new Account(mockTransaction);
    expect(account.statement()).toEqual([mockTransaction]);
  });
});
