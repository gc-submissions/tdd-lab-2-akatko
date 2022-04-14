let calculateChange = (payment, total) => {
  return payment - total;
};

let isSufficientPayment = (total, payment) => {
  return true ? payment >= total : false;
};

// return payment >= total
// if (payment >= total) {
//     return true;
// } else {
//     return false;
// }

let calculateTotal = (itemsArray) => {
  let sum = 0;
  for (let i = 0; i < itemsArray.length; i++) {
    sum += itemsArray[i].price;
  }
  return sum;
};

let addItem = (itemsArray, name, price) => {
  itemsArray.push({ name: name, price: price });
};

let removeItem = (itemsArray, index) => {
  itemsArray.splice(index, 1);
};

// let formatCurrency = (amount) => {
//   if (amount >= 0) {
//     amount = amount.toFixed(2);
//     let text = amount.toString();
//     return "$" + text;
//   } else {
//     amount = amount * -1;
//     amount = amount.toFixed(2);
//     let text = amount.toString();
//     return "-$" + text;
//   }
// };

module.exports = {
  calculateChange,
  isSufficientPayment,
  calculateTotal,
  addItem,
  removeItem,
//   formatCurrency,
};
