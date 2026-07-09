import { validPalindrome } from "./solution";

describe('Valid Palindrome', () => {
    test('Should return true if word is palindrome', () => {
        expect(validPalindrome('Race car')).toBe(true)
    })

    test ('should return false on non-palindrome words', () => {
        expect(validPalindrome('All work and no play makes')).toBe(false)
    })
})
