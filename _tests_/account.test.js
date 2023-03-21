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

  it("returns the statement with single transaction", () => {
    const mockTransaction = new Transaction();
    const account = new Account();

    account.transactionEntry(mockTransaction);

    expect(account.statement()).toEqual([mockTransaction]);
  });

  it("returns the statement with multiple transactions", () => {
    const mockTransaction1 = new Transaction();
    const mockTransaction2 = new Transaction();
    const account = new Account();

    account.transactionEntry(mockTransaction1);
    account.transactionEntry(mockTransaction2);

    expect(account.statement()).toEqual([mockTransaction1, mockTransaction2]);
  });
});

// [
//   { balance: 100, date: "2023-03-20" },
//   { balance: 200, date: "2023-03-21" },
// ];
