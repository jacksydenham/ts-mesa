export function findMaxLength(nums: number[]): number {

    let maxLen = 0;
    let curSum = 0;
    const indexMap = new Map<number,number>([
        [0,-1]
    ]);

    for (let i = 0; i < nums.length; i++) {
        curSum += nums[i] === 0 ? -1 : 1;

        if (indexMap.has(curSum)) {
            const prevIndex = indexMap.get(curSum)!;
            maxLen = Math.max(maxLen, i - prevIndex);
        } else {
            indexMap.set(curSum, i)
        }
    }

    return maxLen
};