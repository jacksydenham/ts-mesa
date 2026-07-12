import { reverseBits } from "./solution";
describe('Reverse Bits', () => {
    test('should return correct reversed bit num', () => {
        expect(reverseBits(43261596)).toBe(964176192)
    });
});
