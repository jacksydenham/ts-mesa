export function decompressRLElist(nums: number[]): number[] {
    
    let arr = new Array<number>();

    for (let i = 0; i < nums.length; i += 2) {
        const freq = nums[i];
        const val = nums[i+1];

        for (let j = 0; j < freq!; j++) {
            arr.push(val!)
        }
    }
    
    return arr
};