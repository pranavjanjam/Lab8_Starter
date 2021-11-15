// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

// isPhoneNumber tests

test('Checks that (513)123-4567 is a valid phone number', () => {
    expect(functions.isPhoneNumber('(513)123-4567')).toBe(true);
})

test('Checks that 513-123-4567 is a valid phone number', () => {
    expect(functions.isPhoneNumber('513-123-4567')).toBe(true);
})

test('Checks that 12345 is a invalid phone number', () => {
    expect(functions.isPhoneNumber('12345')).toBe(false);
})

test('Checks that (513)123-456 is an invalid phone number', () => {
    expect(functions.isPhoneNumber('(513)123-456')).toBe(false);
})

// isEmail tests

test('Checks that nick@gmail.com is a valid email', () => {
    expect(functions.isEmail('nick@gmail.com')).toBe(true);
})
  
test('Checks that andr3w@yahoo.com is a valid email', () => {
    expect(functions.isEmail('andr3w@yahoo.com')).toBe(true);
})
  
test('Checks that andr3w is an invalid email', () => {
    expect(functions.isEmail('andr3w')).toBe(false);
})
  
test('Checks that nick@gmail@com is an invalid email', () => {
    expect(functions.isEmail('nick@gmail@com')).toBe(false);
})
  
// isStrongPassword tests

test('Checks that password123 is a strong password', () => {
    expect(functions.isStrongPassword('password123')).toBe(true);
})

test('Checks that ILikeCandy is a strong password', () => {
    expect(functions.isStrongPassword('ILikeCandy')).toBe(true);
})

test('Checks that hi is a weak password', () => {
    expect(functions.isStrongPassword('hi')).toBe(false);
})

test('Checks that Hello<> is a weak password', () => {
    expect(functions.isStrongPassword('Hello<>')).toBe(false);
})

// isDate tests

test('Checks that 11/14/2021 is a valid date', () => {
    expect(functions.isDate('11/14/2021')).toBe(true);
})

test('Checks that 3/03/1826 is a valid date', () => {
    expect(functions.isDate('3/03/1826')).toBe(true);
})

test('Checks that 11/14/21 is an invalid date', () => {
    expect(functions.isDate('11/14/21')).toBe(false);
})

test('Checks that 123/4/5 is an invalid date', () => {
    expect(functions.isDate('123/4/5')).toBe(false);
})

// isHexColor tests

test('Checks that 000000 is a valid hex color', () => {
    expect(functions.isHexColor('000000')).toBe(true);
})

test('Checks that f0f is a valid hex color', () => {
    expect(functions.isHexColor('f0f')).toBe(true);
})

test('Checks that 0 is an invalid hex color', () => {
    expect(functions.isHexColor('0')).toBe(false);
})

test('Checks that XYZ is an invalid hex color', () => {
    expect(functions.isHexColor('XYZ')).toBe(false);
})