## For this challenge, the following requirements were assumed for the validity of a Bitcoin address:

They are by no means the exhaustive validation of Bitcoin addresses which were not implemented. Such as the checking the sha256 values and the encoding/decoding of values.
This [link](https://stackoverflow.com/questions/21559851/bitcoin-address-form-validation-javascript-and-php) provides a Javascript method that could be implemented for Bitcoin address validation but I did not choose to implement it without understanding the functions fully. Hence, I chose the following simple key guidelines to validate the Bitcoin addresses.

## Simple Validation Guidelines for Bitcoin Address

Guidelines taken from online Bitcoin validity resources; particularly, from this [link](http://mokagio.github.io/tech-journal/2014/11/21/regex-bitcoin.html)

1. The first character should be a 1 or 3.
2. It has to be between 26 and 35 characters long.
3. It should not contain 0, O, I or l.

## Validation Guidelines for Other Fields

### Guidelines for Amount of Money to Be Sent:

- Positive & numeric
- Up to 4 decimal places.

### Guidelines for OTP Authentication:

- Alphanumeric
- Only accepts 6 characters.

## Button Properties

- Buttons are dummy functions.
