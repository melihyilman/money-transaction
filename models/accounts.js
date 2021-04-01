let accounts = [
  {
    accountNumber: 1,
    currencyCode: "TRY",
    balance: 100,
  },
  {
    accountNumber: 2,
    currencyCode: "TRY",
    balance: 200,
  },
  {
    accountNumber: 3,
    currencyCode: "TRY",
    balance: 300,
  },
  {
    accountNumber: 4,
    currencyCode: "TRY",
    balance: 400,
  },
  {
    accountNumber: 5,
    currencyCode: "USD",
    balance: 500,
  },
  {
    accountNumber: 6,
    currencyCode: "USD",
    balance: 100,
  },
];

let createAccount = (accountNumber, currencyCode, balance) => {
  accounts.push({
    accountNumber,
    currencyCode,
    balance,
  });
};
let updateAccounts = (senderAccountNumber, receiverAccountNumber, amount) => {
  const senderIndex = accounts.findIndex(
    (x) => x.accountNumber == senderAccountNumber
  );
  updateAmountByIndex(senderIndex, -amount);

  const receiverIndex = accounts.findIndex(
    (x) => x.accountNumber == receiverAccountNumber
  );
  updateAmountByIndex(receiverIndex, amount);
};
let updateAmountByIndex = (index, amount) => {
  accounts[index].balance += parseFloat(amount);
};
let isValidTransfer = (senderAccountNumber, receiverAccountNumber, amount) => {
  var isError = false;
  const senderAccount = accounts.find(
    (x) => x.accountNumber == senderAccountNumber
  );

  if (senderAccount == null || amount > senderAccount.balance) {
    isError = true;
    return { isError, message: "insufficient balance" };
  }
  const receiverAccount = accounts.find(
    (x) => x.accountNumber == receiverAccountNumber
  );
  if (receiverAccount == null) {
    isError = true;
    return { isError, message: "invalid receiver" };
  }
  if (senderAccount.currencyCode !== receiverAccount.currencyCode) {
    isError = true;
    return { isError, message: "Currency codes should be equal" };
  }
  return isError;
};

module.exports = { accounts, createAccount, updateAccounts, isValidTransfer };
