import { topKFrequent } from './solution';

describe('Top K Frequent Elements', () => {
    test('Should return most frequent nums', () => {
        expect(topKFrequent([1,2,1,2,1,2,3,1,3,2], 2)).toEqual([1,2])
    });
});
