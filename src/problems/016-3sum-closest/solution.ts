export function threeSumClosest(nums: number[], target: number): number {

    nums = nums.sort((a,b) => a-b);

    let closestSum = nums[0]! + nums[1]! + nums[2]!;

    for (let i = 0; i < nums.length - 2; i++) {

        let left = i+1;
        let right = nums.length - 1;

        while (left < right) {
            const curSum = nums[i]! + nums[left]! + nums[right]!;

            if (curSum === target) return target;
            if (Math.abs(curSum - target) < Math.abs(closestSum - target)) closestSum = curSum;

            if (curSum < target) {
                left++;
            } else {
                right--;
            }
        }
    }
    return closestSum;
}