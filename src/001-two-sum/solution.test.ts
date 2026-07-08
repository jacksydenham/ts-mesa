import { twoSum } from "./solution";

describe('Two Sum', () => {

    test('Should return correctly', () => {
        expect(twoSum(9, [2,7,11,15])).toStrictEqual([0,1])
    })

    test('Should handle empty array, returning empty array', () => {
        expect(twoSum(9, [])).toStrictEqual([])
    })

    test('Should handle array with one element, returning empty array', () => {
        expect(twoSum(9, [2])).toStrictEqual([])
    })
    
    test('should handle case where no two sum is found, returning empty array', () => {
        expect(twoSum(10, [1,2,3,4,5])).toStrictEqual([])
    })
})