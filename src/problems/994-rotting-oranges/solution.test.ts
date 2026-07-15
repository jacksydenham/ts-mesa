import { rottingOranges } from "./solution";

describe('Rotting Oranges', () => {
    test('should return correct minutes for given grid', () => {
        expect(rottingOranges([[2,1,1],[1,1,0],[0,1,1]])).toBe(4)
    });

    test('should return 0 if no fresh oranges exist to begin with', () => {
        expect(rottingOranges([[0,2]])).toBe(0)
    });

    test('should return -1 for the impossible scenario (oranges remain fresh forever)', () => {
        expect(rottingOranges([[2,1,1],[0,1,1],[1,0,1]])).toBe(-1)
    });
});
