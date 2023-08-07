const bcrypt = require('bcrypt');

function encryptPhoneNumbers(phoneNumbers) {
  const encryptedNumbers = [];

  for (let i = 0; i < phoneNumbers.length; i++) {
    const phoneNumber = phoneNumbers[i];
    const saltRounds = 10;
    const hashedNumber = bcrypt.hashSync(phoneNumber, saltRounds);
    encryptedNumbers.push(hashedNumber);
  }

  return encryptedNumbers;
}

// Example usage
const numbers = [
'01111111111',
'0123456789',
];
const encryptedNumbers = encryptPhoneNumbers(numbers);

console.log(encryptedNumbers);
