import { countMatches } from './solution';

describe('Count Items Matching A Rule', () => {
    test('sample test case', () => {
        expect(countMatches([["phone","blue","pixel"],["laptop","silver","phone"],["phone","gold","iphone"]], "type", "phone")).toBe(2)
    });
});
