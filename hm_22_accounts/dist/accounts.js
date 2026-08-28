"use strict";
function Account(iban, owner, balance) {
    return {
        iban,
        owner,
        balance,
        deposit(amount) {
            this.balance += amount;
        },
        withdraw(amount) {
            if (amount > this.balance) {
                return false;
            }
            this.balance -= amount;
            return true;
        },
        getBalance() {
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
function transfer(account1, account2, amount) {
    const transaction = {
        account1,
        account2,
        amount,
        transactionInfo() {
            if (this.error) {
                console.log(`Transaction failed: ${this.error}`);
            }
            else {
                console.log(`Transferred ${this.amount} from ${this.account1.iban} to ${this.account2.iban}`);
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
