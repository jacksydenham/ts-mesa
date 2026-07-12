export function numIslands(grid: string[][]): number {

    if (!grid || grid.length === 0) return 0;

    let islandCount = 0;
    const rows = grid.length;
    // @ts-expect-error: constraints declare grid m (x, our 0) must be at least 1, ! would resolve.
    const cols = grid[0].length;
    
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            
            // @ts-expect-error: honestly can't understand why grid[r] complains, but not the [c],
            // I figure they're both potentially undefined.
            if (grid[r][c] === '1') {

                islandCount += 1;

                const queue: [number,number][] = [[r,c]];

                while (queue.length > 0) {

                    // @ts-expect-error: so this is concerned that queue.shift may not exist, as it may have
                    // been affected since the condition of the loop. We know it will so we can do !, but we 
                    // should do const next = queue.shift(), and if !next we continue and the loop ends on 
                    // the next iteration, else const [currR, currC] = next.
                    const [currR, currC] = queue.shift();

                    // @ts-expect-error same as line 12
                    grid[currR][currC] = '0';

                    const neighbours = [
                        [currR+1,currC],
                        [currR-1,currC],
                        [currR,currC+1],
                        [currR,currC-1]
                    ];

                    for (const [neiR, neiC] of neighbours) {
                        if (neiR >= 0 && neiR < rows &&
                            // @ts-expect-error same as line 12.
                            neiC >= 0 && neiC < cols && grid[neiR][neiC] === '1') {
                            // @ts-expect-error same as line 12.
                            grid[neiR][neiC] = '0';
                            queue.push([neiR, neiC]);
                        }
                    }
                }
            }
        }
    }

    return islandCount;
    
};
