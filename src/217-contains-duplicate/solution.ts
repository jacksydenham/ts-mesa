export function containsDuplicate(nums: number[]): boolean {

    let set = new Set<number>();

    for (let i = 0; i < nums.length; i++) {
        if (set.has(nums[i]!)) return true;
        set.add(nums[i]!);
    }
    
    return false;
}

// if we want to save on memory at the cost of speed, we can write a constant memory
//  solution which introduces a sort, bringing our time to o(n log n)
export function containsDuplicateCM(nums: number[]): boolean {

    nums.sort((a,b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i+1]) return true;
    }

    return false;
}