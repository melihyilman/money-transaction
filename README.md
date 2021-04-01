# money-transaction

## Routes

> to get list of accounts

```
  /accounts
```

> to get list of transactions use

```
  /transactions
```

> to create account (POST)

```
  /create-account/  (&params =  accountNumber, currencyCode, balance)

  {
    "accountNumber": 55,
    "currencyCode": "TRY",
    "balance": 1001
 }
```

> to send amount (POST)

```
  /transfer-money/ (&params = senderAccountNumber, receiverAccountNumber, amount)
    {
        "senderAccountNumber": 1,
        "receiverAccountNumber": 6,
        "amount":10
    }
```
