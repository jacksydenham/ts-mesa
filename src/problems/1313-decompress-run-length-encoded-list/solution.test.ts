import { decompressRLElist } from './solution';

describe('Decompress Run Length Encoded List', () => {
    describe('Simple implementation', () => {
        test('Should return correct array for sample input', () => {
            expect(decompressRLElist([1,2,3,4])).toEqual([2,4,4,4]);
        });

        test('Should return correct array for different input', () => {
            expect(decompressRLElist([1,1,2,3])).toEqual([1,3,3]);
        });
    });
});
