import { missingNumber } from "./solution";

describe('Missing Number', () => {
    test('should return 5', () => {
        expect(missingNumber([6,2,4,0,1,3])).toBe(5)
    });
});
