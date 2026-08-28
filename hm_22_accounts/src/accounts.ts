type AccountType = {
  iban: string;
  owner: string;
  balance: number;
  deposit: (amount: number) => void;
  withdraw: (amount: number) => boolean;
  getBalance: () => number;
};

type Transaction = {
  account1: AccountType;
  account2: AccountType;
  amount: number;
  error?: string;
  transactionInfo: () => void;
};

function Account(
  iban: string,
  owner: string,
  balance: number,
): AccountType {
  return {
    iban,
    owner,
    balance,

    deposit(amount: number): void {
      this.balance += amount;
    },

    withdraw(amount: number): boolean {
      if (amount > this.balance) {
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

const account1 = Account('IL001', 'Anna', 1500);
const account2 = Account('IL002', 'David', 700);
const account3 = Account('IL003', 'Maria', 300);

const accounts = [account1, account2, account3];

for (const account of accounts) {
  console.log(`IBAN: ${account.iban}`);
  console.log(`Owner: ${account.owner}`);
  console.log(`Balance: ${account.getBalance()}`);
}

function transfer(
  account1: AccountType,
  account2: AccountType,
  amount: number,
): Transaction {
  const transaction: Transaction = {
    account1,
    account2,
    amount,

    transactionInfo(): void {
      if (this.error) {
        console.log(`Transaction failed: ${this.error}`);
      } else {
        console.log(
          `Transferred ${this.amount} from ${this.account1.iban} to ${this.account2.iban}`,
        );
      }
    },
  };

  if (amount <= 0) {
    transaction.error = 'Amount must be greater than zero';
    return transaction;
  }

  if (!account1.withdraw(amount)) {
    transaction.error = 'Insufficient funds';
    return transaction;
  }

  account2.deposit(amount);
  return transaction;
}

const successfulTransfer = transfer(account1, account2, 500);
successfulTransfer.transactionInfo();

const failedTransfer = transfer(account3, account2, 1000);
failedTransfer.transactionInfo();
