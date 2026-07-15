export function rottingOranges(grid: number[][]): number {

    let minMinutes = 0;
    let freshCount = 0;

    const rows = grid.length;
    const cols = grid[0]?.length ?? 0;

    const queue: [number,number,number][] = [];

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols!; c++) {
            const curr = grid[r]![c];
            
            if (curr === 2) queue.push([c,r,0]);
            if (curr === 1) freshCount++;
        }
    }

    while (queue.length > 0) {
        const [currR, currC, minute] = queue.shift()!;

        const neighbours = [
            [currR-1, currC],
            [currR+1, currC],
            [currR, currC+1],
            [currR, currC-1]
        ] as const; // this tells TS each tulpe has only two values that aren't undefined

        for (const [neiR, neiC] of neighbours) {
            if (neiR >= 0 && neiR < rows && 
                neiR >= 0 && neiC < cols) {
                if (grid[neiR]![neiC] === 1) {
                    queue.push([neiR, neiC, minute+1]);
                    grid[neiR]![neiC] = 2
                    freshCount--;
                }
            }
        }
        minMinutes = Math.max(minMinutes,minute);
    }
    return freshCount === 0 ? minMinutes : -1
}