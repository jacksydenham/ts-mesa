import { numIslands } from './solution';

describe('Number Of Islands', () => {
    test('Should return 3 for the given input', () => {
        const input = [
            ['0','0','0','0','1'],
            ['0','0','0','0','0'],
            ['0','1','1','0','1'],
            ['0','1','0','0','1'],
            ['0','0','0','0','1']
        ];
        expect(numIslands(input)).toBe(3);
    });

    test('Should return 0 for the given input', () => {
        const input = [
            ['0','0','0','0','0'],
            ['0','0','0','0','0']
        ];
        expect(numIslands(input)).toBe(0);
    });

    test('Should return 0 when no grid ', () => {
        const input:string[][] = [];
        expect(numIslands(input)).toBe(0);
    })

    test('Should return 1 for a full island', () => {
        const input = [
            ['1','1'],
            ['1','1']
        ];
        expect(numIslands(input)).toBe(1);
    })

    test('Should return 2 for corners', () => {
        const input = [
            ['1','0'],
            ['0','1']
        ];
        expect(numIslands(input)).toBe(2);
    })

    test('Should return 1 for the given snake input', () => {
        const input = [
            ['1','0','0','1','1'],
            ['1','1','0','0','1'],
            ['0','1','1','0','1'],
            ['0','0','1','0','1'],
            ['0','0','1','1','1']
        ];
        expect(numIslands(input)).toBe(1);
    });

    test('should return 0 after a run as in-place changes lead to no islands', () => {
        const input = [
            ['1','1','0','0'],
            ['0','0','1','0'],
            ['1','1','1','0'],
            ['0','0','0','1']
        ];
        expect(numIslands(input)).toBe(3);
        expect(numIslands(input)).toBe(0);

    })

});
