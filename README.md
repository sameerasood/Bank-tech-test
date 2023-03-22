### Requirements

- You should be able to interact with your code via a REPL like IRB or Node. (You don't need to implement a command line interface that takes input from STDIN.)
- Deposits, withdrawal.
- Account statement (date, amount, balance) printing.
- Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2023  
**And** a deposit of 2000 on 13-01-2023  n
**And** a withdrawal of 500 on 14-01-2023  
**When** she prints her bank statement  
**Then** she would see

```
date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
```

### Project Installation
To install the Bank tech project, clone this repo, and in the terminal - 

```
$ cd Bank-tech-test
$ npm install
```
### Project Execution
To run this program in REPL, open the terminal

```
$ cd src
$ node
```
In node --
```
$ const Account = require("./account")
$ const Credit = require("./credit")
$ const Debit = require("./debit")
$ const Transaction = require("./transaction")

$ const account = new Account();
$ const transaction = new Transaction();

$ account.deposit(new Credit(100));
$ account.getAccountStatement();

$ account.withdraw(new Debit(30));
$ account.getAccountStatement();
```
### Project Approach 

- Focus on test-driven development.
- Follow the SRP (Single Responsibility Principle). Create 4 classes so that every class has only one responsibility or job to do, and it should do it well.
- Thorough mock testing for improved test coverage.







