class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */

    productExceptSelf(nums: number[]): number[] {
    let zeroCount = 0;
    let totalProductWithoutZero = 1;

    // 1. Count zeros and find the product of all non-zero numbers
    for (const num of nums) {
        if (num === 0) {
            zeroCount++;
        } else {
            totalProductWithoutZero *= num;
        }
    }

    // 2. Build the output based on the zero count
    return nums.map(num => {
        if (zeroCount > 1) {
            return 0; 
        } else if (zeroCount === 1) {
            // Only the zero element gets a non-zero product
            return num === 0 ? totalProductWithoutZero : 0;
        } else {
            // No zeros standard division
            return totalProductWithoutZero / num;
        }
    });
}
}
