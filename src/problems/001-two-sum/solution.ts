export function twoSum(target: number, nums: number[]): number[] {

    let map = new Map<number,number>();

    for (let i = 0; i < nums.length; i++) {
        const compliment = target - nums[i]!;
        if (map.has(compliment)) {
            return [map.get(compliment)!, i];
        }
        map.set(nums[i]!,i)
    }
    return [];
}
