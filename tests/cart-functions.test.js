const {
  calculateChange,
  isSufficientPayment,
  calculateTotal,
  addItem,
  removeItem,
} = require("../src/js/cart-functions");

describe("calculateChange", () => {
  test("Given total 5 and payment 6, it returns 1", () => {
    expect(calculateChange(6, 5)).toEqual(1);
  });
  test("Given total 12.30 and payment 13.03, it returns 0.73", () => {
    expect(calculateChange(13.03, 12.3)).toBeCloseTo(0.73);
  });
  test("Given total 10000 and payment 50000, it returns 40000", () => {
    expect(calculateChange(50000, 10000)).toBe(40000);
  });
});

describe("isSufficientPayment", () => {
  test("Given total 5 and payment 6, it returns true", () => {
    expect(isSufficientPayment(5, 6)).toEqual(true);
  });
  test("Given total 10 and payment 7, it returns false", () => {
    expect(isSufficientPayment(10, 7)).toEqual(false);
  });
  test("Given total 3 and payment 3, it returns true", () => {
    expect(isSufficientPayment(3, 3)).toEqual(true);
  });
  test("Given total 12.30 and payment 13.03, it returns true", () => {
    expect(isSufficientPayment(12.3, 13.03)).toEqual(true);
  });
});

describe("calculateTotal", () => {
  // arrange
  // let myArray = [
  //   {
  //     name: "Jelly",
  //     price: 3.50
  //   },
  //   {
  //     name: "PB",
  //     price: 4.99
  //   },
  //   {
  //     name: "Veggie",
  //     price: 5.00
  //   }
  // ]

  test("Given an itemsArray of one item with price 4.99, it returns 4.99", () => {
    // arrange
    let myArray = [
      {
        name: "Jelly",
        price: 4.99,
      },
    ];
    expect(calculateTotal(myArray)).toEqual(4.99);
  });

  test("Given an itemsArray of three items with prices 3.50, 12.99, and 0.03, it returns 16.52", () => {
    // arrange
    let myArray = [
      {
        name: "One",
        price: 3.5,
      },
      {
        name: "Two",
        price: 12.99,
      },
      {
        name: "Three",
        price: 0.03,
      },
    ];
    expect(calculateTotal(myArray)).toBeCloseTo(16.52);
  });

  test("Given an itemsArray of three items with prices 3.50, 12.99, and 0.03, it returns 16.52", () => {
    // arrange
    let myArray = [];
    expect(calculateTotal(myArray)).toEqual(0);
  });
});

describe("addItem", () => {
  test("Call addItem with an empty itemsArray, name 'Beans' and price 3", () => {
    // arrange
    let emptyArray = [];
    // act
    addItem(emptyArray, "Beans", 3);
    // assert
    expect(emptyArray).toEqual([{ name: "Beans", price: 3 }]);
  });
  test("Add Sugar to itemsArray, test two objects", () => {
    // arrange
    let itemsArray = [{ name: "Beans", price: 3 }];
    // act
    addItem(itemsArray, "Sugar", 2);
    // assert
    expect(itemsArray).toEqual([
      { name: "Beans", price: 3 },
      { name: "Sugar", price: 2 },
    ]);
  });
  test("Add flour to itemsArray, test three objects", () => {
    // arrange
    let itemsArray = [
      { name: "Beans", price: 3 },
      { name: "Sugar", price: 2 },
      { name: "Flour", price: 3 },
    ];
    // act
    addItem(itemsArray, "Rice", 4);
    // assert
    expect(itemsArray).toEqual([
      { name: "Beans", price: 3 },
      { name: "Sugar", price: 2 },
      { name: "Flour", price: 3 },
      { name: "Rice", price: 4 },
    ]);
  });
});

describe("removeItem", () => {
  test("remove first item from array of 3", () => {
    // arrange
    let myArray = [
      { name: "gatorade", price: 2.0 },
      { name: "hard drive", price: 200 },
      { name: "microphone", price: 200 },
    ];
    removeItem(myArray, 0);

    expect(myArray).toEqual([
      { name: "hard drive", price: 200 },
      { name: "microphone", price: 200 },
    ]);
  });
  test("remove last item from array of 3", () => {
    // arrange
    let myArray = [
      { name: "gatorade", price: 2.0 },
      { name: "hard drive", price: 200 },
      { name: "microphone", price: 200 },
    ];
    removeItem(myArray, 2);

    expect(myArray).toEqual([
      { name: "gatorade", price: 2.0 },
      { name: "hard drive", price: 200 },
    ]);
  });
  test("remove middle item from array of 3", () => {
    // arrange
    let myArray = [
      { name: "gatorade", price: 2.0 },
      { name: "hard drive", price: 200 },
      { name: "microphone", price: 200 },
    ];
    removeItem(myArray, 1);

    expect(myArray).toEqual([
      { name: "gatorade", price: 2.0 },
      { name: "microphone", price: 200 },
    ]);
  });
  test("remove middle item from array of 3", () => {
    // arrange
    let myArray = [
      { name: "gatorade", price: 2.0 },
    ];
    removeItem(myArray, 0);
    expect(myArray).toEqual([]);
  });
});

// describe("formatCurrency", () => {
//   test("Given the amount 0, it returns '$0.00'.", () => {
//     expect(formatCurrency(0)).toEqual("$0.00");
//   });
//   test("Given the amount 1, it returns '$1.00'.", () => {
//     expect(formatCurrency(1)).toEqual("$1.00");
//   })
//   test("Given the amount 1.5 it returns '$1.50'.", () => {
//     expect(formatCurrency(1.5)).toEqual("$1.50");
//   })
//   test("Given the amount 0.01, it returns '$0.01'.", () => {
//     expect(formatCurrency(0.01)).toEqual("$0.01");
//   })
//   test("Given the amount 527.6789, it returns '$527.68'.", () => {
//     expect(formatCurrency(527.6789)).toEqual("$527.68");
//   })
//   test("Given the amount -1, it returns '-$1.00'.", () => {
//     expect(formatCurrency(-1)).toEqual("-$1.00");
//   })
//   test("Given the amount 1000, it returns '$1000.00'.", () => {
//     expect(formatCurrency(1000)).toEqual("$1000.00");
//   })
//   test("Given the amount -210000, it returns '-$210000.00'.", () => {
//     expect(formatCurrency(-210000)).toEqual("-$210000.00");
//   })
// });

// describe("getCoins", () => {
//   test("32 cents produces: quarters: 1, dimes: 0, nickels: 1, pennies: 2", () => {
//     expect(getCoins(32)).toEqual({quarters: 1, dimes: 0, nickels: 1, pennies: 2});
//   });
//   test("10 cents produces: quarters: 0, dimes: 1, nickels: 0, pennies: 0", () => {
//     expect(getCoins(10)).toEqual({quarters: 0, dimes: 1, nickels: 0, pennies: 0});
//   });
//   test("27 cents produces: quarters: 1, dimes: 0, nickels: 0, pennies: 2", () => {
//     expect(getCoins(27)).toEqual({quarters: 1, dimes: 0, nickels: 0, pennies: 2});
//   });
//   test("68 cents produces: quarters: 2, dimes: 1, nickels: 1, pennies: 3", () => {
//     expect(getCoins(68)).toEqual({quarters: 2, dimes: 1, nickels: 1, pennies: 3});
//   });
  
// });