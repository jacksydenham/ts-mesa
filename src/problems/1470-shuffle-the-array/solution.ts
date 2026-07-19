export function shuffle(nums: number[], n: number): number[] {

    let arr = new Array<number>(n*2);

    for (let i = 0; i < n; i++) {

        // we know nums is of length 2n so we can just use a non-null assertion on both values
        arr[i*2] = nums[i]!;
        arr[i*2+1] = nums[i+n]!;
    }
    return arr
};