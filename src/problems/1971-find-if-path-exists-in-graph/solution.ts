export function validPath(n: number, edges: number[][], source: number, destination: number): boolean {
    
    let adjList: number[][] = Array.from({length: n}, () => []);

    for (const [u, v] of edges) {
        if (u === undefined || v === undefined) continue;
        adjList[u]!.push(v);
        adjList[v]!.push(u);
    }

    const queue: number[] = [source];
    const seen = new Set<number>([source]);

    while (queue.length > 0) {
        const curr = queue.shift()!;
        if (curr === destination) return true;
        for (const nei of adjList[curr]!) {
            if (!seen.has(nei)) {
                seen.add(nei);
                queue.push(nei);
            }
        }
    }
    return false;
};