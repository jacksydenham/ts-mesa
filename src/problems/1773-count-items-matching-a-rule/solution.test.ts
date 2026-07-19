import { countMatches, countMatchesCleanly, countMatchesEvenMoreCleanly } from './solution';

describe('Count Items Matching A Rule', () => {
    test('should return correct output for initial implementation', () => {
        expect(countMatches([["phone","blue","pixel"],["laptop","silver","phone"],["phone","gold","iphone"]], "type", "phone")).toBe(2)
    });

    test('should return correct output for cleaner implementation', () => {
        expect(countMatchesCleanly([["phone","blue","pixel"],["laptop","silver","phone"],["phone","gold","iphone"]], "type", "phone")).toBe(2)
    });

    test('should return correct output for final implementation', () => {
        expect(countMatchesEvenMoreCleanly([["phone","blue","pixel"],["laptop","silver","phone"],["phone","gold","iphone"]], "type", "phone")).toBe(2)
    });
});
