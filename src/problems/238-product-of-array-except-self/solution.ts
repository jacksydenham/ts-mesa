export function productExceptSelf(nums: number[]): number[] {

    const res = new Array<number>(nums.length);

    let leftProduct = 1;
    for (let i = 0; i < nums.length; i++) {
        res[i] = (res[i] ?? 1) * leftProduct;
        leftProduct *= nums[i]!;
    }

    let rightProduct = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        res[i] = (res[i] ?? 1) * rightProduct;
        rightProduct *= nums[i]!;
    }

    return res;
}