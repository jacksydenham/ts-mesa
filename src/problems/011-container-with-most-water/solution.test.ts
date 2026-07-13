import { containerWithMostWater } from "./solution";

describe('Container With Most Water', () => {
    test('should return maximum area with varying heights', () => {
        expect(containerWithMostWater([1,8,6,2,5,4,8,3,7])).toBe(49);
    });

    test('should return 0 with no heights supplied', () => {
        expect(containerWithMostWater([])).toBe(0);
    })
});
