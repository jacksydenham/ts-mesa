import { shuffle } from './solution';

describe('Shuffle The Array', () => {
    test('Should return correctly shuffled array', () => {
        expect(shuffle([1,1,2,2], 2)).toEqual([1,2,1,2]);
    });

    test('Should correctly return shuffled array for more complex input', () => {
        expect(shuffle([1,2,3,4,4,3,2,1], 4)).toEqual([1,4,2,3,3,2,4,1]);
    })
});
