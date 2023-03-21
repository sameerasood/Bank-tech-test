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
    const mockCredit = new Credit(400, "16/05/2023");

    mockCredit.getDate.mockImplementation(() => "16/05/2023");
    mockTransaction.getBalance.mockImplementation(() => 400);

    account.deposit(mockCredit);

    expect(account.getAccountStatement()).toEqual(
      "16/05/2023 || credit || 400"
    );
  });
});
