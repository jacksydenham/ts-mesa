import { climbStairs } from "./solution";

describe('Climb Stair', () => {
    test('should return 3 on 3', () => {
        expect(climbStairs(3)).toBe(3);
    });

    test('should return 2584 on 17', () => {
        expect(climbStairs(17)).toBe(2584);
    });
})