import { validPath } from './solution';

const input = {
    n: 6,
    edges: [[0, 1], [0, 2], [3, 5], [5, 4], [4, 3]],
    source: 0,
    destination: 5
};

const input2 = {
    n: 3,
    edges: [[0, 1], [1, 2], [2, 0]],
    source: 0,
    destination: 2
};

describe('Find If Path Exists In Graph', () => {
    test('Should return true if path exists', () => {
        expect(validPath(input2.n, input2.edges, input2.source, input2.destination)).toBe(true);
    });

    test('Should return false if path does not exist', () => {
        expect(validPath(input.n, input.edges, input.source, input.destination)).toBe(false);
    });
});