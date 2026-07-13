import { wordBreak } from "./solution";

describe('Word Break', () => {
    test('should return true in valid case', () => {
        expect(wordBreak("leetcode", ["leet", "code"])).toBe(true);
    });
    
    test('should return true when extended dict words are included in dict', () => {
        expect(wordBreak("applepies", ["apple", "pie", "s", "applepie"])).toBe(true);
    });
    test('should return true when all dict words are similar', () => {
        expect(wordBreak("aaaaaaa", ["aaaa", "aaa", "aa"])).toBe(true);
    })

});
