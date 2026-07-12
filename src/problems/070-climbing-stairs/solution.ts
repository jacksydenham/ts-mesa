export function climbStairs(n: number): number {

    let last = 2;
    let secondLast = 1;

    for (let i = 3; i <= n; i++) {
        let current = last + secondLast;
        secondLast = last;
        last = current;
    }

    return last;
}