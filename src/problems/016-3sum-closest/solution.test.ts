import { threeSumClosest } from "./solution";

describe('Three Sum Closest', () => {
    test('Should return 2 for given array/target input', () => {
        expect(threeSumClosest([-1,2,1,-4], 1)).toBe(2);
    })
}) 