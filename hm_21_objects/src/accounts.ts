type Account = {
  iban: string;
  owner: string;
  balance: number;
  deposit: (amount: number) => boolean;
  withdraw: (amount: number) => boolean;
  getBalance: () => number;
};

type Transaction = {
  account1: Account;
  account2: Account;
  amount: number;
  error?: string;
  transactionInfo: () => string;
};

function createAccount(iban: string, owner: string, balance: number): Account {
  return {
    iban,
    owner,
    balance,

    deposit(amount: number): boolean {
      if (amount <= 0) {
        return false;
      }

      this.balance += amount;
      return true;
    },

    withdraw(amount: number): boolean {
      if (amount <= 0 || amount > this.balance) {
        return false;
      }

      this.balance -= amount;
      return true;
    },

    getBalance(): number {
      return this.balance;
    },
  };
}

function transfer(
  account1: Account,
  account2: Account,
  amount: number,
): Transaction {
  const transaction: Transaction = {
    account1,
    account2,
    amount,

    transactionInfo(): string {
      if (this.error) {
        return `Transaction failed: ${this.error}`;
      }

      return `Transferred ${this.amount} from ${this.account1.iban} to ${this.account2.iban}`;
    },
  };

  if (amount <= 0) {
    transaction.error = 'The amount must be greater than zero';
    return transaction;
  }

  if (!account1.withdraw(amount)) {
    transaction.error = 'Insufficient funds';
    return transaction;
  }

  account2.deposit(amount);
  return transaction;
}

const accountA = createAccount('IL001', 'Anna', 1500);
const accountB = createAccount('IL002', 'David', 700);
const accountC = createAccount('IL003', 'Maria', 300);
const accounts = [accountA, accountB, accountC];

for (const account of accounts) {
  console.log(
    `IBAN: ${account.iban}, owner: ${account.owner}, balance: ${account.getBalance()}`,
  );
}

const successfulTransaction = transfer(accountA, accountB, 500);
console.log(successfulTransaction.transactionInfo());

const failedTransaction = transfer(accountC, accountB, 1000);
console.log(failedTransaction.transactionInfo());
