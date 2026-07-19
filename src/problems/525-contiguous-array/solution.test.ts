import { findMaxLength } from './solution';

describe('Contiguous Array', () => {
    test('Should return max length correctly', () => {
        expect(findMaxLength([0,1,1,1,1,1,0,0,0])).toBe(6)
    });
});
