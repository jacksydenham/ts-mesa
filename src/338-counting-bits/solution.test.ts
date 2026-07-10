import { countingBits } from "./solution";

describe('Counting Bits', () => {
    test('should return array of 1 counts', () => {
        expect(countingBits(2)).toStrictEqual([0,1,1])
    });
});
