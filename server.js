const express = require("express");
const bankAccounts = require("./models/accounts");
const transactions = require("./models/transactions");

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.get("/accounts", (req, res) => {
  res.send(bankAccounts.accounts);
});
app.get("/transactions", (req, res) => {
  res.send(transactions);
});

//create account
app.post("/create-account", (req, res) => {
  const { accountNumber, currencyCode, balance } = req.body;
  var isError = false;
  bankAccounts.createAccount(accountNumber, currencyCode, balance);
  const referenceNumber = transactions.transferAmount(
    null,
    accountNumber,
    balance
  );
  return res.send({ isError, referenceNumber });
});
//transfer money
app.post("/transfer-money", (req, res) => {
  const { senderAccountNumber, receiverAccountNumber, amount } = req.body;
  let isError = false;

  var error = bankAccounts.isValidTransfer(
    senderAccountNumber,
    receiverAccountNumber,
    amount
  );
  console.log(error);
  if (error && error.isError) {
    return res.status(401).send(error);
  }
  const referenceNumber = transactions.transferAmount(
    senderAccountNumber,
    receiverAccountNumber,
    amount
  );
  bankAccounts.updateAccounts(
    senderAccountNumber,
    receiverAccountNumber,
    amount
  );
  console.log(bankAccounts);
  return res.status(201).send({ isError, referenceNumber });
});

app.listen(port, () => {
  console.log(`server listening on ${port}`);
});
