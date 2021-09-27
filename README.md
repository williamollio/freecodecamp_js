# Javascript Projects

## Palindrome Checker

A palindrome is a **word** or **sentence** that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

`Examples :`
*   eye
*   A man, a plan, a canal. Panama

The programme should return ```true``` if the given string is a palindrome. Otherwise, ```false```.

## Roman Numeral Converter

Convert the given number into a roman numeral.

## Caesars Cipher

The purpose is to reproduce one of the most well-known ciphers : the Caesar cipher. A shift cipher shifts the letters by some set amount.

Here we will use the ROT13 cipher, which shifts the values of letters by 13 places [(ASCII Table)](https://www.asciitable.com "ASCII Table").

Here is a picture which illustrates it.

![ROT13](https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/ROT13_table_with_example.svg/640px-ROT13_table_with_example.svg.png)

The function takes a ROT13 encoded string as input and returns a decoded string. All letters as inputs are uppercase.

## Telephone Number Validator

Function which verirfy if the string passed as an arguments looks like a US phone number. If yes, return ```true```, otherwise ```false```.

The followings examples represent valid inputs :
```javascript
555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
```

## Cash Register

Here the goal is to design a cash register drawer, the function ```checkCashRegister()``` takes 3 arguments. The purchase price ```(price)```, the payment ```(cash)``` and the cash-in-drawer ```(cid)``` represented by a bi-dimensional array.

Bellow an example of a cash-in-drawer array :
```javascript
[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]
```

The function has to return an object with the keys ```status``` and ```change```.

If cash-in-drawer is less than the change due, or if the exact change can't be give back. Should return :
```javascript
{status: "INSUFFICIENT_FUNDS", change: []}
```

If the sum of the cash-in-drawer is equal to the change due. Should return with the value of cash-in-drawer as key ```change``` :
```javascript
{status: "CLOSED", change: [...]}
```

Otherwise should return, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key :
```javascript
{status: "OPEN", change: [...]}
```

| Currency Unit |      Amount    |
| ------------- | -------------- |
| Penny    | $0.01 (PENNY)|
| Nickel      | $0.05 (NICKEL) |
| Dime      | $0.1 (DIME) |
| Quarter      | $0.25 (QUARTER) |
| Dollar      | $5 (FIVE) |
| Ten Dollars      | $10 (TEN) |
| Twenty Dollars     | $20 (TWENTY) |
| One-hundred Dollars     | $100 (HUNDRED) |

___

## About

If you have questions about my implementations, just reach me out.