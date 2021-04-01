let transactions = [
  {
    referenceNumber: 1,
    senderAccountNumber: 1,
    receiverAccountNumber: 2,
    amount: 23.5,
  },
];
function getMaxId() {
  var max;
  for (var i = 0; i < transactions.length; i++) {
    if (
      max == null ||
      parseInt(transactions[i].referenceNumber) > parseInt(max)
    )
      max = parseInt(transactions[i].referenceNumber);
  }
  return max;
}
let transferAmount = (senderAccountNumber, receiverAccountNumber, amount) => {
  const referenceNumber = getMaxId() + 1;
  transactions.push({
    referenceNumber,
    senderAccountNumber,
    receiverAccountNumber,
    amount,
  });
  return referenceNumber;
};

module.exports = { transactions, transferAmount };
