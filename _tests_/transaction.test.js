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

  it("returns balance with added credit", () => {
    const transaction = new Transaction();
    const mockCredit = new Credit(100, "21/03/2023");
    mockCredit.getCredit.mockImplementation(() => 100); // mock implementation of getCredit function
    transaction.addCredit(mockCredit);
    expect(transaction.getBalance()).toEqual(100);
  });

  it("returns date of credit transaction", () => {
    const transaction = new Transaction();
    const mockCredit = new Credit(100, "21/03/2023");
    mockCredit.getDate.mockImplementation(() => "21/03/2023");
    transaction.addCredit(mockCredit);
    expect(transaction.transactionDate()).toEqual("21/03/2023");
  });

  it("returns balance with two credits added", () => {
    const transaction = new Transaction();
    const mockCredit1 = new Credit(100, "21/03/2023");
    const mockCredit2 = new Credit(400, "16/05/2023");
    mockCredit1.getCredit.mockImplementation(() => 100);
    mockCredit2.getCredit.mockImplementation(() => 400);
    transaction.addCredit(mockCredit1);
    transaction.addCredit(mockCredit2);
    expect(transaction.getBalance()).toEqual(500);
  });

  it("returns balance in negative when withdraw happens", () => {
    const transaction = new Transaction();
    const mockDebit = new Debit(100, "21/03/2023");
    mockDebit.getDebit.mockImplementation(() => 100);
    transaction.withdrawDebit(mockDebit);
    expect(transaction.getBalance()).toEqual(-100);
  });

  it("returns returns date of debit transaction", () => {
    const transaction = new Transaction();
    const mockDebit = new Debit(100, "21/03/2023");
    mockDebit.getDate.mockImplementation(() => "21/03/2023");
    transaction.withdrawDebit(mockDebit);
    expect(transaction.transactionDate()).toEqual("21/03/2023");
  });
});
