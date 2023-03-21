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

    expect(account.printStatement()).toEqual([mockTransaction]);
  });

  it("returns the statement with multiple transactions", () => {
    const mockTransaction1 = new Transaction();
    const mockTransaction2 = new Transaction();
    const account = new Account();

    account.transactionEntry(mockTransaction1);
    account.transactionEntry(mockTransaction2);

    expect(account.printStatement()).toEqual([
      mockTransaction1,
      mockTransaction2,
    ]);
  });

  it("returns the list of credits", () => {
    const mockCredit1 = new Credit((100, "21/03/2023"));
    const mockCredit2 = new Credit((200, "25/03/2023"));
    const account = new Account();

    mockCredit1.getCredit.mockImplementation(() => 100);
    mockCredit2.getCredit.mockImplementation(() => 200);
    account.deposit(mockCredit1);
    account.deposit(mockCredit2);

    expect(account.depositStatement()).toEqual([100, 200]);
  });
});

// [
//   { balance: 100, date: "2023-03-20" },
//   { balance: 200, date: "2023-03-21" },
// ];
