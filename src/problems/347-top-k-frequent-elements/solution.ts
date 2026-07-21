export function topKFrequent(nums: number[], k: number): number[] {
    const countMap = new Map<number, number>();
    
    const freq: number[][] = Array.from({ length: nums.length + 1 }, () => []);

    for (const num of nums) {
        countMap.set(num, (countMap.get(num) ?? 0) + 1);
    }

    for (const [num, count] of countMap) {
        freq[count]!.push(num);
    }

    const res: number[] = [];

    for (let i = freq.length - 1; i >= 0; i--) {
        for (const num of freq[i]!) {
            res.push(num);
            if (res.length === k) return res;
        }
    }

    return res;
}