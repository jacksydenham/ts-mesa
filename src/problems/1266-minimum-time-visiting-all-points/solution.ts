export function minTimeVisitingAllPoints(points: number[][]): number {
    let totalTime = 0;

    // NNO hell
    for (let i = 1; i < points.length; i++) {
        const [x1, y1] = points[i-1]!;
        const [x2, y2] = points[i]!;

        const diffX = Math.abs(x2! - x1!);
        const diffY = Math.abs(y2! - y1!);

        totalTime += Math.max(diffX, diffY)
    }
    return totalTime;
}
