export function threeSum(nums: number[]): number[][] {

    let ans = new Array<number[]>();

    nums = nums.sort((a,b) => a - b);

    for (let i = 0; i < nums.length; i++) {

        if (i > 0 && nums[i] === nums[i-1]) continue;
        
        const compliment = 0 - nums[i]!;

        let left = i+1;
        let right = nums.length - 1;

        while(left < right) {

            const leftNum = nums[left]
            if (leftNum === undefined) continue
            const rightNum = nums[right]
            if (rightNum === undefined) continue;

            const sum = leftNum + rightNum;
            
            if (sum < compliment) {
                left++;
            } else if (sum > compliment) {
                right--;
            } else if (sum === compliment) {
                ans.push([nums[i]!, leftNum, rightNum]);

                while (left < right && nums[left] === nums[left+1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;

                left++;
                right--;
            }

        }
        
    }

    return ans;
}