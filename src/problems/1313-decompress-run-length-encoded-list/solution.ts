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


// There is a much more simple implementation of this. We can essentially make an array
// of length nums[i] (our freq) and fill it with nums[i+1] (our val), then we just unpack
// the values into our result array with a spread op.
export function simpleDecompressRLElist(nums: number[]): number[] {
    
    let arr = new Array<number>();

    for (let i = 0; i < nums.length; i += 2) {
        arr.push(...Array(nums[i]).fill(nums[i+1]))
    }
    
    return arr
};