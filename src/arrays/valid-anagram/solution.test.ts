import { isAnagram } from "./solution";

describe('valid anagram', () => {

    test('should return true when words are perfect anagrams', () => {
        const result = isAnagram('sam','msa');
        expect(result).toBe(true)
    })

    test('should return false when letters are different', () => {
        const result = isAnagram('rat','car');
        expect(result).toBe(false);
    })

    test('should return false when lengths are not similar', () => {
        const result = isAnagram('ab','abc');
        expect(result).toBe(false);
    })

})