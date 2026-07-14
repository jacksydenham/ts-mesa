import { threeSum } from "./solution";

describe('3sum', () => {
    test('should return all valid tuples where they exist', () => {
        expect(threeSum([-1,0,1,2,-1,-4])).toEqual([[-1,-1,2],[-1,0,1]])
    });

    test('should return an empty array if no valid tuples exist', () => {
        expect(threeSum([0,1,1])).toEqual([])
    });

    test('should return 0,0,0 tripet for same input', () => {
        expect(threeSum([0,0,0])).toEqual([[0,0,0]])
    });
});
