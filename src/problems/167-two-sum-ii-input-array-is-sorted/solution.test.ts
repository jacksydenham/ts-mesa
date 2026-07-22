import { twoSumSorted } from "./solution";

describe('Two Sum Sorted', () => {
    test('should return indices for twoSum values', () => {
        expect(twoSumSorted([2,7,11,15], 9)).toEqual([1,2])
    })
})