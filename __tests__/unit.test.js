// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
// Phone Number
test('has area code in parenthesis', () => {
    expect(isPhoneNumber('(123) 456-9876')).toBe(true);
});

test('2 dashes are required for the phone number', () => {
    expect(isPhoneNumber('(123) 123-1234')).toBe(true);
})

test('symbols do matter regardless if 10 digits are present', () => {
    expect(isPhoneNumber('1234567890')).toBe(false);
})

test('phone number can be letters', () => {
    expect(isPhoneNumber('abc-abc-abcd')).toBe(false);
})

// Email
test('valid email with standard format', () => {
    expect(isEmail('correctemail@att.net')).toBe(true);
});
test('valid email with short domain', () => {
    expect(isEmail('user@mail.co')).toBe(true);
});
test('email must end with some .__', () => {
    expect(isEmail('thisisemail@gmailcom')).toBe(false);
});
test('email has @ symbol', () => {
    expect(isEmail('ucsdisgreatgmail.com')).toBe(false);
});
// Tests for isStrongPassword
test('valid strong password with letters and numbers', () => {
    expect(isStrongPassword('Abc1234')).toBe(true);
});
  
test('valid strong password with underscore', () => {
    expect(isStrongPassword('A_b1234')).toBe(true);
});
  
test('invalid password starting with a number', () => {
    expect(isStrongPassword('1abc123')).toBe(false);
});
  
test('invalid password with special characters', () => {
    expect(isStrongPassword('Abc@123')).toBe(false);
});
  
// Tests for isDate
test('valid date with single-digit month and day', () => {
    expect(isDate('1/1/2023')).toBe(true);
});
  
test('valid date with double-digit month and day', () => {
    expect(isDate('12/31/2023')).toBe(true);
});
  
test('invalid date with missing year', () => {
    expect(isDate('12/31')).toBe(false);
});
  
test('invalid date with invalid format', () => {
    expect(isDate('2023-12-31')).toBe(false);
});
  
// Tests for isHexColor
test('valid 3-character hex color', () => {
    expect(isHexColor('#abc')).toBe(true);
});
  
test('valid 6-character hex color', () => {
    expect(isHexColor('#abcdef')).toBe(true);
});
  
test('invalid hex color with invalid characters', () => {
    expect(isHexColor('#ghijkl')).toBe(false);
});
  
test('invalid hex color with wrong length', () => {
    expect(isHexColor('#abcd')).toBe(false);
});
