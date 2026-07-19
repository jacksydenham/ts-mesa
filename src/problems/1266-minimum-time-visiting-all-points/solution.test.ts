import { minTimeVisitingAllPoints } from './solution';

describe('Minimum Time Visiting All Points', () => {
    test('Should return shortest possible time', () => {
        expect(minTimeVisitingAllPoints([[1,1],[3,4],[-1,0]])).toBe(7)
    });
});
